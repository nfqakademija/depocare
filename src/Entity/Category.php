<?php
/**
 * Created by PhpStorm.
 * User: liudas
 * Date: 18.4.4
 * Time: 19.34
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 * @ORM\Table(name="categories")
 */
class Category
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @var int
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @var string
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=50)
     * @var string
     */
    private $glyph;

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
    public function getGlyph(): string
    {
        return $this->glyph;
    }

    /**
     * @param string $glyph
     */
    public function setGlyph(string $glyph): void
    {
        $this->glyph = $glyph;
    }
}
