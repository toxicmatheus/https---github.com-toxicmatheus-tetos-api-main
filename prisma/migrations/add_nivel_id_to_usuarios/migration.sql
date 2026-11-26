-- Add nivel_id column to usuarios table
ALTER TABLE "usuarios" ADD COLUMN "nivel_id" uuid;

-- Add foreign key constraint
ALTER TABLE "usuarios" 
  ADD CONSTRAINT "usuarios_niveis_fk" 
  FOREIGN KEY ("nivel_id") 
  REFERENCES "niveis"("id") 
  ON DELETE NO ACTION 
  ON UPDATE NO ACTION;