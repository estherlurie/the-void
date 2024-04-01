<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import NewPost from '$lib/components/NewPost.svelte';
	import type { PageData } from './$types';

	// props
	export let data: PageData;
</script>

<div class="frame">
	<h1>The Void</h1>
	<main>
		<button onClick="window.location.href=window.location.href">Refresh Page</button>
		<NewPost />
		<div>
			{#each data.feed as post (post.id)}
				<Post {post} threshold_hours={data.threshold_hours} />
			{/each}
		</div>
	</main>
</div>

<style>
	div {
	}
</style>
