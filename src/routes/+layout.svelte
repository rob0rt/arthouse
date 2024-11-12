<script>
	let { children } = $props();
</script>

<header>
	<h1><a href="/">art house</a></h1>
</header>

<main>
	{@render children()}
</main>

<style>
	header {
		padding: 16px 16px 0;
		background-color: #577058;
	}

	h1 {
		font-family: 'Cantata One', serif;
		font-weight: 500;
		font-style: normal;
		color: white;
		font-size: 24px;

		a {
			text-decoration: none;
			color: white;
		}
	}

	main {
		position: relative;
		border: 1px solid black;
		height: 100%;
		max-width: 1000px;
		background-color: white;
		left: 200px;
		top: -24px;
	}
</style>
