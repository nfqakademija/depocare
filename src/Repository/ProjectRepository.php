<?php

namespace App\Repository;

use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * Class ProjectRepository
 * @package App\Repository
 */
class ProjectRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Project::class);
    }

    public function getProjects($from, $to){
        return $this->createQueryBuilder('p')
            ->select('p')
            ->where('p.flag_create = false')
            ->orderBy('p.goal-p.reached')
            ->setFirstResult($from)
            ->setMaxResults($to)
            ->getQuery()
            ->getResult();
    }

    public function getProjectsByCategory($cat)
    {
        return $this->createQueryBuilder('p')
            ->select('p')
            ->where('p.category = :cat')
            ->andWhere('p.flag_create = false')
            ->setParameter('cat', $cat)
            ->setMaxResults(6)
            ->getQuery()
            ->getResult();
    }

    public function loadMoreProjectsByCat($cat,$from, $to)
    {
        return $this->createQueryBuilder('p')
            ->select('p')
            ->where('p.category = :cat')
            ->andWhere('p.flag_create = false')
            ->setParameter('cat', $cat)
            ->setFirstResult($from)
            ->setMaxResults($to)
            ->getQuery()
            ->getResult();
    }
    /**
     * @param $entity
     *
     * @return void
     */
    public function save($entity)
    {
        $this->_em->persist($entity);
        $this->_em->flush($entity);
    }

    public function getAllUserProjects($user_id) {
        return $this->findBy([
            'user_id' => $user_id
        ]);
    }
}
