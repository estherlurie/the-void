<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import NewPost from '$lib/components/NewPost.svelte';
	import type { PageData } from './$types';

	// props
	export let data: PageData;
</script>

<div class="frame">
	<div class="header">
		<h1>The Void</h1>
		<button onClick="window.location.href=window.location.href">Refresh Page</button>
	</div>
	<main>
		<NewPost />
		<div>
			{#each data.feed as post (post.id)}
				<Post {post} threshold_hours={data.threshold_hours} />
			{/each}
		</div>
	</main>
</div>

<style>
	.header {
		margin: auto;
		text-align: center;
	}
</style>
