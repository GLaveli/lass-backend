/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Column` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Line` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Column_name_key" ON "Column"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Line_name_key" ON "Line"("name");
