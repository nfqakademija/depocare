<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180405073733 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        $this->addSql(
            "INSERT INTO `symfony`.`city` (`id`, `city`) VALUES 
            (1 ,'Visa Lietuva'),
            (2, 'Vilnius raj.'),
            (3, 'Kauno raj.'),
            (4, 'Klaipėdos raj.'),
            (5, 'Šiaulių raj.'),
            (6, 'Penevėžio raj.'),
            (7, 'Alytus raj.'),
            (8, 'Telšių raj.'),
            (9, 'Tauragės raj.'),
            (10, 'Marijampolės raj.'),
            (11, 'Utenos raj.'),
            (12, 'Akmenė'),
            (13, 'Alytaus m.'),
            (14, 'Anykščiai'),
            (15, 'Ariogala'),
            (16, 'Baltoji Vokė'),
            (17, 'Birštonas'),
            (18, 'Biržai'),
            (19, 'Daugai'),
            (20, 'Druskininkai'),
            (21, 'Dūkštas'),
            (22, 'Dusetos'),
            (23, 'Eišiškės'),
            (24, 'Elektrėnai'),
            (25, 'Ežerėlis'),
            (26, 'Gargždai'),
            (27, 'Garliava'),
            (28, 'Gelgaudiškis'),
            (29, 'Grigiškės'),
            (30, 'Ignalina'),
            (31, 'Jieznas'),
            (32, 'Jonava'),
            (33, 'Joniškėlis'),
            (34, 'Joniškis'),
            (35, 'Jurbarkas'),
            (36, 'Kaišiadorys'),
            (37, 'Kalvarija'),
            (38, 'Kauno m.'),
            (39, 'Kavarskas'),
            (40, 'Kazlų Rūda'),
            (41, 'Kėdainiai'),
            (42, 'Kelmė'),
            (43, 'Kybartai'),
            (44, 'Klaipėdos m.'),
            (45, 'Kretinga'),
            (46, 'Kudirkos Naumiestis'),
            (47, 'Kupiškis'),
            (48, 'Kuršėnai'),
            (49, 'Lazdijai'),
            (50, 'Lentvaris'),
            (51, 'Linkuva'),
            (52, 'Marijampolės m.'),
            (53, 'Mažeikiai'),
            (54, 'Molėtai'),
            (55, 'Naujoji Akmenė'),
            (56, 'Nemenčinė'),
            (57, 'Neringa'),
            (58, 'Nida'),
            (59, 'Obeliai'),
            (60, 'Pabradė'),
            (61, 'Pagėgiai'),
            (62, 'Pakruojis'),
            (63, 'Palanga'),
            (64, 'Pandėlys'),
            (65, 'Panemunė'),
            (66, 'Panevėžio m.'),
            (67, 'Pasvalys'),
            (68, 'Plungė'),
            (69, 'Priekulė'),
            (70, 'Prienai'),
            (71, 'Radviliškis'),
            (72, 'Ramygala'),
            (73, 'Raseiniai'),
            (74, 'Rietavas'),
            (75, 'Rokiškis'),
            (76, 'Rūdiškės'),
            (77, 'Salantai'),
            (78, 'Seda'),
            (79, 'Simnas'),
            (80, 'Skaudvilė'),
            (81, 'Skuodas'),
            (82, 'Smalininkai'),
            (83, 'Subačius'),
            (84, 'Šakiai'),
            (85, 'Šalčininkai'),
            (86, 'Šeduva'),
            (87, 'Šiaulių m.'),
            (88, 'Šilalė'),
            (89, 'Šilutė'),
            (90, 'Širvintos'),
            (91, 'Švenčionėliai'),
            (92, 'Švenčionys'),
            (93, 'Tauragės m.'),
            (94, 'Telšių m.'),
            (95, 'Tytuvėnai'),
            (96, 'Trakai'),
            (97, 'Troškūnai'),
            (98, 'Ukmergė'),
            (99, 'Utenos m.'),
            (100, 'Užventis'),
            (101, 'Vabalninkas'),
            (102, 'Varėna'),
            (103, 'Varniai'),
            (104, 'Veisiejai'),
            (105, 'Venta'),
            (106, 'Viekšniai'),
            (107, 'Vievis'),
            (108, 'Vilkaviškis'),
            (109, 'Vilkija'),
            (110, 'Vilniaus m.'),
            (111, 'Virbalis'),
            (112, 'Visaginas'),
            (113, 'Zarasai'),
            (114, 'Žagarė'),
            (115, 'Žiežmariai');");

        $this->addSql(
            "INSERT INTO `symfony`.`projects` 
            (`id`, `category_id`, `user_id`, `flag_create`,`city_id`,`youtube`,`long_description`, `title`,`description`, `image`, `duration`, `goal`, `reached`, `charity_fund`) VALUES 
            (1, 2, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Charlie Chan Carries On','Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'https://s3.eu-central-1.amazonaws.com/haroldas-depocare/photos/no-image.jpg', 118, 160, 132, 'Kuvalis, Bashirian and Streich'),
            (2, 4, 1,1,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Maecenas tincidunt lacus at velit.', 'Description','https://s3.eu-central-1.amazonaws.com/haroldas-depocare/photos/no-image.jpg', 163, 159, 46, 'Weimann, Wehner and Reichert'),
            (3, 4, 1,0,2,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','My Favorite Martian', 'Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'http://dummyimage.com/137x157.bmp/5fa2dd/ffffff', 130, 293, 42, 'Schroeder-Funk'),
            (4, 6, 1,0,3,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Metalstorm: The Destruction of Jared-Syn', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvgittis.', 'https://s3.eu-central-1.amazonaws.com/haroldas-depocare/photos/no-image.jpg', 89, 198, 137, 'Hauck, Abbott and Kling'),
            (5, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Cat Run', 'Nam congue, risus semper porta volutpat, quam pede lobortlectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'https://s3.eu-central-1.amazonaws.com/haroldas-depocare/photos/no-image.jpg', 82, 245, 42, 'Zieme and Sons'),
            (6, 2, 1,0,2,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Prophecy, The', 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'https://s3.eu-central-1.amazonaws.com/haroldas-depocare/photos/no-image.jpg', 198, 267, 1, 'Parisian-Collins'),
            (7, 3, 1,0,5,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Startup.com', 'Donec ut mauris eget massa tempor convallis. Nulla nequ justo sit amet sapien dignissim vestibulluctus et ultricl est.', 'https://s3.eu-central-1.amazonaws.com/haroldas-depocare/photos/no-image.jpg', 186, 264, 105, 'Bernier-Feil'),
            (8, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Dead End Drive-In', 'Maecenas leo odipharetra magna, ac consequat metus sapien ut nunc.', 'http://dummyimage.com/205x236.png/ff4444/ffffff', 196, 233, 23, 'Lang, Yost and Schneider'),
            (9, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Man with the Movie Camera, The (Chelovek s kino-apparatom)', 'Nam nulla.', 'http://dummyimage.com/139x198.png/5fa2dd/ffffff', 136, 200, 114, 'Homenick, Kub and Zieme'),
            (10, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Confessions of a Teenage Drama Queen', 'Cum socscetur ridiculus mus. Etiam vel augue.rum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', 'http://dummyimage.com/197x200.jpg/5fa2dd/ffffff', 201, 227, 137, 'Lang, Ondricka and Doyle'),
            (11, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Mystery Team', 'Aliquam non mauris.', 'http://dummyimage.com/237x249.png/5fa2dd/ffffff', 184, 241, 4, 'Schneider and Sons'),
            (12, 5, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','A Smoky Mountain Christmas', 'Donec posuere metus vitae ipsagna bibendum imperdiet. Nulam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'http://dummyimage.com/111x179.png/ff4444/ffffff', 151, 259, 144, 'O''Keefe, Lockman and Schultz'),
            (13, 5, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Watcher in the Woods, The', 'Morbi vestibulum, velit id pretiu placisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'http://dummyimage.com/101x167.png/dddddd/000000', 132, 159, 141, 'Moore-Collins'),
            (14, 1, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Tango & Cash', 'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.', 'http://dummyimage.com/114x168.jpg/5fa2dd/ffffff', 257, 186, 9, 'Considine-Pfeffer'),
            (15, 6, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Saturday Night Fever', 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 'http://dummyimage.com/208x179.bmp/cc0000/ffffff', 249, 272, 79, 'Turner LLC'),
            (16, 2, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Botany of Desire, The', 'Pellentesque ultrices mattis odio. Donec vitaeipit nulla elit ac nulla.', 'http://dummyimage.com/118x140.bmp/5fa2dd/ffffff', 285, 249, 13, 'Stamm, Zulauf and Moen'),
            (17, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','It Runs in the Family (My Summer Story)', 'Praesent id massa id nisl veperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 'http://dummyimage.com/116x248.png/dddddd/000000', 185, 263, 54, 'Monahan, Abbott and Kiehn'),
            (18, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','The Pokrovsky Gates', 'Aenean fermentum. Donec ut mauris eget massa temfaucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 'http://dummyimage.com/216x221.png/ff4444/ffffff', 278, 162, 138, 'Smith Group'),
            (19, 6, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Rain People, The', 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 'http://dummyimage.com/164x219.png/cc0000/ffffff', 160, 255, 136, 'Walker, Konopelski and Schaefer'),
            (20, 5, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Down in the Valley', 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.', 'http://dummyimage.com/237x179.bmp/ff4444/ffffff', 106, 184, 33, 'Kulas, Considine and Gottlieb'),
            (21, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Hider in the House', 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl, turpis enim blandit mi, in porttitor pede justo eu massa.', 'http://dummyimage.com/228x197.bmp/5fa2dd/ffffff', 90, 287, 51, 'Deckow Inc'),
            (22, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Billu', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'http://dummyimage.com/191x120.jpg/dddddd/000000', 97, 213, 133, 'Rau Inc'),
            (23, 2, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','What Alice Found', 'Fusce congue, diam id ornare imperdiet, sapien urna ed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.', 'http://dummyimage.com/158x129.jpg/cc0000/ffffff', 299, 246, 82, 'Ritchie-Botsford'),
            (24, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Take the Money and Run', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.', 'http://dummyimage.com/201x221.png/cc0000/ffffff', 229, 160, 49, 'Goodwin LLC'),
            (25, 1, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Born Free', 'Integer ac leo. Pellentesque ultrices mattis odio.', 'http://dummyimage.com/112x215.jpg/ff4444/ffffff', 252, 233, 135, 'Farrell-Rowe'),
            (26, 1, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Absolute Beginners', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'http://dummyimage.com/112x181.png/ff4444/ffffff', 256, 297, 107, 'Conn-Schultz'),
            (27, 1, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Critters 2: The Main Course', 'Integer tincidunt ante vel ipsum.', 'http://dummyimage.com/177x212.jpg/ff4444/ffffff', 76, 205, 10, 'Boyle and Sons'),
            (28, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Friday the 13th Part 2', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.', 'http://dummyimage.com/237x230.png/5fa2dd/ffffff', 111, 227, 90, 'Botsford, Grant and Bogisich'),
            (29, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','His Private Secretary', 'Nulla tellus. In sagittis dui vel nisl.', 'http://dummyimage.com/207x118.png/cc0000/ffffff', 105, 292, 3, 'Herman and Sons'),
            (30, 2, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Pink Cadillac', 'In eleifend quam a odio.', 'http://dummyimage.com/173x150.bmp/ff4444/ffffff', 173, 296, 107, 'Bosco-Ryan'),
            (31, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Hideous Sun Demon, The', 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.', 'http://dummyimage.com/169x141.png/5fa2dd/ffffff', 78, 165, 74, 'Flatley Group'),
            (32, 1, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Partners: The Movie II (Aibô: Gekijô-ban II)', 'Vivamus vel nulla eget eros elementum pellentesque.', 'http://dummyimage.com/170x239.bmp/ff4444/ffffff', 79, 278, 106, 'Marvin Group'),
            (33, 2, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Wheeler Dealers, The', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lrat. Vestibulum sed magna at nunc commodo placerat.', 'http://dummyimage.com/235x100.bmp/5fa2dd/ffffff', 124, 217, 122, 'Tillman-Goldner'),
            (34, 2, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Flight of the Conchords: A Texan Odyssey', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'http://dummyimage.com/250x180.png/5fa2dd/ffffff', 221, 225, 86, 'Yundt Inc'),
            (35, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Ship of Fools', 'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa vin, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.', 'http://dummyimage.com/219x127.jpg/cc0000/ffffff', 222, 201, 21, 'Wintheiser-Stamm'),
            (36, 1, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Man''s Favorite Sport?', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.', 'http://dummyimage.com/101x100.bmp/cc0000/ffffff', 249, 162, 46, 'Padberg, Franecki and Bernier'),
            (37, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Setup (Set Up)', 'Pellentesque ultrices mattis odio. Donec vitae nisi.', 'http://dummyimage.com/116x246.bmp/cc0000/ffffff', 237, 266, 115, 'Fritsch-Bradtke'),
            (38, 5, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Wrong Turn 4', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.', 'http://dummyimage.com/113x176.bmp/dddddd/000000', 170, 232, 23, 'Jakubowski, Huels and Wehner'),
            (39, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Battlestar Galactica: Blood & Chrome', 'In blandit ultrices enim. Lorem ipsum dolor sit amet, cligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.', 'http://dummyimage.com/182x186.jpg/5fa2dd/ffffff', 63, 208, 78, 'Baumbach-Sawayn'),
            (40, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','The Hobbit: The Battle of the Five Armies', 'Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.', 'http://dummyimage.com/104x223.jpg/dddddd/000000', 285, 184, 42, 'Douglas and Sons'),
            (41, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Death at a Funeral', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.', 'http://dummyimage.com/193x245.bmp/cc0000/ffffff', 245, 257, 71, 'Baumbach-Stark'),
            (42, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Honeymoon', 'Phasellus sit amet erat.', 'http://dummyimage.com/224x236.bmp/ff4444/ffffff', 52, 191, 49, 'Murray LLC'),
            (43, 5, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Barrier (Bariera)', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 'http://dummyimage.com/221x213.png/ff4444/ffffff', 293, 251, 94, 'Breitenberg, Johnson and Zboncak'),
            (44, 6, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Flame and Citron (Flammen & Citronen)', 'Duis consequat dui nec nisi volutpatMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 'http://dummyimage.com/233x176.jpg/5fa2dd/ffffff', 66, 220, 141, 'Schuppe-Daniel'),
            (45, 2, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Bloody Territories (Kôiki bôryoku: ryuuketsu no shima)', 'Donec cubilia Curaesapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.', 'http://dummyimage.com/187x168.jpg/cc0000/ffffff', 170, 215, 67, 'Hoppe, Renner and Simonis'),
            (46, 4, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Cthulhu', 'Ut at dolor quis odio consequat varius. Integer ac leo.', 'http://dummyimage.com/195x245.jpg/ff4444/ffffff', 95, 154, 58, 'Carter-Mitchell'),
            (47, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Celine and Julie Go Boating (Celine et Julie vont en bateau)', 'Mauris enim sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 'http://dummyimage.com/126x192.png/cc0000/ffffff', 282, 273, 58, 'Reynolds-Johns'),
            (48, 5, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Holy Wars', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.', 'http://dummyimage.com/234x127.png/ff4444/ffffff', 262, 154, 94, 'Sauer Inc'),
            (49, 6, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Camille Rewinds', 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.', 'http://dummyimage.com/247x247.png/ff4444/ffffff', 105, 192, 120, 'Gorczany-Balistreri'),
            (50, 3, 1,0,1,'https://www.youtube.com/watch?v=AptPGnVAXeM', '<p>This is super long <strong>description</strong></p>','Body Shots', 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.', 'http://dummyimage.com/196x142.png/5fa2dd/ffffff', 230, 254, 26, 'Zemlak, McGlynn and Cremin');");
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
