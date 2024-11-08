ALTER TABLE "todo" ALTER COLUMN "id" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "clerkId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "photo" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "firstName" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "lastName" text NOT NULL;