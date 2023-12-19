BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Descriptions" (
	"id"	INTEGER,
	"id_question"	INTEGER NOT NULL,
	"text"	VARCHAR(255),
	FOREIGN KEY("id_question") REFERENCES "Questions"("id") ON DELETE CASCADE ON UPDATE CASCADE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "Descriptions" ("id","id_question","text") VALUES (4,1,'Черногория стала 29-й страной НАТО в 2017 г.'),
 (5,2,'https://www.dcode.fr/caesar-cipher'),
 (6,3,'Одно или два...хм-м-м...'),
 (7,4,'Больше смахивает на функцию языка С'),
 (8,5,'пина'),
 (9,6,'VB не может не подойти.'),
 (10,7,'P - Prevention (Предотвращение)');
COMMIT;
