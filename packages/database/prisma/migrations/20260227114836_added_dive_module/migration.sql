-- CreateEnum
CREATE TYPE "DiveDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateTable
CREATE TABLE "DiveTemplate" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "difficulty" "DiveDifficulty" NOT NULL DEFAULT 'EASY',
    "maxDepthMeters" INTEGER NOT NULL,
    "targetHoldSeconds" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiveTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiveTemplateTranslation" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "lang" "Language" NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT,

    CONSTRAINT "DiveTemplateTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiveProfilePoint" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "timeSeconds" INTEGER NOT NULL,
    "depthMeters" INTEGER NOT NULL,

    CONSTRAINT "DiveProfilePoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiveRun" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),
    "holdSeconds" INTEGER,
    "maxDepthMeters" INTEGER,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "metrics" JSONB,

    CONSTRAINT "DiveRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiveTemplate_slug_key" ON "DiveTemplate"("slug");

-- CreateIndex
CREATE INDEX "DiveTemplate_sortOrder_isPublished_idx" ON "DiveTemplate"("sortOrder", "isPublished");

-- CreateIndex
CREATE INDEX "DiveTemplate_isPremium_difficulty_idx" ON "DiveTemplate"("isPremium", "difficulty");

-- CreateIndex
CREATE INDEX "DiveTemplateTranslation_lang_idx" ON "DiveTemplateTranslation"("lang");

-- CreateIndex
CREATE UNIQUE INDEX "DiveTemplateTranslation_templateId_lang_key" ON "DiveTemplateTranslation"("templateId", "lang");

-- CreateIndex
CREATE INDEX "DiveProfilePoint_templateId_sortOrder_idx" ON "DiveProfilePoint"("templateId", "sortOrder");

-- CreateIndex
CREATE INDEX "DiveRun_userId_startedAt_idx" ON "DiveRun"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "DiveRun_templateId_idx" ON "DiveRun"("templateId");

-- AddForeignKey
ALTER TABLE "DiveTemplateTranslation" ADD CONSTRAINT "DiveTemplateTranslation_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DiveTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiveProfilePoint" ADD CONSTRAINT "DiveProfilePoint_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DiveTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiveRun" ADD CONSTRAINT "DiveRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiveRun" ADD CONSTRAINT "DiveRun_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DiveTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
