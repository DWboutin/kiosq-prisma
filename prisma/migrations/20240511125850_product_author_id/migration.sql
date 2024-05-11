/*
  Warnings:

  - Added the required column `authorId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "categoryId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,
    "varietyId" INTEGER NOT NULL,
    "startPeriod" TEXT NOT NULL,
    "startMonth" INTEGER NOT NULL,
    "endPeriod" TEXT NOT NULL,
    "endMonth" INTEGER NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ProductType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_varietyId_fkey" FOREIGN KEY ("varietyId") REFERENCES "ProductVariety" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "createdAt", "endMonth", "endPeriod", "id", "name", "startMonth", "startPeriod", "typeId", "updatedAt", "varietyId") SELECT "categoryId", "createdAt", "endMonth", "endPeriod", "id", "name", "startMonth", "startPeriod", "typeId", "updatedAt", "varietyId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
