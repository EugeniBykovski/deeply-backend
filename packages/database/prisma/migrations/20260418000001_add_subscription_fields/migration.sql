-- AlterTable: add RevenueCat subscription fields to User
ALTER TABLE "User" ADD COLUMN "rcCustomerId" TEXT;
ALTER TABLE "User" ADD COLUMN "isPro" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "User" ADD COLUMN "proExpiresAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "proActivatedAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "User_rcCustomerId_key" ON "User"("rcCustomerId");
