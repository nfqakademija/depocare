<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.5.2
 * Time: 06.36
 */

namespace App\Services;

use App\Repository\UserRepository;

use Symfony\Component\HttpFoundation\Response;

class UsersService
{
    /**
     * @var UserRepository
     */
    private $repository;

    /**
     * UsersService constructor.
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param $request
     * @param $id
     * @param $user_id
     * @return Response
     */
    public function updateUserProjectCreate($request, $id, $user_id) {
        if($id != $user_id) {
            return new Response('Neturite tam teisių',404);
        }

        $user = $this->repository->find($user_id);
        $content = json_decode($request->getContent());
        if($user) {
            if (!$user->isFlagHasActiveProject()) {
                $user->setFirstname($content->first_name);
                $user->setLastname($content->last_name);
            }
            $user->setBiography($content->biography);
        } else {
            return new Response('Nera tokio vartotojo su tokiu id',400);
        }

        $this->repository->save($user);

        return new Response('Išsaugota',200);
    }
}