-- CreateEnum
CREATE TYPE "AchievementType" AS ENUM ('FIRST_TRAINING', 'FIRST_PRIVATE', 'STREAK_3', 'STREAK_7', 'STREAK_30', 'TOTAL_RUNS_25', 'TOTAL_RUNS_50', 'TOTAL_RUNS_100', 'COMPLETE_MAIN_12');

-- CreateTable
CREATE TABLE "UserAchievement" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "AchievementType" NOT NULL,
    "scopeKey" TEXT NOT NULL DEFAULT 'GLOBAL',
    "unlockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payload" JSONB,

    CONSTRAINT "UserAchievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingProgressCache" (
    "userId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "TrainingProgressCache_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE INDEX "UserAchievement_userId_unlockedAt_idx" ON "UserAchievement"("userId", "unlockedAt");

-- CreateIndex
CREATE UNIQUE INDEX "UserAchievement_userId_type_scopeKey_key" ON "UserAchievement"("userId", "type", "scopeKey");

-- AddForeignKey
ALTER TABLE "UserAchievement" ADD CONSTRAINT "UserAchievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingProgressCache" ADD CONSTRAINT "TrainingProgressCache_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
