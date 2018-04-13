<?php

namespace App\Controller;

use App\Services\ProjectsService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Put;
use Symfony\Component\HttpFoundation\Request;

class ProjectCreateController extends FOSRestController
{
    use ApiTraits;

    /**
     * @Get("/projectCreate")
     * @return View
     */
    public function getProjectCreateById()
    {
        return $this->success($this->getProjectsService()->getProjectCreateById($this->getUser()));
    }

    /**
     * @Put("/projectCreate")
     * @return View
     */
    public function updateProject(Request $request)
    {
        return $this->getProjectsService()->updateProject($request, $this->getUser());
    }

    /**
     * @return ProjectsService
     */
    private function getProjectsService()
    {
        return $this->get('projects.service');
    }
}
