import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { registerSchema } from "@/schemas";
import { TRPCError } from "@trpc/server";
enum Role {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN",
}

export const userRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findMany();
  }),

  //TODO: Implementar la llamada dependiendo al role de usuario los detalles del mismo
  getById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const isTeacher = (ctx.session.user.role as Role) === Role.TEACHER;
      let user;

      if (isTeacher) {
        user = await ctx.db.user.findFirst({
          where: { id: input },
          include: {
            teacher: true,
          },
        });
      } else {
        user = await ctx.db.user.findFirst({
          where: { id: input },
          include: {
            student: true,
          },
        });
      }

      return user;
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
  update: protectedProcedure
    .input(
      registerSchema.extend({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.user.update({
        where: { id: input.id },
        data: input,
      });
      return {
        status: "success",
        message: "El usuario se ha actualizado correctamente",
      };
    }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const isNotAdmin = (ctx.session.user.role as Role) !== Role.ADMIN;
      const idCurrentSession = ctx.session.user.id;
      if (isNotAdmin) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "No tienes permiso para eliminación",
        });
      }
      if (idCurrentSession === input) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "No se puede eliminar el usuario actual",
        });
      }
      await ctx.db.user.delete({
        where: { id: input },
      });
      return {
        status: "success",
        message: "El usuario se ha eliminado correctamente",
      };
    }),
});
