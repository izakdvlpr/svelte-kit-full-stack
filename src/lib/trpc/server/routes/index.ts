import type { inferRouterInputs } from '@trpc/server';

import { t } from '../t';
import { users } from './users';

export const router = t.router({
	users
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;

export type RouterInputs = inferRouterInputs<Router>;
