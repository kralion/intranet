import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("El email no es válido"),
  password: z.string().min(4, "El password contiene 8 caracteres como mínimo"),
});
