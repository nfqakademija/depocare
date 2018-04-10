<?php

namespace App\Services;

use App\Repository\CitiesRepository;

class CitiesService
{
    /**
     * @var CitiesRepository
     */
    private $repository;

    /**
     * ProjectService constructor.
     * @param CitiesRepository $repository
     */
    public function __construct(CitiesRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getCities(){
        return $this->repository->getCities();
    }
}
