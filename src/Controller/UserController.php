<?php
namespace App\Controller;
use App\Traits\ApiTraits;
use FOS\RestBundle\Controller\Annotations\Delete;
use FOS\RestBundle\Controller\Annotations\Post;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Controller\Annotations\Get;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api")
 */
class UserController extends FOSRestController
{
    use ApiTraits;
    /**
     * @Get("/profile")
     * @return UserController
     */
    public function getUserAction()
    {
        return $this->success($this->getUser());
    }

    /**
     * @Get("/userFavoriteProjects")
     */
    public function getUserFavoriteProjects()
    {
        return $this->success($this->getUsersService()->
                getUserFavoriteProjects($this->getUser()));
    }

    /**
     * @Delete("/deleteUserFavoriteProject/{project_id}")
     * @param $project_id
     * @return UserController
     */
    public function removeUserFavoriteProject($project_id)
    {
        return $this->success($this->getUsersService()->
                removeUserFavoriteProject($this->getUser(), $project_id));
    }

    /**
     * @Post("/addUserFavoriteProject/{project_id}")
     * @param $project_id
     * @return UserController
     */
    public function addUserFavoriteProject($project_id)
    {
        return $this->success($this->getUsersService()->
                addUserFavoriteProject($this->getUser(), $project_id));

    }

    /**
     * @Post("/uploadAvatar")
     * @param Request $request
     * @return UserController
     */
    public function uploadAvatar(Request $request) {
        return $this->success($this->getUsersService()->uploadAvatar($request));
    }

//    /**
//     * @Put("/user/{id}")
//     * @param Request $request
//     * @param $id
//     * @return \Symfony\Component\HttpFoundation\Response
//     */
//    public function updateProject(Request $request, $id)
//    {
//        return $this->getUsersService()->updateUserProjectCreate($request, $id, $this->getUser()->getId());
//    }

    /**
     * @return object
     */
    private function getUsersService()
    {
        return $this->get('users.service');
    }
}
