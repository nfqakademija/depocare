<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.5.22
 * Time: 13.41
 */

namespace App\Controller;

use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\FOSRestController;

use App\Services\UserProjectTransactionService;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\View\View;



/**
 * @Route("/api")
 */
class UserProjectTransactionController extends FOSRestController
{


    /**
     * @Get("/transactions/all")
     * @return View
     */
    public function getUserProjectTransactions()
    {
        return $this->getUserProjectTransactionService()->getAllProjectsTransactions();

    }

    /**
     * @return UserProjectTransactionService
     */
    private function getUserProjectTransactionService()
    {
        return $this->get('user_project_transaction.service');
    }
}
