-- CreateTable
CREATE TABLE `Item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemName` VARCHAR(30) NOT NULL,
    `receiverCEP` VARCHAR(30) NOT NULL,
    `receiverName` VARCHAR(50) NOT NULL,
    `senderCEP` VARCHAR(30) NOT NULL,
    `senderName` VARCHAR(50) NOT NULL,
    `isDeliveried` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
