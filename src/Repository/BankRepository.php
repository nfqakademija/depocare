<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.5.3
 * Time: 03.49
 */

namespace App\Repository;

use App\Entity\Bank;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

class BankRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Bank::class);
    }
}
