/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_users` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Users` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to alter the column `email` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to alter the column `password` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to drop the column `companynamber` on the `forms` table. All the data in the column will be lost.
  - You are about to drop the column `companywebsite` on the `forms` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `forms` table. All the data in the column will be lost.
  - You are about to drop the column `numbercontact` on the `forms` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `forms` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to alter the column `email` on the `forms` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - You are about to alter the column `references` on the `forms` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(255)`.
  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `last_name` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_namber` to the `forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_website` to the `forms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "id_users",
DROP COLUMN "lastname",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "last_name" VARCHAR(255) NOT NULL,
ALTER COLUMN "name" DROP DEFAULT,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" DROP DEFAULT,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" DROP DEFAULT,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "forms" DROP COLUMN "companynamber",
DROP COLUMN "companywebsite",
DROP COLUMN "lastname",
DROP COLUMN "numbercontact",
ADD COLUMN     "company_namber" VARCHAR(255) NOT NULL,
ADD COLUMN     "company_website" VARCHAR(255) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "number_contact" INTEGER NOT NULL DEFAULT 255,
ALTER COLUMN "name" DROP DEFAULT,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "email" DROP DEFAULT,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "references" DROP DEFAULT,
ALTER COLUMN "references" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
