<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.5.22
 * Time: 13.41
 */

namespace App\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use App\Services\UserProjectTransactionService;
use Symfony\Component\Routing\Annotation\Route;
use FOS\RestBundle\View\View;
use App\Traits\ApiTraits;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;




/**
 * @Route("/api")
 */
class UserProjectTransactionController extends FOSRestController
{

    use ApiTraits;

    /**
     * @Get("/transactions/all")
     * @return View
     */
    public function getUserProjectTransactions()
    {
        return $this->getUserProjectTransactionService()->getAllProjectsTransactions();

    }

    /**
     * @Post("/newtransaction")
     * @param Request $request
     * @return Response
     */
    public function addUserFavoriteProject(Request $request)
    {
        $projectId =  $request->get('project_id');
        $amount = $request->get('amount');
        if($this->getUserProjectTransactionService()
            ->addUserProjectTransaction( $this->getUser(), $projectId, $amount) ) {
            return new Response('Sėkmingai parėmete',200);
        }
        else return new Response('Paremti nepavyko', 400);

    }

    /**
     * @return UserProjectTransactionService
     */
    private function getUserProjectTransactionService()
    {
        /**
         * @var UserProjectTransactionService $userProjectTransactionService
         */
        $userProjectTransactionService = $this->get('user_project_transaction.service');
        return $userProjectTransactionService;
    }
}
