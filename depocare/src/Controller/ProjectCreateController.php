<?php
namespace App\Controller\Api;
use App\Services\ProjectsService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Context\Context;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Put;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Project as Project;

class ProjectCreateController extends FOSRestController
{
    use ApiTraits;

    /**
     * @Get("/projectCreate")
     * @return View
     */
    public function getProjectCreateById()
    {
        return $this->getProjectsService()->getProjectCreateById($this->getUser());

    }
    /**
     * @Put("/projectCreate")
     * @return View
     */
    public function updateProject(Request $request) {
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
