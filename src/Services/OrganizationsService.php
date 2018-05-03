<?php

namespace App\Services;

use App\Repository\OrganizationRepository;

class OrganizationsService
{
    /**
     * @var OrganizationRepository
     */
    private $repository;

    /**
     * ProjectService constructor.
     * @param OrganizationRepository $repository
     */
    public function __construct(OrganizationRepository $repository)
    {
        $this->repository = $repository;
    }


    public function updateOrganizationProjectCreate($id, $name, $street_address, $phone_number, $email_address, $web_address, $code, $first_name, $last_name, $owner_phone_number, $iban, $owner_email_address) {
        $organization = $this->repository->find($id);
        if($organization) {
            $organization->setOrganizationName($name);
            $organization->setOrganizationStreetAddress($street_address);
            $organization->setOrganizationPhoneNumber($phone_number);
            $organization->setOrganizationEmailAddress($email_address);
            $organization->setOrganizationCode($code);
            $organization->setOrganizationWebAddress($web_address);
            $organization->setOrganizationOwnerFirstName($first_name);
            $organization->setOrganizationOwnerLastName($last_name);
            $organization->setOrganizationOwnerPhoneNumber($owner_phone_number);
            $organization->setOrganizationIban($iban);
            $organization->setOrganizationOwnerEmailAddress($owner_email_address);
        } else {
            //return new Response('Nera tokios organizacijos tokiu id',404);
            return false;
        }

        $this->repository->save($organization);

        //return new Response('Išsaugota',200);
        return true;
    }
}
