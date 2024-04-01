<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import NewPost from '$lib/components/NewPost.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { store } from '$lib/store';

	// props
	export let data: PageData;

	// username store state
	let savestore = false;
	$: if (savestore && $store) {
		window.sessionStorage.setItem('store', JSON.stringify($store));
	}
	onMount(async () => {
		let ses = window.sessionStorage.getItem('store');
		if (ses) {
			console.log('sob-- ~ loading ses', ses);
			$store = JSON.parse(ses);
		}
		savestore = true;
	});
</script>

<div class="frame">
	<h1>The Void</h1>
	<button onClick="window.location.href=window.location.href">Refresh Page</button>
	<main>
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
