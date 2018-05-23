<?php

namespace App\Repository;

use App\Entity\UserProjectTransaction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UserProjectTransaction|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserProjectTransaction|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserProjectTransaction[]    findAll()
 * @method UserProjectTransaction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserProjectTransactionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserProjectTransaction::class);
    }

    public function getAllProjectsTransactions(){
        return $this->createQueryBuilder('u')
            ->select('u')
            ->getQuery()
            ->getResult();
    }

    public function addUserProjectTransaction($user, $project, $amount)
    {
        $transaction = new UserProjectTransaction();
        $transaction->setProject($project);
        $transaction->setUser($user);
        $transaction->setBalance($amount);
        $this->_em->persist($transaction);
        $this->_em->flush($transaction);
        return true;
    }
//    /**
//     * @return UserProjectTransaction[] Returns an array of UserProjectTransaction objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserProjectTransaction
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
