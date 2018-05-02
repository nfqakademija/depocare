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
     */
    public function __construct(ProjectRepository $repository, CategoryRepository $categoryRepository, CityRepository $cityRepository)
    {
        $this->repository = $repository;
        $this->categoryRepository = $categoryRepository;
        $this->cityRepository = $cityRepository;
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
            if(!$project->getUserId()->getId() === $user) {
                return new Response("Neturite teisių redaguoti projektą", 403);
            }
            if(!$project->getFlagCreate() == 1) {
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
            return new Response('Nera tokio projekto su tokiu id',400);
        }

        $this->repository->save($project);

        return new Response('',200);
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
        $project->setFlagCreate(1);
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
