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

    /**
     * @param $content
     * @return bool
     */
    public function updateOrganizationProjectCreate($content)
    {
        try {
            $organization = $this->repository->find($content->organization_id);
            if ($organization) {
                $organization->setOrganizationName($content->organization_name);
                $organization->setOrganizationStreetAddress($content->organization_street_address);
                $organization->setOrganizationPhoneNumber($content->organization_phone_number);
                $organization->setOrganizationEmailAddress($content->organization_email_address);
                $organization->setOrganizationCode($content->organization_code);
                $organization->setOrganizationWebAddress($content->organization_web_address);
                $organization->setOrganizationOwnerFirstName($content->organization_owner_first_name);
                $organization->setOrganizationOwnerLastName($content->organization_owner_last_name);
                $organization->setOrganizationOwnerPhoneNumber($content->organization_owner_phone_number);
                $organization->setOrganizationIban($content->organization_iban);
                $organization->setOrganizationOwnerEmailAddress($content->organization_owner_email_address);
            } else {
                //return new Response('Nera tokios organizacijos tokiu id',404);
                return false;
            }
        } catch (\Exception $e) {
            return false;
        }

        $this->repository->save($organization);

        //return new Response('Išsaugota',200);
        return true;
    }
}
