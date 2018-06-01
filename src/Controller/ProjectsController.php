<?php

namespace App\Controller;

use App\Entity\Project;
use App\Services\ProjectsService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ProjectsController extends FOSRestController
{
    use ApiTraits;

    /**
     * @Get("/projects")
     * @param Request $request
     * @return Project[]
     */
    public function getProjects(Request $request)
    {
        $from = $request->get('getFrom');
        $to = $request->get('getTo');
        return $this->getProjectsService()->getProjects($from, $to);
    }
    //http://localhost:8000/projects/1?getFrom=6&getTo9

    /**
     * @Get("/projects/{cat}")
     * @param $cat
     * @param Request $request
     * @return Project[]
     */
    public function loadMoreProjectsByCat($cat, Request $request)
    {
        $from = $request->get('getFrom');
        $to = $request->get('getTo');
        return $this->getProjectsService()->loadMoreProjectsByCat($cat, $from, $to);
    }

    /**
     * @Get("/project/{id}")
     * @return object
     */
    public function getProjectById($id)
    {
        return $this->getProjectsService()->getProjectById($id);
    }

    /**
     * @Get("/projectEdit/{id}")
     * @param $id
     * @return mixed
     */
    public function getProjectEditById($id)
    {
        $project = $this->getProjectsService()->getProjectEditById($id);
        if (!$project) {
            return new Response('Projektas neegzistuoja', 400);
        }
        if ($project->getUserId()->getId() !== $this->getUser()->getId()) {
            return new Response("Neturite teisių redaguoti projektą", 403);
        }

        return $project;
    }

    /**
     * @Get("/userProjects")
     */
    public function getAllUserProjects()
    {
        return $this->success($this->getProjectsService()->getAllUserProjects($this->getUser()));
    }

    /**
     * @return ProjectsService
     */
    private function getProjectsService()
    {
        return $this->get('projects.service');
    }
}
