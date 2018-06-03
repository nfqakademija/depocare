<?php

namespace App\Services;

use App\Entity\Organization;
use App\Entity\Project;
use App\Repository\BankRepository;
use App\Repository\CategoryRepository;
use App\Repository\CityRepository;
use App\Repository\OrganizationRepository;
use App\Repository\ProjectRepository;
use Symfony\Component\HttpFoundation\Response;

class ProjectsService
{
    const DEFAULT_LIMIT = 10;
    /**
     * @var UsersService
     */
    private $usersService;
    /**
     * @var OrganizationsService
     */
    private $organizationService;
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
     * @var OrganizationRepository
     */
    private $organizationRepository;
    /**
     * @var BankRepository
     */
    private $bankRepository;

    /**
     * ProjectService constructor.
     * @param ProjectRepository $repository
     * @param BankRepository $bankRepository
     * @param CategoryRepository $categoryRepository
     * @param CityRepository $cityRepository
     * @param \App\Services\UsersService $usersService
     * @param OrganizationsService $organizationsService
     * @param OrganizationRepository $organizationRepository
     */
    public function __construct(
        ProjectRepository $repository,
        BankRepository $bankRepository,
        CategoryRepository $categoryRepository,
        CityRepository $cityRepository,
        UsersService $usersService,
        OrganizationsService $organizationsService,
        OrganizationRepository $organizationRepository
    ) {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->cityRepository = $cityRepository;
        $this->usersService = $usersService;
        $this->organizationService = $organizationsService;
        $this->organizationRepository = $organizationRepository;
        $this->bankRepository = $bankRepository;
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
     * @param $id
     * @return Project
     */
    public function getProjectById($id)
    {
        return $this->repository->find($id);
    }

    /**
     * @param $id
     * @return object
     */
    public function getProjectEditById($projectId)
    {
        return $this->getProjectById($projectId);
    }

    /**
     * @param $request
     * @param $id
     * @param $user
     * @return Response
     */
    public function updateProject($content, $id, $user)
    {
        $project = $this->repository->find($id);
        if (!$project) {
            return new Response('Projektas neegzistuoja', 400);
        }
        if (!$this->usersService->updateUserProjectCreate(
            $content,
            $project->getUserId()->getId(),
            $user
        )
        ) {
            return new Response("Nepavyko atnaujinti profilio informacijos", 400);
        }

        if (!$this->organizationService->updateOrganizationProjectCreate($content)) {
            return new Response("Nepavyko atnaujinti profilio informacijos", 400);
        }

        if (!$project->getUserId()->getId() === $user) {
            return new Response("Neturite teisių redaguoti projektą", 403);
        }
        if (!$project->isFlagCreate()) {
            return new Response("Projekto negalima redaguoti", 403);
        }

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

        return new Response('Projektas išsaugotas', 200);
    }

    /**
     * @param $userId
     * @return array
     */
    public function getAllUserProjects($userId)
    {
        return $this->repository->getAllUserProjects($userId);
    }

    /**
     * @param $userId
     * @return Project
     */
    public function createEmptyProject($userId)
    {
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
        $project->setOrganization(new Organization());
        $this->repository->save($project);

        return $project;
    }

    public function uploadFile($request) {
        $file = $request->files->get('file');

        $fileName = $this->generateUniqueFileName() . '_depocare_file_' . $file->getClientOriginalName();

        // moves the file to the directory where brochures are stored
        $file->move(
            'projects_files',
            $fileName
        );

        return $fileName;
    }

    private function generateUniqueFileName()
    {
        return md5(uniqid());
    }
}
