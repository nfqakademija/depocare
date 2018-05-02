<?php

namespace App\Services;

use App\Repository\ProjectRepository;
use App\Repository\CategoryRepository;
use App\Repository\CityRepository;
use App\Entity\Project;
use Symfony\Component\HttpFoundation\Response;

class ProjectsService
{
    /**
     * @var UsersService
     */
    private $usersService;
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
     * ProjectService constructor.
     * @param ProjectRepository $repository
     * @param CategoryRepository $categoryRepository
     * @param CityRepository $cityRepository
     * @param \App\Services\UsersService $usersService
     */
    public function __construct(ProjectRepository $repository, CategoryRepository $categoryRepository, CityRepository $cityRepository, UsersService $usersService)
    {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->cityRepository = $cityRepository;
        $this->usersService = $usersService;
    }

    public function getProjects(){
        return $this->repository->getProjects();
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
    public function getProjectsById($id){
        return $this->repository->getProjectById($id);
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

        if ($project) {
            if($this->usersService->updateUserProjectCreate($content->first_name, $content->last_name, $content->biography, $content->profile_image, $project->getUserId()->getId(), $user)) {
                if (!$project->getUserId()->getId() === $user) {
                    return new Response("Neturite teisių redaguoti projektą", 403);
                }
                if (!$project->isFlagCreate()) {
                    return new Response("Projekto negalima redaguoti", 403);
                }

                $project->setCategory($this->categoryRepository->find($content->category));
                $project->setCity($this->cityRepository->find($content->city));
                $project->setTitle($content->title);
                $project->setDescription($content->description);
                $project->setGoal($content->goal);
                $project->setCharityFund($content->charity_fund);
                $project->setYoutube($content->youtube);
                $project->setLongDescription($content->long_description);
                $project->setImage($content->image);
            } else {
                return new Response("Nepavyko atnaujinti profilio informacijos", 400);
            }
        } else {
            return new Response('Projektas neegzistuoja',400);
        }

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
     * @return array
     */
    public function createEmptyProject($user_id) {
        $project = new Project();
        $project->setUserId($user_id);
        $project->setTitle('');
        $project->setImage('');
        $project->setDescription('');
        $project->setDuration(0);
        $project->setGoal(0);
        $project->setReached(0);
        $project->setCharityFund('');
        $project->setLongDescription('');
        $project->setYoutube('');
        $project->setImage('https://s3.eu-central-1.amazonaws.com/haroldas-depocare/photos/no-image.jpg');
        $project->setCity($this->cityRepository->find(1));
        $project->setCategory($this->categoryRepository->find(1));
        $this->repository-> save($project);

        return [$project];
    }
}
