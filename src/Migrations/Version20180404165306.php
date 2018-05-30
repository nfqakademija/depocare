<?php declare(strict_types=1);

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
            'INSERT INTO `users` (`id`,`biography`,`username`,`username_canonical`,
          `email`,`email_canonical`,`enabled`,`salt`,`password`,`last_login`,
          `confirmation_token`,`password_requested_at`,`roles`,`lastname`,`balance`, `firstname`)
          VALUES (1,\'biografija\',\'test2\',\'test2\',\'test2@test.lt\',\'test2@test.lt\',1,NULL,
          \'$2y$13$wFpZ4RUvByINqyncCZ/TxOw00KFTVyOjwSDZtEqVbGVY5wvj9HJ92\',NULL,
          NULL,NULL,\'a:0:{}\',\'Testinis\',3, \'Test\'),
          (2,\'biografija\',\'test\',\'test\',\'test@test.lt\',\'test@test.lt\',1,NULL,
          \'$2y$13$4nZ1ma5s28yl.pjKEEY3nuWaw3SLiGWN0l5lmE/dBuv/Hnwi26e8u\',NULL,
          NULL,NULL,\'a:0:{}\',\'Pirminis\',22, \'Test2\'),
          (3,\'biografija\',\'Liudas\',\'Liudas\',\'liudas@gmail.com\',\'liudas@gmail.com\',1,NULL,
          \'$2y$13$Ao0GlrNa9xZiFnN356WmU.5aDlZmYkUcVHM3ciM2gAgSZJY2HTaHu\',NULL
          ,NULL,NULL,\'a:0:{}\',\'Kazalupskis\',14, \'Liudas\'),
          (4,\'biografija\',\'Haroldas\',\'Haroldas\',\'haris@gmail.com\',\'haris@gmail.com\',1,NULL,
          \'$2y$13$4oej2cAnAlx5U3Fk52r85.1zB9NuE1Gtbbu72OlbXxmbwpM83U4fq\',NULL,
          NULL,NULL,\'a:0:{}\',\'Zapalskis\',68, \'Haroldas\');'
        );

        $this->addSql(
            "INSERT INTO `banks` (`id`, `bank_name`) 
                VALUES ('1', 'Paysera'), ('2', 'Swedbank'), ('3', 'Citadelė'), ('4', 'Danske'), 
                ('5', 'Nordea'), ('6', 'DNB'), ('7', 'Seb');"
        );
        $this->addSql(
            "INSERT INTO `categories` (`id`, `title`, `glyph`) 
                VALUES ('1', 'Vaikai', 'child.png'), ('2', 'Sveikata', 'health.png'), 
                ('3', 'Gyvūnai ir gamta', 'nature.png'), 
                ('4', 'Senjorai', 'senior.png'), ('5', 'Visuomenė ir kultūra', 'society.png');"
        );
        $this->addSql(
            "INSERT INTO `organizations` (`id`, `organization_iban`,`organization_name`, 
                `organization_street_address`, `organization_phone_number`, `organization_email_address`, 
                `organization_code`,`organization_web_address`, `organization_owner_first_name`,
                `organization_owner_last_name`, `organization_owner_phone_number`, `organization_owner_email_address`) 
                VALUES ('1', 'LT518916518165165151', 'Organizacijos pavadinimas', 'Studentu g 71-111',
                'Kaunas LT-588445', '+37068963444', 'Email@gmail.com', '165491515','www.google.lt', 'Jonas', 
                'Jonaitis', '+370454811812', 'owner@gmail.com');"
        );
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
