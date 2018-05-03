<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.5.2
 * Time: 11.52
 */
namespace App\Services;

use App\Repository\CategoryRepository;

class CategoriesService
{
    /**
     * @var CategoryRepository
     */
    private $repository;

    /**
     * ProjectService constructor.
     * @param CategoryRepository $repository
     */
    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getCategories(){
        return $this->repository->getCategories();
    }
}
