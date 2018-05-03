<?php
/**
 * Created by PhpStorm.
 * User: haroldas
 * Date: 18.5.3
 * Time: 03.47
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="banks")
 */
class Bank
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @var int
     */
    private $id;
    /**
     * @ORM\Column(type="string")
     * @var string
     */
    private $bank_name;

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
    public function getBankName(): string
    {
        return $this->bank_name;
    }

    /**
     * @param string $bank_name
     */
    public function setBankName(string $bank_name): void
    {
        $this->bank_name = $bank_name;
    }
}
