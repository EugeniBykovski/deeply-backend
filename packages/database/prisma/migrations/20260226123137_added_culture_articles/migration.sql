-- CreateEnum
CREATE TYPE "Language" AS ENUM ('en', 'ru');

-- CreateEnum
CREATE TYPE "CultureSection" AS ENUM ('STORIES', 'ATHLETES', 'COMPETITIONS', 'TRAINING', 'RELAX', 'SAFETY');

-- CreateTable
CREATE TABLE "CultureArticle" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "section" "CultureSection" NOT NULL,
    "coverImageUrl" TEXT,
    "readTimeMinutes" INTEGER,
    "publishedAt" TIMESTAMP(3),
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CultureArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CultureArticleTranslation" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "lang" "Language" NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "excerpt" TEXT,
    "contentMarkdown" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CultureArticleTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CultureTag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CultureTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CultureTagOnArticle" (
    "articleId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "CultureTagOnArticle_pkey" PRIMARY KEY ("articleId","tagId")
);

-- CreateIndex
CREATE UNIQUE INDEX "CultureArticle_slug_key" ON "CultureArticle"("slug");

-- CreateIndex
CREATE INDEX "CultureArticle_section_isPublished_publishedAt_idx" ON "CultureArticle"("section", "isPublished", "publishedAt");

-- CreateIndex
CREATE INDEX "CultureArticleTranslation_lang_idx" ON "CultureArticleTranslation"("lang");

-- CreateIndex
CREATE UNIQUE INDEX "CultureArticleTranslation_articleId_lang_key" ON "CultureArticleTranslation"("articleId", "lang");

-- CreateIndex
CREATE UNIQUE INDEX "CultureTag_name_key" ON "CultureTag"("name");

-- CreateIndex
CREATE INDEX "CultureTagOnArticle_tagId_idx" ON "CultureTagOnArticle"("tagId");

-- AddForeignKey
ALTER TABLE "CultureArticleTranslation" ADD CONSTRAINT "CultureArticleTranslation_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "CultureArticle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CultureTagOnArticle" ADD CONSTRAINT "CultureTagOnArticle_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "CultureArticle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CultureTagOnArticle" ADD CONSTRAINT "CultureTagOnArticle_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "CultureTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
