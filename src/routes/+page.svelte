<script>
	import logo from '$lib/assets/logo.png';
</script>

<div class="pt-4 bg-[#F3F6F3]">
	<h1 class="font-semibold text-2xl" style="margin-left: calc(250px + 2rem);">
		Art House Collective
	</h1>
	<nav class="border-b-2 mt-2 flex">
		<a
			href="/"
			class="inline-block border-l-2 border-t-2 px-4 py-1 bg-[#97AF98] font-bold text-white"
			style="margin-left: calc(250px + 2rem);">Wall</a
		>
		<a
			href="/about"
			class="inline-block border-l border-r-2 border-t-2 px-4 py-1 font-bold text-[#577058] bg-white"
			>About</a
		>
	</nav>
</div>
<main class="flex flex-row">
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

		<section class="border-t-2 border-t-[#577058]">
			<h2 class="bg-[#DCE5DC] pl-2">Past Events</h2>
			<h3 class="bg-[#F3F6F3] pl-2 py-1 text-slate-500 text-sm">6 past events</h3>

			<ol class="text-slate-700 text-sm pl-2 list-disc list-inside pt-2">
				<li>October 2024</li>
				<li>January 2022</li>
			</ol>
		</section>

		<section class="border-t-2 border-t-[#577058]">
			<h2 class="bg-[#DCE5DC] pl-2">Board Members</h2>

			<div class="grid grid-cols-3 text-slate-700 text-xs text-center pt-2">
				<div class="m-2">
					<img src="https://placehold.co/100x100" />
					<p>Lorem Ipsum</p>
				</div>
				<div class="m-2">
					<img src="https://placehold.co/100x100" />
					<p>Dolor Sit</p>
				</div>
				<div class="m-2">
					<img src="https://placehold.co/100x100" />
					<p>Amet</p>
				</div>
				<div class="m-2">
					<img src="https://placehold.co/100x100" />
					<p>Lorem Ipsum</p>
				</div>
				<div class="m-2">
					<img src="https://placehold.co/100x100" />
					<p>Dolor Sit</p>
				</div>
				<div class="m-2">
					<img src="https://placehold.co/100x100" />
					<p>Amet</p>
				</div>
			</div>
		</section>
	</aside>
	<section class="my-4 mr-4 flex flex-col grow"></section>
</main>
