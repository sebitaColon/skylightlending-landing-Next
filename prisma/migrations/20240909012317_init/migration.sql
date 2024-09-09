-- CreateTable
CREATE TABLE "Users" (
    "id_users" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL DEFAULT 255,
    "lastname" VARCHAR NOT NULL DEFAULT 255,
    "email" VARCHAR NOT NULL DEFAULT 255,
    "password" VARCHAR NOT NULL DEFAULT 255,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id_users")
);

-- CreateTable
CREATE TABLE "forms" (
    "id_forms" INTEGER NOT NULL,
    "name" VARCHAR NOT NULL DEFAULT 255,
    "lastname" VARCHAR NOT NULL DEFAULT 255,
    "numbercontact" INTEGER NOT NULL DEFAULT 255,
    "companynamber" VARCHAR NOT NULL DEFAULT 255,
    "email" VARCHAR NOT NULL DEFAULT 255,
    "companywebsite" VARCHAR NOT NULL DEFAULT 255,
    "references" VARCHAR NOT NULL DEFAULT 255,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("id_forms")
);
