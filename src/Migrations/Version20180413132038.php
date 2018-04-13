<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180413132038 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        $this->addSql("
            UPDATE `symfony`.`users` SET `firstname`='Test' WHERE `id`='1';
            UPDATE `symfony`.`users` SET `firstname`='Pirm' WHERE `id`='2';
            UPDATE `symfony`.`users` SET `firstname`='Liudas' WHERE `id`='3';
            UPDATE `symfony`.`users` SET `firstname`='Haroldas' WHERE `id`='4';
            ");

    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
