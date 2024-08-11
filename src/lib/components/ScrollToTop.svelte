<script>
	export let showOnPx = 150;
	let hidden = true;

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<button class="button-scroll" on:click={scrollToTop} class:hidden>↑ BACK TO TOP</button>

<style>
	.button-scroll {
		position: fixed;
		top: 90%;
		left: 88%;
		background-color: #ffffff4d;
		backdrop-filter: blur(2px);
		font-size: 0.85rem;
		border: 0px;
		transition: 0.3s ease-in-out all;
		z-index: 200;
		opacity: 0.8;
		font-family: var(--mono-font);
	}

	.button-scroll:hover {
		background-color: white;
		backdrop-filter: blur(0);
		cursor: pointer;
		opacity: 1;
		transition: 0.1s ease-in-out all;
	}

	.button-scroll.hidden {
		opacity: 0;
		visibility: hidden;
		transition: 0.1s ease-in-out all;
	}

	@media only screen and (max-width: 650px) {
		.button-scroll {
			position: fixed;
			top: 90%;
			left: 65%;
		}
	}
</style>
