<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180502083426 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        $this->addSql("
            UPDATE `projects` SET `category_id`='5' WHERE `category_id`='6';
            UPDATE `categories` SET `glyph`='child.png' WHERE `id`='1';
            UPDATE `categories` SET `glyph`='health.png' WHERE `id`='2';
            UPDATE `categories` SET `glyph`='nature.png' WHERE `id`='3';
            UPDATE `categories` SET `glyph`='senior.png' WHERE `id`='4';
            UPDATE `categories` SET `title`='Visuomenė ir kultūra', `glyph`='society.png' WHERE `id`='5';
            DELETE FROM `categories` WHERE `id`='6';
            "
        );

    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
