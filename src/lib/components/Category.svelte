<script>
	export let category;
	export let value;
</script>

<button class="category-button btn-{category}-{value}">
	{value}
</button>

<style>
	.category-button {
		font-size: 13px;
		padding: 1px 5px;
		margin: auto 2px auto auto;
		color: var(--color-primary);
	}
</style>
