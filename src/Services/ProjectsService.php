<?php

namespace App\Services;

use App\Entity\Organization;
use App\Entity\Project;
use App\Repository\BankRepository;
use App\Repository\CategoryRepository;
use App\Repository\CityRepository;
use App\Repository\OrganizationRepository;
use App\Repository\ProjectRepository;
use Symfony\Component\Config\Definition\Exception\Exception;

class ProjectsService
{
    const DEFAULT_LIMIT = 10;
    /**
     * @var ProjectRepository
     */
    private $repository;
    /**
     * @var CategoryRepository
     */
    private $categoryRepository;
    /**
     * @var CityRepository
     */
    private $cityRepository;
    /**
     * @var BankRepository
     */
    private $bankRepository;
    /**
     * @var OrganizationRepository
     */
    private $organizationRepository;

    /**
     * ProjectService constructor.
     * @param ProjectRepository $repository
     * @param BankRepository $bankRepository
     * @param CategoryRepository $categoryRepository
     * @param CityRepository $cityRepository
     * @param OrganizationRepository $organizationRepository
     */
    public function __construct(
        ProjectRepository $repository,
        BankRepository $bankRepository,
        CategoryRepository $categoryRepository,
        CityRepository $cityRepository,
        OrganizationRepository $organizationRepository
    ) {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->cityRepository = $cityRepository;
        $this->bankRepository = $bankRepository;
        $this->organizationRepository = $organizationRepository;
    }

    /**
     * @param int $receivedLimit
     * @return int
     */
    private function checkLimit($receivedLimit)
    {
        return $receivedLimit > self::DEFAULT_LIMIT
            ? self::DEFAULT_LIMIT
            : $receivedLimit;
    }

    /**
     * @param string $from
     * @param string $to
     * @return Project[]
     */
    public function getProjects($from, $to)
    {
        return $this->repository->getProjects($from, $this->checkLimit($to));
    }

    /**
     * @param $cat
     * @param $from
     * @param $to
     * @return Project[]
     */
    public function loadMoreProjectsByCat($cat, $from, $to)
    {
        return $this->repository->loadMoreProjectsByCat($cat, $from, $this->checkLimit($to));
    }

    /**
     * @param $content
     * @param $project
     * @return bool|\Exception|Exception
     */
    public function updateProject($content, $project)
    {
        try {
            $project->setCategory($this->categoryRepository->find($content->category));
            $project->setCity($this->cityRepository->find($content->city));
            $project->setBank($this->bankRepository->find($content->bank));
            $project->setTitle($content->title);
            $project->setEndDate($content->end_date);
            $project->setDescription($content->description);
            $project->setLongDescription($content->long_description);
            $project->setGoal($content->goal);
            $project->setCharityFund($content->charity_fund);
            $project->setYoutube($content->youtube);
            $project->setImage($content->image);

            $this->repository->save($project);
        } catch (\Exception $e) {
            return false;
        }
        return true;
    }

    /**
     * @param $userId
     * @return array
     */
    public function getAllUserProjects($userId)
    {
        return $this->repository->findBy([
            'user_id' => $userId
        ]);
    }

    /**
     * @param $userId
     * @return Project|bool
     */
    public function createEmptyProject($userId)
    {
        try {
            $project = new Project();
            $project->setUserId($userId);
            $project->setTitle('');
            $project->setImage('');
            $project->setDescription('');
            $project->setEnddate('');
            $project->setGoal(0);
            $project->setReached(0);
            $project->setCharityFund('');
            $project->setFlagCreate(true);
            $project->setLongDescription('');
            $project->setYoutube('');
            $project->setImage('no-image.jpg');
            $project->setCity($this->cityRepository->find(1));
            $project->setCategory($this->categoryRepository->find(1));
            $project->setBank($this->bankRepository->find(1));

            $organization = new Organization();
            $project->setOrganization($organization);
            $this->organizationRepository->save($organization);
            $this->repository->save($project);

            return $project;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * @param $request
     * @return bool|string
     */
    public function uploadProjectFile($request)
    {
        try {
            $file = $request->files->get('file');
            $fileName = $this->generateUniqueFileName() . '_depocare_file_' . $file->getClientOriginalName();

            $file->move(
                'projects_files',
                $fileName
            );
            return $fileName;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function validateProject($project)
    {
        if (empty(trim($project->getTitle())) ||
            empty(trim($project->getDescription())) ||
            empty(trim($project->getImage())) ||
            empty(trim($project->getEndDate())) ||
            empty(trim($project->getGoal())) ||
            empty(trim($project->getCharityFund()))
        ) {
            return false;
        }
        return true;
    }

    public function changeSubmitStatus($project, $status)
    {
        $project->setFlagSubmit($status);
        $this->repository->save($project);
    }

    public function changeCreateStatus($project, $status)
    {
        $project->setFlagCreate($status);
        $this->repository->save($project);
    }

    private function generateUniqueFileName()
    {
        return md5(uniqid());
    }
}
