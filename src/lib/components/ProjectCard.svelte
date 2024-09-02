<script>
	export let data;
	console.log(data);
	import Category from './Category.svelte';
</script>

<div class="project" id="project-{data.slug}">
	<div class="project-location">
		<p>{data.location}</p>
	</div>

	<div class="project-title">
		{#if data.link}
			<a href={data.link} target="_blank">
				<h2>{data.title}</h2>
			</a>
		{:else}
			<h2>{data.title}</h2>
		{/if}
	</div>

	<div class="project-image">
		{#if data.image}
			<a href={data.link} target="_blank">
				<img src={data.image} alt={data.alt} />
			</a>
		{:else}
			<a href={data.link} target="_blank">
				<img
					src="https://raw.githubusercontent.com/koffeeya/portfolio/master/src/static/thumbnails/{data.slug}.png"
					alt={data.alt}
				/>
			</a>
		{/if}
	</div>

	<div class="project-content">
		<div class="project-subtitle">
			{#if data.technologies}
				<span style="display: flex;">
					<p class="project-date">{data.date}</p>
					<div class="project-technologies">
						{#each data.technologies.split(',') as tech}
							<Category value={tech} category="technologies" />
						{/each}
					</div>
				</span>
			{:else}
				<p class="project-date">{data.date}</p>
			{/if}
		</div>

		{#if data.description}
			<div class="project-description">
				<p>{@html data.description}</p>
			</div>
		{/if}

		{#if data.awards}
			<div class="project-awards">
				<p>🏆 {data.awards}</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.project {
		background-color: #ffffff85;
		padding: 0rem;
		border-radius: 6px;
		height: fit-content;
		transform: scale(0.99);
		transition: 0.3s ease-in-out all;
		overflow: hidden;
	}

	.project:hover {
		transform: scale(1);
		transition: 0.1s ease-in-out all;
		background-color: #ffffffe5;
	}

	.project-content {
		margin: 18px;
	}

	.project-title {
		line-height: 1.55rem;
		padding: 0px 15px 15px 15px;
		text-wrap: pretty;
	}

	.project-location {
		font-size: 0.75rem;
		font-family: var(--mono-font);
		text-transform: uppercase;
		margin: 15px 0px 5px 15px;
		font-weight: 600;
		opacity: 75%;
	}

	.project-subtitle,
	.project-description {
		margin: 5px 0px 10px 0px;
		line-height: 1.2rem;
	}

	.project-awards {
		margin: 5px 0px 10px 0px;
		line-height: 1.1rem;
		text-wrap: pretty;
	}

	.project-date {
		margin: auto auto auto 0px;
		text-transform: uppercase;
		font-weight: 600;
		padding: 3px 6px;
		background-color: rgba(255, 255, 255, 0.85);
		border-radius: 5px;
		font-size: 0.8rem;
		width: fit-content;
		font-family: var(--mono-font);
	}

	.project-technologies {
		margin: 0px;
		color: var(--color-secondary);
	}

	.project-description {
		margin-top: 15px;
	}

	.project-awards {
		font-size: 0.85rem;
		opacity: 75%;
		margin-top: 15px;
	}
</style>
