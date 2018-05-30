<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


/**
 * Class HomeController
 * @package App\Controller
 */
class HomeController extends Controller
{
    /**
     * @Route("/api/{slug}", name="API")
     */
    public function apiAction(Request $request, $slug = null)
    {
        // replace this example code with whatever you need
        // Symfony Backend integration
    }

    /**
     * @Route("/", name="homepage")
     * @Route("/{slug}", name="homepage2")
     */
    public function indexAction(Request $request, $slug = null)
    {
        // replace this example code with whatever you need
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }

}
