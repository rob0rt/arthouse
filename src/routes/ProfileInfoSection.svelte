<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		children,
		title,
		subtitle
	}: {
		children: Snippet;
		title: string;
		subtitle?: string;
	} = $props();
</script>

<section class="border-t-2 border-t-forest-500">
	<h2 class="bg-forest-200 pl-2">{title}</h2>
	{#if subtitle}
		<h3 class="bg-forest-100 pl-2 py-1 text-slate-600 text-sm">{subtitle}</h3>
	{/if}

	{@render children()}
</section>
