<?php

namespace App\Services;

use App\Repository\OrganizationRepository;

class OrganizationsService
{
    /**
     * @var OrganizationRepository
     */
    private $repository;

    /**
     * ProjectService constructor.
     * @param OrganizationRepository $repository
     */
    public function __construct(OrganizationRepository $repository)
    {
        $this->repository = $repository;
    }
}
