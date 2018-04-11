<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.3
 * Time: 22.52
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\UniqueConstraint;

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
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * @var User
     */
    private $user_id;

    /**
     * @return User
     */
    public function getUserId()
    {
        return $this->user_id;
    }

    /**
     * @param User $user_id
     */
    public function setUserId($user_id)
    {
        $this->user_id = $user_id;
    }
    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="City")
     * @ORM\JoinColumn(name="city_id", referencedColumnName="id")
     * @var City
     */
    private $city;

    /**
     * @return Category
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param Category $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }
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
     *
     * @ORM\Column(type="decimal")
     */
    private $goal;

    /**
     * @return int
     */
    public function getFlagCreate()
    {
        return $this->flag_create;
    }

    /**
     * @param int $flag_create
     */
    public function setFlagCreate($flag_create)
    {
        $this->flag_create = $flag_create;
    }
    /**
     * @ORM\Column(type="integer")
     * @var int
     */
    private $flag_create;
    /**
     * @var double
     *
     * @ORM\Column(type="decimal")
     */
    private $reached;
    /**
     * @var string
     *
     * @ORM\Column(type="string")
     */
    private $by;

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return Category
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @param Category $category
     */
    public function setCategory($category)
    {
        $this->category = $category;
    }

    /**
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * @param string $image
     */
    public function setImage($image)
    {
        $this->image = $image;
    }

    /**
     * @return int
     */
    public function getDuration()
    {
        return $this->duration;
    }

    /**
     * @param int $duration
     */
    public function setDuration($duration)
    {
        $this->duration = $duration;
    }

    /**
     * @return float
     */
    public function getGoal()
    {
        return $this->goal;
    }

    /**
     * @param float $goal
     */
    public function setGoal($goal)
    {
        $this->goal = $goal;
    }

    /**
     * @return float
     */
    public function getReached()
    {
        return $this->reached;
    }

    /**
     * @param float $reached
     */
    public function setReached($reached)
    {
        $this->reached = $reached;
    }

    /**
     * @return string
     */
    public function getBy()
    {
        return $this->by;
    }

    /**
     * @param string $by
     */
    public function setBy($by)
    {
        $this->by = $by;
    }


}
