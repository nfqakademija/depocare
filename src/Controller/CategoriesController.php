<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.5.2
 * Time: 11.50
 */
namespace App\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\CategoriesService;



/**
 * @Route("/api")
 */
class CategoriesController extends FOSRestController
{

    /**
     * @Get("/categories")
     * @return View
     */
    public function getCategories()
    {
        return $this->getCategoriesService()->getCategories();
    }

    /**
     * @return CategoriesService
     */
    private function getCategoriesService()
    {
        return $this->get('categories.service');
    }

}
