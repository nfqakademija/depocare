<?php
namespace App\Controller;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Get;

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
}
