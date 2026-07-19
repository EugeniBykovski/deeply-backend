-- AlterTable: add trial + extended entitlement mirror fields to User
ALTER TABLE "User" ADD COLUMN "trialStartedAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "trialEndsAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "lastEntitlementPeriodType" TEXT;
ALTER TABLE "User" ADD COLUMN "proWillRenew" BOOLEAN;
ALTER TABLE "User" ADD COLUMN "proUnsubscribeDetectedAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN "proBillingIssueDetectedAt" TIMESTAMP(3);
