insert into "Group" (id,title,color,"updatedAt" ) values (1,'Női','red',now());
insert into "Group" (id,title,color,"updatedAt" ) values (2,'Férfi','blue',now());

insert into "Category" (id,title,"groupId","updatedAt") values (3,'Hats',1,now());
select * from "Category" c ;
INSERT INTO "Product" (id,name,"imageUrl",price,"categoryId","updatedAt") VALUES
 (1,'Brown Brim','https://i.ibb.co/ZYW3VTp/brown-brim.png',25,3,now())
,(2,'Blue Beanie','https://i.ibb.co/ypkgK0X/blue-beanie.png',18,3,now())
,(3,'Brown Cowboy','https://i.ibb.co/QdJwgmp/brown-cowboy.png',35,3,now())
,(4,'Grey Brim','https://i.ibb.co/RjBLWxB/grey-brim.png',25,3,now())
,(5,'Green Beanie','https://i.ibb.co/YTjW3vF/green-beanie.png',18,3,now())
,(6,'Palm Tree Cap','https://i.ibb.co/rKBDvJX/palm-tree-cap.png',14,3,now())
,(7,'Red Beanie','https://i.ibb.co/bLB646Z/red-beanie.png',18,3,now())
,(8,'Wolf Cap','https://i.ibb.co/1f2nWMM/wolf-cap.png',14,3,now())
,(9,'Blue Snapback','https://i.ibb.co/X2VJP2W/blue-snapback.png',16,3,now());

select * from "Product" p ;

insert into "Category" (id,title,"groupId","updatedAt") values (4,'Sneakers',1,now());
select * from "Category" c ;
INSERT INTO "Product"(id,name,"imageUrl",price,"categoryId","updatedAt") VALUES
 (10,'Adidas NMD','https://i.ibb.co/0s3pdnc/adidas-nmd.png',220,4,now())
,(11,'Adidas Yeezy','https://i.ibb.co/dJbG1cT/yeezy.png',280,4,now())
,(12,'Black Converse','https://i.ibb.co/bPmVXyP/black-converse.png',110,4,now())
,(13,'Nike White AirForce','https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',160,4,now())
,(14,'Nike Red High Tops','https://i.ibb.co/QcvzydB/nikes-red.png',160,4,now())
,(15,'Nike Brown High Tops','https://i.ibb.co/fMTV342/nike-brown.png',160,4,now())
,(16,'Air Jordan Limited','https://i.ibb.co/w4k6Ws9/nike-funky.png',190,4,now())
,(17,'Timberlands','https://i.ibb.co/Mhh6wBg/timberlands.png',200,4,now());

insert into "Category" (id,title,"groupId","updatedAt") values (5,'Jackets',1,now());
select * from "Category" c ;
INSERT INTO "Product"(id,name,"imageUrl",price,"categoryId","updatedAt") VALUES
 (18,'Black Jean Shearling','https://i.ibb.co/XzcwL5s/black-shearling.png',125,5,now())
,(19,'Blue Jean Jacket','https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',90,5,now())
,(20,'Grey Jean Jacket','https://i.ibb.co/N71k1ML/grey-jean-jacket.png',90,5,now())
,(21,'Brown Shearling','https://i.ibb.co/s96FpdP/brown-shearling.png',165,5,now())
,(22,'Tan Trench','https://i.ibb.co/M6hHc3F/brown-trench.png',185,5,now());


insert into "Category" (id,title,"groupId","updatedAt") values (6,'Womens',1,now());
select * from "Category" c ;


INSERT INTO "Product"(id,name,"imageUrl",price,"categoryId","updatedAt") VALUES
 (23,'Blue Tanktop','https://i.ibb.co/7CQVJNm/blue-tank.png',25,6,now())
,(24,'Floral Blouse','https://i.ibb.co/4W2DGKm/floral-blouse.png',20,6,now())
,(25,'Floral Dress','https://i.ibb.co/KV18Ysr/floral-skirt.png',80,6,now())
,(26,'Red Dots Dress','https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',80,6,now())
,(27,'Striped Sweater','https://i.ibb.co/KmSkMbH/striped-sweater.png',45,6,now())
,(28,'Yellow Track Suit','https://i.ibb.co/v1cvwNf/yellow-track-suit.png',135,6,now())
,(29,'White Blouse','https://i.ibb.co/qBcrsJg/white-vest.png',20,6,now());

insert into "Category" (id,title,"groupId","updatedAt") values (7,'Mens',2,now());
select * from "Category" c ;
INSERT INTO "Product"(id,name,"imageUrl",price,"categoryId","updatedAt") VALUES
 (30,'Camo Down Vest','https://i.ibb.co/xJS0T3Y/camo-vest.png',325,7,now())
,(31,'Floral T-shirt','https://i.ibb.co/qMQ75QZ/floral-shirt.png',20,7,now())
,(32,'Black & White Longsleeve','https://i.ibb.co/55z32tw/long-sleeve.png',25,7,now())
,(33,'Pink T-shirt','https://i.ibb.co/RvwnBL8/pink-shirt.png',25,7,now())
,(34,'Jean Long Sleeve','https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',40,7,now())
,(35,'Burgundy T-shirt','https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',25,7,now());

ALTER TABLE "Category" ADD COLUMN  "groupId" INTEGER NOT null default(1);

CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);



ALTER TABLE "Category" ADD CONSTRAINT "Category_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

