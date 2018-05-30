<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.5.3
 * Time: 01.15
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="organizations")
 * @ORM\Entity()
 */
class Organization
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @var int
     */
    private $id;
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_name = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_street_address = "";
    /**
     * @ORM\Column(type="string", length=15, options={"default" = ""})
     * @var string
     */
    private $organization_phone_number = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_email_address = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_code = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_web_address = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_owner_first_name = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_owner_last_name = "";
    /**
     * @ORM\Column(type="string", length=15, options={"default" = ""})
     * @var string
     */
    private $organization_owner_phone_number = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_owner_email_address = "";
    /**
     * @ORM\Column(type="string", options={"default" = ""})
     * @var string
     */
    private $organization_iban = "";

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getOrganizationName(): string
    {
        return $this->organization_name;
    }

    /**
     * @param string $organization_name
     */
    public function setOrganizationName(string $organization_name): void
    {
        $this->organization_name = $organization_name;
    }

    /**
     * @return string
     */
    public function getOrganizationStreetAddress(): string
    {
        return $this->organization_street_address;
    }

    /**
     * @param string $organization_street_address
     */
    public function setOrganizationStreetAddress(string $organization_street_address): void
    {
        $this->organization_street_address = $organization_street_address;
    }

    /**
     * @return string
     */
    public function getOrganizationPhoneNumber(): string
    {
        return $this->organization_phone_number;
    }

    /**
     * @param string $organization_phone_number
     */
    public function setOrganizationPhoneNumber(string $organization_phone_number): void
    {
        $this->organization_phone_number = $organization_phone_number;
    }

    /**
     * @return string
     */
    public function getOrganizationEmailAddress(): string
    {
        return $this->organization_email_address;
    }

    /**
     * @param string $organization_email_address
     */
    public function setOrganizationEmailAddress(string $organization_email_address): void
    {
        $this->organization_email_address = $organization_email_address;
    }

    /**
     * @return string
     */
    public function getOrganizationCode(): string
    {
        return $this->organization_code;
    }

    /**
     * @param string $organization_code
     */
    public function setOrganizationCode(string $organization_code): void
    {
        $this->organization_code = $organization_code;
    }

    /**
     * @return string
     */
    public function getOrganizationOwnerFirstName(): string
    {
        return $this->organization_owner_first_name;
    }

    /**
     * @param string $organization_owner_first_name
     */
    public function setOrganizationOwnerFirstName(string $organization_owner_first_name): void
    {
        $this->organization_owner_first_name = $organization_owner_first_name;
    }

    /**
     * @return string
     */
    public function getOrganizationOwnerLastName(): string
    {
        return $this->organization_owner_last_name;
    }

    /**
     * @param string $organization_owner_last_name
     */
    public function setOrganizationOwnerLastName(string $organization_owner_last_name): void
    {
        $this->organization_owner_last_name = $organization_owner_last_name;
    }

    /**
     * @return string
     */
    public function getOrganizationOwnerPhoneNumber(): string
    {
        return $this->organization_owner_phone_number;
    }

    /**
     * @param string $organization_owner_phone_number
     */
    public function setOrganizationOwnerPhoneNumber(string $organization_owner_phone_number): void
    {
        $this->organization_owner_phone_number = $organization_owner_phone_number;
    }

    /**
     * @return string
     */
    public function getOrganizationOwnerEmailAddress(): string
    {
        return $this->organization_owner_email_address;
    }

    /**
     * @param string $organization_owner_email_address
     */
    public function setOrganizationOwnerEmailAddress(string $organization_owner_email_address): void
    {
        $this->organization_owner_email_address = $organization_owner_email_address;
    }

    /**
     * @return string
     */
    public function getOrganizationWebAddress(): string
    {
        return $this->organization_web_address;
    }

    /**
     * @param string $organization_web_address
     */
    public function setOrganizationWebAddress(string $organization_web_address): void
    {
        $this->organization_web_address = $organization_web_address;
    }

    /**
     * @return string
     */
    public function getOrganizationIban(): string
    {
        return $this->organization_iban;
    }

    /**
     * @param string $organization_iban
     */
    public function setOrganizationIban(string $organization_iban): void
    {
        $this->organization_iban = $organization_iban;
    }

}
