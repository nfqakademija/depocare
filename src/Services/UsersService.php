<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.5.2
 * Time: 06.36
 */

namespace App\Services;

use App\Repository\ProjectRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

//use Symfony\Component\HttpFoundation\Response;

class UsersService
{
    /**
     * @var UserRepository
     */
    private $repository;

    /**
     * @var ProjectRepository
     */
    private $projectRepository;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * UsersService constructor.
     * @param UserRepository $repository
     * @param ProjectRepository $projectRepository
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(
        UserRepository $repository,
        ProjectRepository $projectRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->repository = $repository;
        $this->projectRepository = $projectRepository;
        $this->em = $entityManager;
    }

    /**
     * @param $first_name
     * @param $last_name
     * @param $biography
     * @param $profile_image
     * @param $id
     * @param $user_id
     * @return boolean
     */
    public function updateUserProjectCreate($first_name, $last_name, $biography, $profile_image, $id, $user_id)
    {
        if ($id != $user_id) {
            //return new Response('Neturite tam teisių',403);
            return false;
        }

        $user = $this->repository->find($user_id);
        if ($user) {
            if (!$user->isFlagHasActiveProject()) {
                $user->setFirstname($first_name);
                $user->setLastname($last_name);
            }
            $user->setBiography($biography);
            $user->setImage($profile_image);
        } else {
            //return new Response('Nera tokio vartotojo su tokiu id',404);
            return false;
        }

        $this->repository->save($user);

        //return new Response('Išsaugota',200);
        return true;
    }

    /**
     * @param $user_id
     * @return mixed
     */
    public function getUserFavoriteProjects($user_id)
    {
        return $this->repository->getUserFavoriteProjects($user_id);
    }


    public function removeUserFavoriteProject($user_id, $project_id)
    {

        $user = $this->repository->find($user_id);
        $project = $this->projectRepository->find($project_id);

        if ($user && $project) {
            $user->removeFavoriteProject($project);
            $this->em->flush();
        } else {
            return false;
        }
        return true;
    }

    public function addUserFavoriteProject($user_id, $project_id)
    {

        $user = $this->repository->find($user_id);
        $project = $this->projectRepository->find($project_id);

        if ($user && $project) {
            $user->addFavoriteProject($project);
            $this->em->persist($project);
            $this->em->flush();
        } else {
            return false;
        }
        return true;
    }
}
