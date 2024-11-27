-- CreateTable
CREATE TABLE "Cars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "mark" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "version" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "traction" TEXT NOT NULL,
    "fuel" TEXT NOT NULL,
    "doors" TEXT NOT NULL,
    "absBrake" BOOLEAN NOT NULL,
    "city" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);
