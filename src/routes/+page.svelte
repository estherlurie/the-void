<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import NewPost from '$lib/components/NewPost.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	let username = '';
</script>

<div class=frame>
	<h1>The Void</h1>
	<button onClick="window.location.href=window.location.href">Refresh Page</button>
	<main>
		<NewPost {username}/>
		<div>
			{#each data.feed as post (post.id)}
				<Post {post}/>
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
