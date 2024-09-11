<script lang="ts">
	import CreateUserForm from '@/lib/components/CreateUserForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<main>
	<h1>Users</h1>

	<CreateUserForm />

	<ul>
		{#each data.users as user}
			<li>{user.name}</li>
		{/each}
	</ul>
</main>
