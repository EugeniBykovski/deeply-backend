-- CreateEnum
CREATE TYPE "TrainingProgramKey" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'PRO', 'SQUARE', 'CALMING');

-- CreateEnum
CREATE TYPE "TrainingKind" AS ENUM ('PRESET', 'PRIVATE');

-- CreateEnum
CREATE TYPE "BreathPhase" AS ENUM ('INHALE', 'HOLD', 'EXHALE', 'REST');

-- CreateTable
CREATE TABLE "TrainingProgram" (
    "id" TEXT NOT NULL,
    "key" "TrainingProgramKey" NOT NULL,
    "slug" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingProgramTranslation" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "lang" "Language" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TrainingProgramTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingTemplate" (
    "id" TEXT NOT NULL,
    "kind" "TrainingKind" NOT NULL DEFAULT 'PRESET',
    "slug" TEXT,
    "programId" TEXT,
    "ownerId" TEXT,
    "name" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT true,
    "isPremium" BOOLEAN NOT NULL DEFAULT false,
    "pointCount" INTEGER,
    "repeats" INTEGER,
    "saveResults" BOOLEAN NOT NULL DEFAULT true,
    "saveCO2" BOOLEAN NOT NULL DEFAULT false,
    "onlyClock" BOOLEAN NOT NULL DEFAULT false,
    "estimatedMinutes" INTEGER,
    "intensityLevel" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingTemplateTranslation" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "lang" "Language" NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "description" TEXT,

    CONSTRAINT "TrainingTemplateTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingStep" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "phase" "BreathPhase" NOT NULL,
    "durationSeconds" INTEGER NOT NULL,

    CONSTRAINT "TrainingStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingRun" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),
    "totalSeconds" INTEGER,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "metrics" JSONB,

    CONSTRAINT "TrainingRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrainingProgram_key_key" ON "TrainingProgram"("key");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingProgram_slug_key" ON "TrainingProgram"("slug");

-- CreateIndex
CREATE INDEX "TrainingProgram_sortOrder_isPublished_idx" ON "TrainingProgram"("sortOrder", "isPublished");

-- CreateIndex
CREATE INDEX "TrainingProgramTranslation_lang_idx" ON "TrainingProgramTranslation"("lang");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingProgramTranslation_programId_lang_key" ON "TrainingProgramTranslation"("programId", "lang");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingTemplate_slug_key" ON "TrainingTemplate"("slug");

-- CreateIndex
CREATE INDEX "TrainingTemplate_programId_sortOrder_idx" ON "TrainingTemplate"("programId", "sortOrder");

-- CreateIndex
CREATE INDEX "TrainingTemplate_ownerId_kind_idx" ON "TrainingTemplate"("ownerId", "kind");

-- CreateIndex
CREATE INDEX "TrainingTemplateTranslation_lang_idx" ON "TrainingTemplateTranslation"("lang");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingTemplateTranslation_templateId_lang_key" ON "TrainingTemplateTranslation"("templateId", "lang");

-- CreateIndex
CREATE INDEX "TrainingStep_templateId_sortOrder_idx" ON "TrainingStep"("templateId", "sortOrder");

-- CreateIndex
CREATE INDEX "TrainingRun_userId_startedAt_idx" ON "TrainingRun"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "TrainingRun_templateId_idx" ON "TrainingRun"("templateId");

-- AddForeignKey
ALTER TABLE "TrainingProgramTranslation" ADD CONSTRAINT "TrainingProgramTranslation_programId_fkey" FOREIGN KEY ("programId") REFERENCES "TrainingProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingTemplate" ADD CONSTRAINT "TrainingTemplate_programId_fkey" FOREIGN KEY ("programId") REFERENCES "TrainingProgram"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingTemplate" ADD CONSTRAINT "TrainingTemplate_ownerId_owner_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingTemplate" ADD CONSTRAINT "TrainingTemplate_ownerId_createdBy_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingTemplateTranslation" ADD CONSTRAINT "TrainingTemplateTranslation_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "TrainingTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingStep" ADD CONSTRAINT "TrainingStep_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "TrainingTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingRun" ADD CONSTRAINT "TrainingRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingRun" ADD CONSTRAINT "TrainingRun_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "TrainingTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
