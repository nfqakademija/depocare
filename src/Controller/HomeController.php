<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomeController
 * @package App\Controller
 */
class HomeController extends Controller
{
    /**
     * @Route("/registruotis", name="register")
     * @Route("/projektai/{slug}", name="projectsId")
     * @Route("/projektai", name="projects")
     * @Route("/prisijungti", name="login")
     * @Route("/atsijungti", name="logout")
     * @Route("/kurti/{slug}", name="createProject")
     * @Route("/projektas/{slug}", name="projectId")
     * @Route("/mano_projektai", name="myProjects")
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
        // replace this example code with whatever you need
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
        ]);
    }
}
