<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.8
 * Time: 22.04
 */

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Category::class);
    }

    public function getCategories()
    {
        return $this->createQueryBuilder('c')
            ->select('c')
            ->getQuery()
            ->getResult();
    }
}
