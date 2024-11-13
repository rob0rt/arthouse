<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import ProfileInfoSection from './ProfileInfoSection.svelte';
	import ProfileTabButton from './ProfileTabButton.svelte';
</script>

<header class="pt-4 bg-forest-100">
	<h1 class="font-semibold text-2xl" style="margin-left: calc(250px + 2rem);">
		Art House Collective
	</h1>
	<nav class="border-b-2 mt-2 flex divide-x-2" style="padding-left: calc(250px + 2rem);">
		<ProfileTabButton href="/" active={true}>Wall</ProfileTabButton>
		<ProfileTabButton href="/">About</ProfileTabButton>
	</nav>
</header>
<div class="flex flex-row">
	<aside class="my-4 ml-4 flex flex-col w-[250px] space-y-4 -top-[90px] relative">
		<img src={logo} alt="arthouse logo" class="border border-black" />

		<section class="pl-2">
			<p class="text-slate-700">Fort Worth, TX</p>
			<hr />
			<div class="grid grid-cols-2 gap-y-1 text-slate-500 mt-3 text-sm">
				<p>Birthday</p>
				<p class="font-semibold">Jan 2022</p>

				<p>Relationship Status</p>
				<p class="font-semibold">Single</p>
			</div>
		</section>

		<ProfileInfoSection title="Past Events" subtitle="6 past events">
			<ol class="text-slate-700 text-sm pl-2 list-disc list-inside pt-2">
				<li>October 2024</li>
				<li>January 2022</li>
			</ol>
		</ProfileInfoSection>

		<ProfileInfoSection title="Board Members">
			<div class="grid grid-cols-3 text-slate-700 text-xs text-center pt-2">
				<div class="m-1">
					<img src="https://placehold.co/100x100" />
					<p>Lorem Ipsum</p>
				</div>
				<div class="m-1">
					<img src="https://placehold.co/100x100" />
					<p>Dolor Sit</p>
				</div>
				<div class="m-1">
					<img src="https://placehold.co/100x100" />
					<p>Amet</p>
				</div>
				<div class="m-1">
					<img src="https://placehold.co/100x100" />
					<p>Lorem Ipsum</p>
				</div>
				<div class="m-1">
					<img src="https://placehold.co/100x100" />
					<p>Dolor Sit</p>
				</div>
				<div class="m-1">
					<img src="https://placehold.co/100x100" />
					<p>Amet</p>
				</div>
			</div>
		</ProfileInfoSection>
	</aside>
	<section class="my-4 mr-4 flex flex-col grow"></section>
</div>
