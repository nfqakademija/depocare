<?php

namespace App\Repository;

use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\User;
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

    public function getProjects(){
        return $this->createQueryBuilder('p')
            ->select('p')
            ->getQuery()
            ->getResult();
    }

    public function getProjectsByCategory($cat)
    {
        return $this->createQueryBuilder('p')
            ->select('p')
            ->where('p.category = :cat')
            ->setParameter('cat', $cat)
            ->getQuery()
            ->getResult();
    }

    public function updateProject($request, $user_id){
        $content = json_decode($request->getContent());;
        return $this->createQueryBuilder('p')
             ->update('App\Entity\Project', 'p')
             ->set('p.title', '?1')
             ->set('p.category', '?2')
             ->set('p.city', '?3')
             ->set('p.description', '?4')
             ->set('p.goal', '?5')
             ->where('p.user_id =:userKintamasis')
             ->setParameter('1', $content->title)
             ->setParameter('2', $content->category)
             ->setParameter('3', $content->city)
             ->setParameter('4', $content->description)
             ->setParameter('5', $content->goal)
             ->setParameter('userKintamasis', $user_id)
             ->getQuery()->getResult();
    }

    public function getProjectCreateById($user_id) {
            return $this->createQueryBuilder('p')
                ->select('p')
                ->where('p.flag_create = 1')->andWhere('p.user_id =:userKintamasis')
                ->setParameter('userKintamasis', $user_id)
                ->getQuery()
                ->getResult();
    }
}
