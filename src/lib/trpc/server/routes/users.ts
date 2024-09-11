import { z } from 'zod';

import { prisma } from '@/lib/prisma';
import { t } from '../t';

export const users = t.router({
	create: t.procedure
		.input(
			z.object({
				name: z.string().min(3).max(50),
				email: z.string().email(),
				password: z.string().min(8).max(50)
			})
		)
		.mutation(async ({ input }) =>
			prisma.user.create({
				data: {
					name: input.name,
					email: input.email,
					password: input.password
				}
			})
		),
	list: t.procedure.query(() =>
		prisma.user.findMany({
			select: {
				id: true,
				name: true
			}
		})
	)
});
