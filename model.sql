/**************************
AUTO_CSOP tábla létrehozása
**************************/
drop table if exists  AUTO_CSOP;
--
create table AUTO_CSOP(
auto_csop_nev varchar(6) not null,
km_dij int4,
napi_dij int8
);
/**************************
AUTO_CSOP tábla feltöltése
**************************/
insert into AUTO_CSOP values ('NORMAL','80','5000');
insert into AUTO_CSOP values ('EXTRA','120','7500');
insert into AUTO_CSOP values ('LUXUS','300','15000');
/*************************/
/*************************/

/**************************
TIPUSOK tábla létrehozása
**************************/
drop table if exists  TIPUSOK;
--
create table TIPUSOK(
tipus_nev varchar(15) not null,
auto_csop_nev varchar(6),
leiras varchar(30),
szerviz_km int8
);
/**************************
TIPUSOK tábla feltöltése
**************************/
insert into TIPUSOK values ('FORD ESCORT','EXTRA','CL 1.8 DSL 5-A','15000');
insert into TIPUSOK values ('RENAULT 19','EXTRA','RL 1.4 L KAT 3-A','5000');
insert into TIPUSOK values ('RENAULT NEVADA','EXTRA','RTD 2.1 L KAT 5-','75000');
insert into TIPUSOK values ('RENAULT LAGUNA','EXTRA','RT 2.0 L KAT 5-A','15000');
insert into TIPUSOK values ('SKODA LX','NORMAL','FAVORIT 1.3 L KAT','5000');
insert into TIPUSOK values ('SKODA CL','NORMAL','FAVORIT 1.3 L KAT COMFORT LINE','5000');
insert into TIPUSOK values ('OPEL ASTRA','EXTRA','CL 1.6 I 5-A','10000');
insert into TIPUSOK values ('OPEL VECTRA','LUXUS','TURBO 2.0 I 4-A','10000');
insert into TIPUSOK values ('W VENTO CL','EXTRA','TD 1.9 L KAT','15000');
insert into TIPUSOK values ('OPEL CORSA','NORMAL','CITY 1.2 I 3-A','10000');
insert into TIPUSOK values ('RENAULT TWINGO','NORMAL','1.2 L KAT 3-A','75000');
insert into TIPUSOK values ('RENAULT ESPACE','LUXUS','RN DT 2.1 L KAT','15000');
/*************************/
/*************************/

/**************************
AUTOK tábla létrehozása
**************************/
drop table if exists  AUTOK;
--
create table AUTOK(
rendszam varchar(7) not null,
tipus_nev varchar(15),
auto_csop_nev varchar(6),
vasarlas_datuma date,
ar float8,
futott_km int8,
ut_szerviz int8,
allapot varchar(1),
reszleg_kod int4,
alk_kod int8
);
/**************************
AUTOK tábla feltöltése
**************************/
insert into AUTOK values ('ABR-047','FORD ESCORT','EXTRA','19930102','1300000','151003','141410','F',30,1236);
insert into AUTOK values ('ABR-115','RENAULT 19','EXTRA','19930102','1200000','145097','139600','X',20,1234);
insert into AUTOK values ('CDE-324','RENAULT NEVADA','EXTRA','19930601','2473000','42040','15901','F',20,1234);
insert into AUTOK values ('DHV-123','RENAULT LAGUNA','EXTRA','19930605','2346000','73621','53600','A',20,1245);
insert into AUTOK values ('PHD-100','RENAULT 19','EXTRA','19930630','1329000','151441','140507','X',20,1249);
insert into AUTOK values ('PHD-610','RENAULT NEVADA','EXTRA','19930720','2473000','39066','30009','F',20,1249);
insert into AUTOK values ('ABC-021','SKODA LX','NORMAL','19931001','827000','123212','120509','F',30,1236);
insert into AUTOK values ('ABC-022','SKODA CL','NORMAL','19931001','917000','97081','95310','S',30,1236);
insert into AUTOK values ('ABC-123','OPEL ASTRA','EXTRA','19931111','1239000','101978','93710','A',30,1236);
insert into AUTOK values ('BAH-115','OPEL VECTRA','LUXUS','19931011','3977000','51007','49620','A',50,1246);
insert into AUTOK values ('CIC-312','W VENTO CL','EXTRA','19931201','1650000','100021','83701','F',60,1241);
insert into AUTOK values ('COD-705','W VENTO CL','EXTRA','19931201','1650000','91970','79600','S',60,1241);
insert into AUTOK values ('CBN-301','OPEL CORSA','NORMAL','19931201','917000','28001','25444','A',60,1241);
insert into AUTOK values ('CBN-302','OPEL ASTRA','EXTRA','19931201','1239000','87111','80001','S',60,1241);
insert into AUTOK values ('CDD-115','FORD ESCORT','EXTRA','19940102','1400000','15901','15501','A',30,1236);
insert into AUTOK values ('DCD-324','RENAULT LAGUNA','EXTRA','19940102','2346000','41061','28861','A',20,1245);
insert into AUTOK values ('PDP-101','RENAULT ESPACE','LUXUS','19940102','3530000','7911',NULL,'S',20,1249);
insert into AUTOK values ('CBN-001','W VENTO CL','EXTRA','19940102','1999000','152311','150600','F',60,1241);
insert into AUTOK values ('CDD-115','RENAULT TWINGO','NORMAL','19940103','955000','8307',NULL,'S',20,1234);
/*************************/
/*************************/

/**************************
RENDELES tábla létrehozása
**************************/
drop table if exists RENDELES;
--
create table RENDELES
(
rendeles_szam varchar(5) not null,
ugyfel_szam varchar(3),
rendeles_datum date,
rendelo_szemely varchar(12),
kolcson_kezdete date,
napok int8,
rendszam varchar(7),
tipus_nev varchar(15),
km_kezdet int8,
km_veg int8,
kolcson_dij int8,
fizetes varchar(1)
);
/**************************
RENDELES tábla feltöltése
**************************/
insert into RENDELES values ('12334','348','19931201','NAGY TIBORNE','19940401','5','ABC-123','OPEL ASTRA','95308','101978','558600','Y');
insert into RENDELES values ('12335','342','19940202','HOTEL CIVIS','19940305','2','ABR-115','RENAULT 19','144102','145097','134400','Y');
insert into RENDELES values ('12336','342','19940202','HOTEL CIVIS','19940202','21','PHD-100','RENAULT 19','150871','151441','225900','Y');
insert into RENDELES values ('12337','344','19940330','HILTON','19940405','30','ABR-047','FORD ESCORT','141413','151003','1375800','N');
insert into RENDELES values ('12338','343','19940330','MATAV IG.','19940405','5','ABC-123','OPEL ASTRA','101978','104965','395940','N');
insert into RENDELES values ('12339','348','19940402','APEH IG.','19940410','1','BAH-115','OPEL VECTRA','50609','51007','55260','N');
insert into RENDELES values ('12340','345','19940203','HOTEL CIVIS','19940501','5','ABR-047','FORD ESCORT','151003',NULL,NULL,'Y');
insert into RENDELES values ('12341','349','19940404','IBUSZ IG.','19940501','10','ABC-123','W VENTO CL','152311',NULL,NULL,'Y');
insert into RENDELES values ('12342','344','19940404','HILTON','19940502','5','PHD-610','RENAULT NEVADA','39066',NULL,NULL,'Y');
insert into RENDELES values ('12343','348','19940504','NAGY TIBORNE','19940410','7','CDE-324','RENAULT NEVADA','42040',NULL,NULL,'N');
insert into RENDELES values ('12344','343','19940420','KOOS TIBOR','19940503','10','ABC-123','SKODA LX','123212',NULL,NULL,'N');
insert into RENDELES values ('12345','342','19940421','HILTON','19940503','3','CIC-312','W VENTO CL','100021',NULL,NULL,'Y');
/*************************/
/*************************/

/**************************
UGYFELEK tábla létrehozása
**************************/
drop table if exists UGYFELEK;
--
create table UGYFELEK(
ugyfel_szam varchar(3) not null,
ugyfel_nev varchar(20),
cim varchar(15),
varos varchar(10),
orszag varchar(10),
iranyito_szam varchar(6),
megbizott varchar(15),
fizetesi_mod varchar(1)
);
/**************************
UGYFELEK tábla feltöltése
**************************/
insert into UGYFELEK values ('342','MOLNÁR PETER','HILTON PRK. 1.','NEW YORK','USA','49928','HILTON','K');
insert into UGYFELEK values ('343','PAPP ROBERT','PIAC U. 10.','DEBRECEN','MAGYAR','4027','PINTER ATTILA','K');
insert into UGYFELEK values ('344','ABEL ANETT','WIESZ STR 5','BECS','AUSZTRIA','20800','HILTON','K');
insert into UGYFELEK values ('345','TIBOR SMITH','LIGNOUN 15.','PARIZS','FRANCIA','140010','HOTEL CIVIS','A');
insert into UGYFELEK values ('346','PAPP AGNES','VEZER U. 19.','DEBRECEN','MAGYAR','4032',NULL,'A');
insert into UGYFELEK values ('347','BIRO KATALIN','TESSEDIK U. 6.','DEBRECEN','MAGYAR','4032',NULL,'A');
insert into UGYFELEK values ('348','KISS VIKTÓRIA','FO U. 8.','BUDAPEST','MAGYAR','1221','NAGY TIBORNE','K');
insert into UGYFELEK values ('349','LIGETI ZOLTAN','KIRALY U. 88.','BUDAPEST','MAGYAR','1239',NULL,'A');
insert into UGYFELEK values ('350','TOTH KAROLYNE','DOMB U. 6.','BUDAPEST','MAGYAR','1260',NULL,'A');
/*************************/
/*************************/

/**************************
RESZLEG tábla létrehozása
**************************/
drop table if exists RESZLEG;
--
create table RESZLEG(
reszleg_kod int8 not null,
reszleg_nev varchar(20),
reszleg_cim varchar(15)
);
/**************************
RESZLEG tábla feltöltése
**************************/
insert into RESZLEG values ('10','KOZPONT','BUDAPEST');
insert into RESZLEG values ('20','AUTO-RENAULT','BUDAPEST');
insert into RESZLEG values ('30','AUTO','GYOR');
insert into RESZLEG values ('50','LUXUS-AUTO','BUDAPEST');
insert into RESZLEG values ('60','AUTO','DEBRECEN');
insert into RESZLEG values ('70','TEHERAUTO','BUDAPEST');
/*************************/
/*************************/

/**************************
ALKALMAZOTT tábla létrehozása
**************************/
drop table if exists ALKALMAZOTT;
--
create table ALKALMAZOTT(
alk_kod int8 not null,
alk_nev varchar(20),
beosztas varchar(16),
belepes date,
fizetes int8,
premium int8,
reszleg_kod int8 not null
);
/**************************
ALKALMAZOTT tábla feltöltése
**************************/
insert into ALKALMAZOTT values ('1234','KOVACS','ELADO','19921210',13000,4000,'20');
insert into ALKALMAZOTT values ('1235','MOLNAR','SZERELO','19921218',18000, NULL,'30');
insert into ALKALMAZOTT values ('1236','CSIKOS','ELADO','19930312',13250,5000,'30');
insert into ALKALMAZOTT values ('1237','TOTH','VIZSGABIZTOS','19930422',20000, NULL,'20');
insert into ALKALMAZOTT values ('1238','NEMETH','TELEPHELYVEZETO','19931128',29000,14000,'30');
insert into ALKALMAZOTT values ('1239','SZABO','IGAZGATO','19920501',54000,75000,'10');
insert into ALKALMAZOTT values ('1240','BALOGH','SZERELO','19920602',22000,5000,'50');
insert into ALKALMAZOTT values ('1241','TRENCSENI','ELADO','19930620',12100,7200,'60');
insert into ALKALMAZOTT values ('1244','KIRALY','VIZSGABIZTOS','19930804',21000,8000,'20');
insert into ALKALMAZOTT values ('1245','HERCEG','ELADO','19931112',11000,6000,'20');
insert into ALKALMAZOTT values ('1246','BOGNAR','ELADO','19921008',13000,6000,'50');
insert into ALKALMAZOTT values ('1247','HALASZ','SZERELO','19930523',21000,7000,'60');
insert into ALKALMAZOTT values ('1248','HORVAT','TELEPHELYVEZETO','19931209',25000,12000,'60');
insert into ALKALMAZOTT values ('1249','KISS','ELADO','19931223',12500, 9500,'20');
/*************************/
/*************************/

commit;