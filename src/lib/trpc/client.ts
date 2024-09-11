import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';

import type { Router } from './server/routes';

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

export function trpc(init?: TRPCClientInit) {
	const isBrowser = typeof window !== 'undefined';

	if (isBrowser && browserClient) {
		return browserClient;
	}

	const client = createTRPCClient<Router>({
    url: '/api/trpc',
		init,
	});

	if (isBrowser) {
		browserClient = client;
	}

	return client;
}
