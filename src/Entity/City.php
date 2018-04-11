<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.4.8
 * Time: 18.20
 */

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Table(name="city")
 * @ORM\Entity()
 */

class City
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @var int
     */
    private $id;
    /**
     * @ORM\Column(type="string", length=25)
     * @var string
     */
    private $city;

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
     * @return City
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * @param City $city
     */
    public function setCity($city)
    {
        $this->city = $city;
    }
}