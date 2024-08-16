<script>
	import { theme } from '../stores.js';
	import copy from '$lib/data/copy.json';
	import rawData from '$lib/data/data.json';
	import Meta from '$lib/components/Meta.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Masonry from 'svelte-masonry-layout';
	import ScrollToTop from '../lib/components/ScrollToTop.svelte';
	import { onMount } from 'svelte';

	const data = rawData.data;
	const masonryGap = '13px';

	let updateGrid = () => {};

	onMount(() => {
		updateGrid();
	});
</script>

<div id="root" class="theme-{$theme}">
	<Meta title={copy.seo.displayTitle} description={copy.seo.metaDescription} />
	<div class="wrapper">
		<div>
			<div class="header fixed">
				<h1 class="header-title">{copy.hero.title}</h1>
				<h3 class="header-subtitle">{@html copy.hero.subtitle}</h3>
				<p class="header-copy">{@html copy.hero.bio}</p>
				<p class="header-cta">{@html copy.hero.cta}</p>
				<div class="contact">
					<h2 class="contact-title">Drop me a line</h2>
					<div class="contact-link">
						{#each Object.keys(copy.social) as platform}
							<a target="_blank" href={copy.social[platform]}>{platform} ↗</a>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="projects">
			{#each Object.keys(copy.categories) as category}
				<div class="category-title" id="category-{category.toLowerCase().replace('-', '')}">
					<h3>{copy.categories[category].name}</h3>
				</div>
				<Masonry gap={masonryGap} bind:updateGrid>
					{#each data.filter((d) => d.active == 'TRUE' && d.category == copy.categories[category].name) as project}
						<ProjectCard data={project} />
					{/each}
				</Masonry>
			{/each}
		</div>
	</div>

	<ScrollToTop />
</div>

<style>
	#root {
		padding: 0% 13%;
	}

	.wrapper {
		display: grid;
		grid-template-columns: 1fr 3fr;
		column-gap: 45px;
		filter: drop-shadow(0 0 0.1rem #ffffff54);
	}

	.fixed {
		position: sticky;
		top: 0;
	}

	.page-link {
		font-family: var(--mono-font);
	}

	.projects {
		margin: 10px 0px;
	}

	.header {
		padding: 20px 0px 20px 0px;
	}

	.header-title {
		color: var(--color-primary);
		filter: drop-shadow(0 0 0.1rem #ffffff54);
	}

	.header-subtitle {
		font-family: var(--body-font);
		margin: 20px 0px 0px;
		line-height: 1.4rem;
		/* letter-spacing: 0.02rem; */
	}

	.header-copy {
		margin: 20px 0px 0px;
		line-height: 1.3rem;
	}

	.header-cta {
		margin: 25px 0px 0px;
		padding: 12px;
		background-color: #ffffff85;
		border-radius: 6px;
		line-height: 1.3rem;
	}

	.contact-title {
		margin: 35px 0px 0px 0px;
	}

	.contact-link {
		font-family: var(--mono-font);
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: 600;
		margin: 15px 0px 0px 0px;
	}

	.contact-link > a {
		margin: 5px 8px 0px 0px;
		width: fit-content;
		background-color: #ffffff4d;
		padding: 6px 10px;
		border-radius: 5px;
		transition: 0.1s ease-in-out all;
		white-space: nowrap;
		color: var(--color-primary);
	}

	.contact-link > a:hover {
		background-color: #fff;
		transition: 0.1s ease-in-out all;
	}

	.category-title {
		margin: 45px 0px 10px 10px;
		font-family: var(--mono-font);
		text-transform: uppercase;
		font-size: 1rem;
	}

	@media only screen and (max-width: 650px) {
		#root {
			padding: 0% 5%;
		}

		.wrapper {
			display: grid;
			grid-template-columns: 1fr;
		}
	}
</style>
