<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180404165306 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        $this->addSql(
            "INSERT INTO `depocare`.`categories` (`id`, `title`) 
                VALUES ('1', 'Vaikai'), ('2', 'Sveikata'), ('3', 'Gyvūnai ir gamta'), 
                ('4', 'Senjorai'), ('5', 'Visuomenė'), ('6', 'Neįgalieji');"
                );
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
