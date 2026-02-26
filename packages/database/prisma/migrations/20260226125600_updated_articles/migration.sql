/*
  Warnings:

  - You are about to drop the column `excerpt` on the `CultureArticleTranslation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CultureArticleTranslation" DROP COLUMN "excerpt",
ADD COLUMN     "description" TEXT;
