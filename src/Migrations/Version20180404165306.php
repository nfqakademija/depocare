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
            'INSERT INTO `users` (`id`,`username`,`username_canonical`,
          `email`,`email_canonical`,`enabled`,`salt`,`password`,`last_login`,
          `confirmation_token`,`password_requested_at`,`roles`,`lastname`,`balance`)
          VALUES (1,\'test2\',\'test2\',\'test2@test.lt\',\'test2@test.lt\',1,NULL,
          \'$2y$13$wFpZ4RUvByINqyncCZ/TxOw00KFTVyOjwSDZtEqVbGVY5wvj9HJ92\',NULL,
          NULL,NULL,\'a:0:{}\',\'Testinis\',3),
          (2,\'test\',\'test\',\'test@test.lt\',\'test@test.lt\',1,NULL,
          \'$2y$13$4nZ1ma5s28yl.pjKEEY3nuWaw3SLiGWN0l5lmE/dBuv/Hnwi26e8u\',NULL,
          NULL,NULL,\'a:0:{}\',\'Pirminis\',22),
          (3,\'Liudas\',\'Liudas\',\'liudas@gmail.com\',\'liudas@gmail.com\',1,NULL,
          \'$2y$13$Ao0GlrNa9xZiFnN356WmU.5aDlZmYkUcVHM3ciM2gAgSZJY2HTaHu\',NULL
          ,NULL,NULL,\'a:0:{}\',\'Kazalupskis\',14),
          (4,\'Haroldas\',\'Haroldas\',\'haris@gmail.com\',\'haris@gmail.com\',1,NULL,
          \'$2y$13$4oej2cAnAlx5U3Fk52r85.1zB9NuE1Gtbbu72OlbXxmbwpM83U4fq\',NULL,
          NULL,NULL,\'a:0:{}\',\'Zapalskis\',68);'
        );
        
        $this->addSql(
            "INSERT INTO `symfony`.`categories` (`id`, `title`) 
                VALUES ('1', 'Vaikai'), ('2', 'Sveikata'), ('3', 'Gyvūnai ir gamta'), 
                ('4', 'Senjorai'), ('5', 'Visuomenė'), ('6', 'Neįgalieji');"
                );
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}