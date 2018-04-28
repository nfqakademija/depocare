<?php

namespace App\Services;

use App\Repository\ProjectRepository;
use App\Repository\CategoryRepository;
use App\Repository\CityRepository;
use App\Entity\Project;

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
    public function updateProject($request) {
        $content = json_decode($request->getContent());

        $project = $this->repository->find($content->id);

        if ($project) {
            $project->setCategory($this->categoryRepository->find($content->category));
            $project->setCity($this->cityRepository->find($content->city));
            $project->setTitle($content->title);
            $project->setDescription($content->description);
            $project->setGoal($content->goal);
            $project->setCharityFund($content->charity_fund);
        }

        $this->repository->save($project);

        return [$project];
    }

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
        $project->setCity($this->cityRepository->find(1));
        $project->setCategory($this->categoryRepository->find(1));
        $this->repository-> save($project);

        return [$project];
    }
}
