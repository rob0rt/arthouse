<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header class="pt-4 px-4 text-sm font-medium bg-forest-500">
	<h1 class="cantata-one-regular text-white text-2xl">
		<a href="/"> art house </a>
	</h1>
</header>

<main class="relative border border-black h-100 max-w-[1000px] -top-6 left-48 bg-white">
	{@render children()}
</main>
