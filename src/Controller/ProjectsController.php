<?php

namespace App\Controller;

use App\Entity\Project;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
     * @param $id
     * @return Project|JsonResponse
     */
    public function getProjectById($id)
    {
        $project = $this->getProjectRepository()->find($id);

        return
            empty($project) ?
                new JsonResponse('', Response::HTTP_NOT_FOUND) :
            $project->isFlagCreate() ?
                new JsonResponse('', Response::HTTP_FORBIDDEN) :
                $project;
    }

    /**
     * @Get("/projectEdit/{id}")
     * @param $id
     * @return Project|JsonResponse
     */
    public function getProjectEditById($id)
    {
        $project = $this->getProjectRepository()->find($id);

        return
            empty($project) ?
                new JsonResponse('', Response::HTTP_NOT_FOUND) :
            !$project->isFlagCreate() || $this->getUser() !== $project->getUserId() ?
                new JsonResponse('', Response::HTTP_FORBIDDEN) :
                $project;
    }

    /**
     * @Get("/userProjects")
     */
    public function getAllUserProjects()
    {
        return $this->success($this->getProjectsService()->getAllUserProjects($this->getUser()));
    }

    private function getProjectRepository()
    {
        return  $this->getDoctrine()->getRepository(Project::class);
    }

    private function getProjectsService()
    {
        return $this->get('projects.service');
    }
}
