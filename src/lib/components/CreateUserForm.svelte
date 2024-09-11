<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { trpc } from '$lib/trpc/client';

	let name = '';
	let email = '';
	let password = '';

	const createUser = async () => {
		const client = trpc();

		await client.users.create.mutate({
			name,
			email,
			password
		});

		name = '';
		email = '';
		password = '';

		await invalidateAll();
	};
</script>

<form on:submit|preventDefault={createUser}>
	<input type="text" bind:value={name} required />
	<input type="email" bind:value={email} required />
	<input type="password" bind:value={password} required />

	<button>Create</button>
</form>
