<?php

namespace App\Services;

use App\Entity\Organization;
use App\Repository\ProjectRepository;
use App\Repository\CategoryRepository;
use App\Repository\BankRepository;
use App\Repository\CityRepository;
use App\Repository\OrganizationRepository;
use App\Entity\Project;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ProjectsService
{
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
    public function __construct(ProjectRepository $repository, BankRepository $bankRepository, CategoryRepository $categoryRepository, CityRepository $cityRepository, UsersService $usersService, OrganizationsService $organizationsService, OrganizationRepository $organizationRepository)
    {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->cityRepository = $cityRepository;
        $this->usersService = $usersService;
        $this->organizationService = $organizationsService;
        $this->organizationRepository = $organizationRepository;
        $this->bankRepository = $bankRepository;
    }

    public function getProjects($from, $to){
        return $this->repository->getProjects($from, $to);
    }

    /**
     * @param $cat
     * @param $from
     * @param $to
     * @return mixed
     */
    public function loadMoreProjectsByCat($cat, $from, $to){
        return $this->repository->loadMoreProjectsByCat($cat,$from, $to);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getProjectById($id){
        return $this->repository->find($id);
    }

    /**
     * @param $id
     * @param $user_id
     * @return mixed
     */
    public function getProjectEditById($id, $user_id){
        $project = $this->getProjectById($id);
        if(!$project) {
            return new Response('Projektas neegzistuoja',400);
        }
        if($project->getUserId()->getId() !== $user_id) {
            return new Response("Neturite teisių redaguoti projektą", 403);
        }
        return $project;
    }

    /**
     * @param $request
     * @param $id
     * @param $user
     * @return Response
     */
    public function updateProject($request, $id, $user) {
        $project = $this->repository->find($id);
        $content = json_decode($request->getContent());

        if (!$project) {
            return new Response('Projektas neegzistuoja',400);
        }
        if(!$this->usersService->updateUserProjectCreate($content->first_name, $content->last_name, $content->biography, $content->profile_image, $project->getUserId()->getId(), $user))  {
            return new Response("Nepavyko atnaujinti profilio informacijos", 400);
        }

        if(!$this->organizationService->updateOrganizationProjectCreate($content->organization_id, $content->organization_name,$content->organization_street_address,$content->organization_phone_number,$content->organization_email_address,$content->organization_web_address,$content->organization_code,$content->organization_owner_first_name,$content->organization_owner_last_name,$content->organization_owner_phone_number,$content->organization_iban,$content->organization_owner_email_address ))  {
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

        return new Response('Projektas išsaugotas',200);
    }

    /**
     * @param $user_id
     * @return array
     */
    public function getAllUserProjects($user_id) {
        return $this->repository->getAllUserProjects($user_id);
    }

    /**
     * @param $user_id
     * @return Project
     */
    public function createEmptyProject($user_id) {
        $project = new Project();
        $project->setUserId($user_id);
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
        $this->organizationRepository->save($organization);
        $project->setOrganization($organization);
        $this->repository-> save($project);

        return $project;
    }

    public function uploadPdf($request, $id, $user) {
        $file = $request->files->get('file');

        $project = $this->repository->find($id);

        $fileName = $this->generateUniqueFileName() . '_depocare_pdf_' . $file->getClientOriginalName();

        // moves the file to the directory where brochures are stored
        $file->move(
            'pdf',
            $fileName
        );
        $project->setLongDescription($fileName);

        return $fileName;
    }

    private function generateUniqueFileName()
    {
        return md5(uniqid());
    }
}
