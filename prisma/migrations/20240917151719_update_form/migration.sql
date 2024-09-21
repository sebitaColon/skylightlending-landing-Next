/*
  Warnings:

  - The primary key for the `forms` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_namber` on the `forms` table. All the data in the column will be lost.
  - You are about to drop the column `id_forms` on the `forms` table. All the data in the column will be lost.
  - Added the required column `company_name` to the `forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "forms" DROP CONSTRAINT "forms_pkey",
DROP COLUMN "company_namber",
DROP COLUMN "id_forms",
ADD COLUMN     "company_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "number_contact" DROP DEFAULT,
ALTER COLUMN "number_contact" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "forms_pkey" PRIMARY KEY ("id");
