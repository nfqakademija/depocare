<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\ManyToMany;
use FOS\UserBundle\Model\User as BaseUser;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @ORM\Column(type="boolean", options={"default" = false}, nullable=true)
     */
    private $flagHasActiveProject;

    /**
     * @var string
     * @ORM\Column(type="string", length=2000, options={"default" = "https://s3.eu-central-1.amazonaws.com/haroldas-depocare/default_profile.png"}, nullable=true)
     */
    private $image;

    /**
     * Many Users have Many Groups.
     * @ManyToMany(targetEntity="Project")
     * @JoinTable(name="favorite_projects",
     *      joinColumns={@JoinColumn(name="user_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="project_id", referencedColumnName="id")}
     *      )
     */
    private $favorite_projects;

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

    /**
     * @return string
     */
    public function getImage(): string
    {
        return $this->image;
    }

    /**
     * @param string $image
     */
    public function setImage(string $image): void
    {
        $this->image = $image;
    }

    /**
     * @return mixed
     */
    public function getFavoriteProjects()
    {
        return $this->favorite_projects;
    }

    /**
     * @param mixed $favorite_projects
     */
    public function setFavoriteProjects($favorite_projects): void
    {
        $this->favorite_projects = $favorite_projects;
    }

    /**
     * @param Project $project
     */
    public function removeFavoriteProject(Project $project)
    {
        if (false === $this->favorite_projects->contains($project)) {
            return;
        }
        $this->favorite_projects->removeElement($project);
    }

    /**
     * @param Project $project
     */
    public function addFavoriteProject(Project $project)
    {
        if (true === $this->favorite_projects->contains($project)) {
            return;
        }
        $this->favorite_projects->add($project);
    }

}
