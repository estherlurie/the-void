<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import NewPost from '$lib/components/NewPost.svelte';
	import UsernameEntry from '$lib/components/UsernameEntry.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	let user_id: number;
</script>

<div class=frame>
	<h1>The Void</h1>
	<button onClick="window.location.href=window.location.href">Refresh Page</button>
	<main>
		<UsernameEntry />
		<NewPost />
		<div>
			{#each data.feed as post (post.id)}
				<Post {post} />
			{/each}
		</div>
	</main>
</div>

<style>
	div {
		color: white;
		background: black;
	}
</style>
