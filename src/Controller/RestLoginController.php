<?php
namespace App\Controller;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Routing\ClassResourceInterface;
use FOS\RestBundle\Controller\Annotations\RouteResource;

/**
 *
 * @RouteResource("api/login", pluralize=false)
 */
class RestLoginController extends FOSRestController implements ClassResourceInterface
{
    public function postAction()
    {
        throw new \DomainException('You should never see this');
    }
}
