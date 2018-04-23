<?php
namespace App\Controller;
use App\Services\ProjectsService;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;


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
    //http://localhost:8000/projects/1?getFrom=6&getTo9
    /**
     * @Get("/projects/{cat}")
     * @return View
     */
    public function loadMoreProjectsByCat($cat, Request $request)
    {
        $from =  $request->get('getFrom');
        $to = $request->get('getTo');
        return $this->getProjectsService()->loadMoreProjectsByCat($cat, $from, $to);
    }

    /**
     * @Get("/project/{id}")
     * @return View
     */
    public function getProjectById($id){
        return $this->getProjectsService()->getProjectsById($id);
    }

    /**
     * @Get("/userProjects")
     */
    public function getAllUserProjects()
    {
        return $this->success($this->getProjectsService()->getAllUserProjects($this->getUser()));
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
