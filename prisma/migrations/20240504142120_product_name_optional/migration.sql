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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ProductType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Product_varietyId_fkey" FOREIGN KEY ("varietyId") REFERENCES "ProductVariety" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "createdAt", "endMonth", "endPeriod", "id", "name", "startMonth", "startPeriod", "typeId", "updatedAt", "varietyId") SELECT "categoryId", "createdAt", "endMonth", "endPeriod", "id", "name", "startMonth", "startPeriod", "typeId", "updatedAt", "varietyId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE INDEX "Product_categoryId_idx" ON "Product"("categoryId");
CREATE TABLE "new_ProductSizePrice" (
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sizeId" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProductSizePrice_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductSizePrice" ("createdAt", "price", "productId", "quantity", "sizeId", "updatedAt") SELECT "createdAt", "price", "productId", "quantity", "sizeId", "updatedAt" FROM "ProductSizePrice";
DROP TABLE "ProductSizePrice";
ALTER TABLE "new_ProductSizePrice" RENAME TO "ProductSizePrice";
CREATE UNIQUE INDEX "ProductSizePrice_productId_sizeId_key" ON "ProductSizePrice"("productId", "sizeId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
