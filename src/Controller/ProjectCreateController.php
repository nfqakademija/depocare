<?php

namespace App\Controller;

use App\Services\ProjectsService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\Put;
use FOS\RestBundle\Controller\Annotations\Post;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api")
 */
class ProjectCreateController extends FOSRestController
{
    use ApiTraits;

    /**
     * @Put("/updateProject/{id}")
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function updateProject(Request $request, $id)
    {
        return $this->getProjectsService()->updateProject($request, $id, $this->getUser()->getId());
    }

    /**
     * @Post("/newProject")
     */
    public function createEmptyProject() {
        return $this->success($this->getProjectsService()->createEmptyProject($this->getUser()));
    }

    /**
     * @Post("/uploadPdf/{id}")
     * @param Request $request
     * @param $id
     * @return ProjectCreateController
     */
    public function uploadPdf(Request $request, $id) {
        return $this->success($this->getProjectsService()->uploadPdf($request, $id, $this->getUser()->getId()));
    }

    /**
     * @return ProjectsService
     */
    private function getProjectsService()
    {
        return $this->get('projects.service');
    }
}
