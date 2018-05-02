<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.5.2
 * Time: 06.36
 */

namespace App\Services;

use App\Repository\UserRepository;

//use Symfony\Component\HttpFoundation\Response;

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
     * @param $first_name
     * @param $last_name
     * @param $biography
     * @param $id
     * @param $user_id
     * @return boolean
     */
    public function updateUserProjectCreate($first_name, $last_name, $biography, $id, $user_id) {
        if($id != $user_id) {
            //return new Response('Neturite tam teisių',403);
            return false;
        }

        $user = $this->repository->find($user_id);
        if($user) {
            if (!$user->isFlagHasActiveProject()) {
                $user->setFirstname($first_name);
                $user->setLastname($last_name);
            }
            $user->setBiography($biography);
        } else {
            //return new Response('Nera tokio vartotojo su tokiu id',404);
            return false;
        }

        $this->repository->save($user);

        //return new Response('Išsaugota',200);
        return true;
    }
}