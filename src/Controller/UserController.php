<?php
namespace App\Controller;
use App\Traits\ApiTraits;
//use FOS\RestBundle\Controller\Annotations\Put;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Get;
//use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\UsersService;


/**
 * @Route("/api")
 */
class UserController extends FOSRestController
{
    use ApiTraits;
    /**
     * @Get("/profile")
     * @return View
     */

    public function getUserAction()
    {
        return $this->success($this->getUser());
    }

//    /**
//     * @Put("/user/{id}")
//     * @param Request $request
//     * @param $id
//     * @return \Symfony\Component\HttpFoundation\Response
//     */
//    public function updateProject(Request $request, $id)
//    {
//        return $this->getUsersService()->updateUserProjectCreate($request, $id, $this->getUser()->getId());
//    }

//    /**
//     * @return UsersService
//     */
//    private function getUsersService()
//    {
//        return $this->get('users.service');
//    }
}
