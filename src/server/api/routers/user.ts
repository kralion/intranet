import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { registerSchema } from "@/schemas";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany();
  }),
  getById: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.db.user.findUnique({
      where: { id: input },
    });
  }),
  create: protectedProcedure
    .input(registerSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.create({
        data: input,
      });

      // const userExists = await ctx.db.user.findFirst({
      //   where: { email: input.email },
      // });
      // if (userExists) {
      //   throw new TRPCError({
      //     code: "FORBIDDEN",
      //     message: "El email ya está en uso",
      //   });
      // }
      return {
        status: "success",
        message: "El usuario se ha creado correctamente",
      };
    }),
});
