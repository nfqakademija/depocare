<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.8
 * Time: 22.07
 */

namespace App\Controller;

use App\Entity\City;
use App\Services\CitiesService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

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

    /**
     * @Post("/updatecity")
     * @ParamConverter("city", converter="fos_rest.request_body")
     * @param City $city
     * @return View
     */
    public function updateCities(City $city)
    {
        var_dump($city);
        die;

    }
}
