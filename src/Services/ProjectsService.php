<?php

namespace App\Services;

use App\Repository\ProjectRepository;
use App\Repository\CategoryRepository;
use App\Repository\CityRepository;

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

    public function getProjectCreateById($user_id){
        return $this->repository->getProjectCreateById($user_id);
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
     * @param $user_id
     * @return mixed
     */
    public function updateProject($request, $user_id) {
        $content = json_decode($request->getContent());;

        $project = $this->repository->getProjectCreateById($user_id);


        if ($project) {
            $project->setCategory($this->categoryRepository->find($content->category));
            $project->setCity($this->cityRepository->find($content->city));
            $project->setTitle($content->title);
            $project->setDescription($content->description);
            $project->setGoal($content->goal);
            $project->setCharityFund($content->charity_fund);
        }

        $this->repository->save($project);
    }
}
