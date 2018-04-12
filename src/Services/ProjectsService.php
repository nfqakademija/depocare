<?php

namespace App\Services;

use App\Repository\ProjectRepository;

class ProjectsService
{
    /**
     * @var ProjectRepository
     */
    private $repository;

    /**
     * ProjectService constructor.
     * @param ProjectRepository $repository
     */
    public function __construct(ProjectRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getProjectCreateById($user_id){
        return $this->repository->getProjectCreateById($user_id);
    }

    /**
    public function getProjects(){
        return $this->repository->getProjects();
    }

    /**
     * @param $cat
     * @return mixed
     */
    public function getProjectsByCategory($cat){
        return $this->repository->getProjectsByCategory($cat);
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
     * @return
     */
    public function updateProject($request, $user_id) {
        return $this->repository->updateProject($request, $user_id);
    }
}
