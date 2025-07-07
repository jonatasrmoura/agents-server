import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333), // coerce.number = converter para numero
});

export const env = envSchema.parse(process.env);
