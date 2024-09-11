import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

import { router } from '@/lib/trpc/server';
import { createContext } from '@/lib/trpc/server/context';

export const handle: Handle = createTRPCHandle({
  url: '/api/trpc',
	router,
	createContext,
	onError: ({ type, path, error }) => {
		if (process.env.NODE_ENV === 'development') {
			console.error(`Encountered error while trying to process ${type} @ ${path}:`, error);
		}
	}
});
