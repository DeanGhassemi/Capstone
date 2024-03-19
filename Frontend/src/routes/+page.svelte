<script>
	import { onMount } from 'svelte';

	// Acting as an API.
	// Connection between front and back including the database
	let express_URL = 'http://localhost:3000/';
	let testvar;
	onMount(async () => {
		const response = await fetch(`/`);
		console.log(response);
		console.log(response.json);
		testvar = response.json;
	});
</script>

<h3>{testvar}</h3>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
