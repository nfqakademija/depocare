<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.8
 * Time: 22.04
 */

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;


class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
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


    public function getUserFavoriteProjects($user_id)
    {
        return $this->findBy([
            'id' => $user_id
        ]);
    }

    /**
     * @param User $user
     * @param $amount
     */
    public function changeUserBalance($user, $amount)
    {
        if ($user->getBalance() - $amount >= 0) {
            $user->setBalance($user->getBalance() - $amount);
            $this->_em->persist($user);
            $this->_em->flush($user);
            return true;
        } else return false;

    }
}
