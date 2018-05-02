<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.3
 * Time: 22.52
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Table(name="projects")
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 */
class Project
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @var int
     */
    private $id;
    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Category")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     * @var Category
     */
    private $category;
    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="Organization")
     * @ORM\JoinColumn(name="organization_id", referencedColumnName="id")
     * @var Organization
     */
    private $organization;
    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * @var User
     */
    private $user_id;
    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="City")
     * @ORM\JoinColumn(name="city_id", referencedColumnName="id")
     * @var City
     */
    private $city;
    /**
     * @var string
     *
     * @ORM\Column(type="string", length=100)
     */
    private $title;
    /**
     * @var string
     *
     * @ORM\Column(type="string")
     */
    private $description;
    /**
     * @var string
     *
     * @ORM\Column(type="string")
     */
    private $image;
    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $duration;
    /**
     * @var double
     * @ORM\Column(type="float", scale=2)
     */
    private $goal;
    /**
     * @var bool
     * @ORM\Column(type="boolean", options={"default" = true})
     */
    private $flag_create;
    /**
     * @var double
     * @ORM\Column(type="float", scale=2)
     */
    private $reached;
    /**
     * @var string
     *
     * @ORM\Column(type="string")
     */
    private $charity_fund;
    /**
     * @var string
     *
     * @ORM\Column(type="string", length=100)
     */
    private $youtube;
    /**
     * @var string
     *
     * @ORM\Column(type="text")
     */
    private $long_description;
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
     * @return Category
     */
    public function getCategory(): Category
    {
        return $this->category;
    }

    /**
     * @param Category $category
     */
    public function setCategory(Category $category): void
    {
        $this->category = $category;
    }

    /**
     * @return User
     */
    public function getUserId(): User
    {
        return $this->user_id;
    }

    /**
     * @param User $user_id
     */
    public function setUserId(User $user_id): void
    {
        $this->user_id = $user_id;
    }

    /**
     * @return City
     */
    public function getCity(): City
    {
        return $this->city;
    }

    /**
     * @param City $city
     */
    public function setCity(City $city): void
    {
        $this->city = $city;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
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
     * @return int
     */
    public function getDuration(): int
    {
        return $this->duration;
    }

    /**
     * @param int $duration
     */
    public function setDuration(int $duration): void
    {
        $this->duration = $duration;
    }

    /**
     * @return float
     */
    public function getGoal(): float
    {
        return $this->goal;
    }

    /**
     * @param float $goal
     */
    public function setGoal(float $goal): void
    {
        $this->goal = $goal;
    }

    /**
     * @return float
     */
    public function getReached(): float
    {
        return $this->reached;
    }

    /**
     * @param float $reached
     */
    public function setReached(float $reached): void
    {
        $this->reached = $reached;
    }

    /**
     * @return string
     */
    public function getCharityFund(): string
    {
        return $this->charity_fund;
    }

    /**
     * @param string $charity_fund
     */
    public function setCharityFund(string $charity_fund): void
    {
        $this->charity_fund = $charity_fund;
    }

    /**
     * @return string
     */
    public function getYoutube(): string
    {
        return $this->youtube;
    }

    /**
     * @param string $youtube
     */
    public function setYoutube(string $youtube): void
    {
        $this->youtube = $youtube;
    }

    /**
     * @return string
     */
    public function getLongDescription(): string
    {
        return $this->long_description;
    }

    /**
     * @param string $long_description
     */
    public function setLongDescription(string $long_description): void
    {
        $this->long_description = $long_description;
    }

    /**
     * @return bool
     */
    public function isFlagCreate(): bool
    {
        return $this->flag_create;
    }

    /**
     * @param bool $flag_create
     */
    public function setFlagCreate(bool $flag_create): void
    {
        $this->flag_create = $flag_create;
    }

    /**
     * @return Organization
     */
    public function getOrganization(): Organization
    {
        return $this->organization;
    }

    /**
     * @param Organization $organization
     */
    public function setOrganization(Organization $organization): void
    {
        $this->organization = $organization;
    }
}
