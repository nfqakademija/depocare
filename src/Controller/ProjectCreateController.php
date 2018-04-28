<?php

namespace App\Controller;

use App\Services\ProjectsService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations\Put;
use FOS\RestBundle\Controller\Annotations\Post;
use Symfony\Component\HttpFoundation\Request;

class ProjectCreateController extends FOSRestController
{
    use ApiTraits;

    /**
     * @Put("/projectCreate")
     * @var Request $request *
     * @return View
     */
    public function updateProject(Request $request)
    {
        return $this->getProjectsService()->updateProject($request);
    }

    /**
     * @Post("/newProject")
     */
    public function createEmptyProject() {
        return $this->success($this->getProjectsService()->createEmptyProject($this->getUser()));
    }

    /**
     * @return ProjectsService
     */
    private function getProjectsService()
    {
        return $this->get('projects.service');
    }
}
