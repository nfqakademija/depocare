<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.5.22
 * Time: 13.44
 */

namespace App\Services;


use App\Entity\Project;
use App\Entity\User;
use App\Repository\ProjectRepository;
use App\Repository\UserProjectTransactionRepository;
use App\Repository\UserRepository;


class UserProjectTransactionService
{

    /**
     * @var UserProjectTransactionRepository
     */
    private $repository;

    /**
     * @var ProjectRepository
     */
    private $projectRepository;

    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * ProjectService constructor.
     * @param UserProjectTransactionRepository $repository
     */
    public function __construct(UserProjectTransactionRepository $repository,
                                UserRepository $userRepository,
                                ProjectRepository $projectRepository)
    {
        $this->repository = $repository;
        $this->projectRepository = $projectRepository;
        $this->userRepository = $userRepository;
    }

    public function getAllProjectsTransactions()
    {
        return $this->repository->getAllProjectsTransactions();
    }

    /**
     * @param User $user
     * @param $project_id
     * @param $amount
     * @return bool
     */
    public function addUserProjectTransaction($user, $project_id, $amount)
    {

        /**
         * @var Project $project
         */
        $project = $this->projectRepository->find($project_id);

        if ($project && $amount > 0) {
            if ($this->userRepository->changeUserBalance($user, $amount)) {
                $this->projectRepository->changeProjectBalance($project, $amount);
                $this->repository->addUserProjectTransaction($user, $project, $amount);
                return true;
            }
        }
        return false;
    }

}
