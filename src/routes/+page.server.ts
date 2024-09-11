import { createCaller, createContext } from '@/lib/trpc/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const context = await createContext(event);
	const caller = createCaller(context);

	return {
		users: await caller.users.list()
	};
};
