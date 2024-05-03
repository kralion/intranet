import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("El email no es válido"),
  password: z.string().min(4, "El password contiene 8 caracteres como mínimo"),
});

export const registerSchema = z.object({
  //TODO: Add regex for the school email like or @school.edu.pe
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email("El email no es válido"),
  password: z
    .string({
      required_error: "El password es requerido",
    })
    .min(8, "El password contiene 8 caracteres como mínimo"),
  role: z.enum(["ADMIN", "TEACHER", "STUDENT"]),
});
