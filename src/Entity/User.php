<?php

namespace App\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 * @UniqueEntity("email")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=100)
     */
    private $firstname = "";

    /**
     * @var string
     * @ORM\Column(type="string", length=100)
     */
    private $lastname = "";

    /**
     * @var double
     * @ORM\Column(type="float", scale=2)
     */
    private $balance = 0;

    /**
     * @var string
     * @Assert\Email()
     */
    protected $email;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     */
    private $biography = null;

    /**
     * @var bool
     * @ORM\Column(type="boolean", options={"default" = false})
     */
    private $flagHasActiveProject;

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getFirstname(): string
    {
        return $this->firstname;
    }

    /**
     * @param string $firstname
     */
    public function setFirstname(string $firstname): void
    {
        $this->firstname = $firstname;
    }

    /**
     * @return float
     */
    public function getBalance()
    {
        return $this->balance;
    }

    /**
     * @param float $balance
     */
    public function setBalance($balance)
    {
        $this->balance = $balance;
    }

    /**
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * @param string $lastname
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }

    /**
     * @return string
     */
    public function getBiography(): string
    {
        return $this->biography;
    }

    /**
     * @param string $biography
     */
    public function setBiography(string $biography): void
    {
        $this->biography = $biography;
    }

    /**
     * @return bool
     */
    public function isFlagHasActiveProject(): bool
    {
        return $this->flagHasActiveProject;
    }

    /**
     * @param bool $flagHasActiveProject
     */
    public function setFlagHasActiveProject(bool $flagHasActiveProject): void
    {
        $this->flagHasActiveProject = $flagHasActiveProject;
    }


}
