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
use Symfony\Component\Config\Definition\Exception\Exception;

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
     * @param $content
     * @param $projectUserId
     * @param $userId
     * @return bool|\Exception|Exception
     */
    public function updateUserProjectCreate($content, $projectUserId, $userId)
    {
        if ($projectUserId != $userId) {
            return false;
        }

        $user = $this->repository->find($userId);
        if ($user) {
            try {
                if (!$user->isFlagHasActiveProject()) {
                    $user->setFirstname($content->first_name);
                    $user->setLastname($content->last_name);
                }
                $user->setBiography($content->biography);
                $user->setImage($content->profile_image);
            } catch (\Exception $e) {
                return false;
            }
        } else {
            return false;
        }

        $this->repository->save($user);

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

    public function uploadAvatar($request)
    {
        $file = $request->files->get('file');

        $fileName = $this->generateUniqueFileName() . '_depocare_avatar_' . $file->getClientOriginalName();

        // moves the file to the directory where brochures are stored
        $file->move(
            'avatars',
            $fileName
        );

        return $fileName;
    }

    private function generateUniqueFileName()
    {
        return md5(uniqid());
    }
}
