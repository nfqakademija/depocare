<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.8
 * Time: 22.07
 */

namespace App\Controller;
use App\Services\CitiesService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Context\Context;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations as Rest;

class CitiesController extends FOSRestController
{
    use ApiTraits;

    /**
     * @Get("/cities")
     * @return View
     */
    public function getCities()
    {
        return $this->getCitiesService()->getCities();

    }

    /**
     * @return CitiesService
     */
    private function getCitiesService()
    {
        return $this->get('cities.service');
    }
}
