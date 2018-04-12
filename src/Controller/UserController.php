<?php
namespace App\Controller;
use App\Traits\ApiTraits;
use FOS\RestBundle\Context\Context;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations as Rest;

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