<?php

namespace App\Controller;

use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\Annotations\Put;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Project;

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
     * @return Response
     */
    public function updateProject(Request $request, $id)
    {
        $project = $this->getProjectRepository()->find($id);
        $content = json_decode($request->getContent());
        return
            (empty($project)) ?
                new Response('Projektas neegzistuoja', RESPONSE::HTTP_NOT_FOUND) :
            ((empty($this->getUser())) ?
                new Response('Prisijunktite', RESPONSE::HTTP_UNAUTHORIZED) :
            (($this->getUser()->getId() !== $project->getUserId()->getId() || !$project->isFlagCreate()) ?
                new Response('Negalima redaguoti projekto', RESPONSE::HTTP_FORBIDDEN) :
            ((!$this->getUsersService()->updateUserProjectCreate($content, $project->getUserId()->getId(), $this->getUser()->getId())) ?
                new Response('Nepavyko atnaujinti profilio informacijos', RESPONSE::HTTP_BAD_REQUEST) :
            ((!$this->getOrganizationService()->updateOrganizationProjectCreate($content)) ?
                new Response('Nepavyko atnaujinti organizacijos informacijos', RESPONSE::HTTP_BAD_REQUEST  ) :
            (($this->getProjectsService()->updateProject($content, $project)) ?
                new Response('Projektas išsaugotas', RESPONSE::HTTP_OK) :
                new Response('Nepavyko išsaugoti projekto', RESPONSE::HTTP_BAD_REQUEST))))));
    }

    /**
     * @Post("/newProject")
     * @return ProjectCreateController|JsonResponse
     */
    public function createEmptyProject()
    {
        $result = $this->success($this->getProjectsService()->createEmptyProject($this->getUser()));
        //return $project;
        return
            $result ?
                $result :
                new JsonResponse('Nepavyko sukurti projekto', RESPONSE::HTTP_BAD_REQUEST);
    }

    /**
     * @Post("/uploadProjectFile")
     * @param Request $request
     * @return JsonResponse|Response
     */
    public function uploadProjectFile(Request $request) {
        $fileName = $this->getProjectsService()->uploadProjectFile($request);
        return
            $fileName ?
                new JsonResponse($fileName, RESPONSE::HTTP_OK) :
                new JsonResponse('Nepavyko įkleti failo', RESPONSE::HTTP_BAD_REQUEST);
    }

    private function getProjectRepository() {
        return  $this->getDoctrine()->getRepository(Project::class);
    }

    private function getProjectsService()
    {
        return $this->get('projects.service');
    }
    private function getUsersService()
    {
        return $this->get('users.service');
    }
    private function getOrganizationService()
    {
        return $this->get('organizations.service');
    }
}
