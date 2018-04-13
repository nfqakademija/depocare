<?php

namespace App\Services;

use App\Repository\CityRepository;

class CitiesService
{
    /**
     * @var CityRepository
     */
    private $repository;

    /**
     * ProjectService constructor.
     * @param CityRepository $repository
     */
    public function __construct(CityRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getCities(){
        return $this->repository->getCities();
    }
}
