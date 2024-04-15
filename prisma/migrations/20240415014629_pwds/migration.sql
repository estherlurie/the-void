-- CreateTable
CREATE TABLE "passwords" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "passwords_pkey" PRIMARY KEY ("id")
);
