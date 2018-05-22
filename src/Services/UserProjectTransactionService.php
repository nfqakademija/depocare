<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.5.22
 * Time: 13.44
 */

namespace App\Services;


use App\Repository\UserProjectTransactionRepository;

class UserProjectTransactionService
{

    /**
     * @var UserProjectTransactionRepository
     */
    private $repository;

    /**
     * ProjectService constructor.
     * @param UserProjectTransactionRepository $repository
     */
    public function __construct(UserProjectTransactionRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getAllProjectsTransactions(){
        return $this->repository->getAllProjectsTransactions();
    }

}
