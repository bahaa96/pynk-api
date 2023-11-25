CREATE TABLE `admin` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `admin_key` (
	`id` text PRIMARY KEY NOT NULL,
	`admin_id` text NOT NULL,
	`hashed_password` text,
	FOREIGN KEY (`admin_id`) REFERENCES `admin`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `admin_session` (
	`id` text PRIMARY KEY NOT NULL,
	`admin_id` text NOT NULL,
	`active_expires` blob NOT NULL,
	`idle_expires` blob NOT NULL,
	FOREIGN KEY (`admin_id`) REFERENCES `admin`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `deal` (
	`id` text,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`store_id` text NOT NULL,
	`code` text NOT NULL,
	`expiry_date` blob,
	`countries` text,
	`likes_count` integer DEFAULT 0,
	FOREIGN KEY (`store_id`) REFERENCES `store`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `profile` (
	`id` text,
	`slug` text NOT NULL,
	`liked_deals` text
);
--> statement-breakpoint
CREATE TABLE `store` (
	`id` text,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`code` text NOT NULL,
	`description` text,
	`profile_picture` text,
	`logo` text,
	`redirect_url` text NOT NULL,
	`total_offers` integer DEFAULT 0,
	`palette` text
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`username` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_key` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`hashed_password` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user_session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`active_expires` blob NOT NULL,
	`idle_expires` blob NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `admin_username_unique` ON `admin` (`username`);--> statement-breakpoint
CREATE UNIQUE INDEX `deal_slug_unique` ON `deal` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `profile_slug_unique` ON `profile` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `store_slug_unique` ON `store` (`slug`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_username_unique` ON `user` (`username`);