<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.5.3
 * Time: 01.37
 */

namespace App\Repository;

use App\Entity\Organization;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class OrganizationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Organization::class);
    }

    /**
     * @param $entity
     * @return void
     */
    public function save($entity)
    {
        $this->_em->persist($entity);
        $this->_em->flush($entity);
    }
}
