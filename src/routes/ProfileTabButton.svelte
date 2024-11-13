<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		active = false,
		href,
		children
	}: { active?: boolean; href: string; children: Snippet } = $props();
</script>

<a
	{href}
	class="inline-block first:border-l-2 last:border-r-2 border-t-2 px-4 py-1 font-bold"
	class:bg-forest-400={active}
	class:text-white={active}
	class:bg-white={!active}
	class:text-forest-500={!active}>{@render children()}</a
>
