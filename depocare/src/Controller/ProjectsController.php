<?php
namespace App\Controller;
use App\Services\ProjectsService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Context\Context;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations as Rest;

use App\Entity\Project as Project;

class ProjectsController extends FOSRestController
{
    use ApiTraits;
    /**
     * @Get("/projects")
     * @return View
     */
    public function getProjects()
    {
        return $this->getProjectsService()->getProjects();
    }
        /**
     * @Get("/projects/{cat}")
     * @return View
     */
    public function getProjectsByCat($cat)
    {
        return $this->getProjectsService()->getProjectsByCategory($cat);

    }


    /**
     * @return ProjectsService
     */
    private function getProjectsService()
    {
        return $this->get('projects.service');
    }
}
