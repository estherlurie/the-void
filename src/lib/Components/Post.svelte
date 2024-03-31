<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	export let post: PageData;
</script>

<div class="post" on:click={() => goto(`/p/${post.id}`)}>
	<small>@{post.users.name}</small>
	<p>{post.text}</p>
	<small>
		{post.create_time.toLocaleString()}
	</small>
</div>

<style>
	div {
		color: inherit;
		padding: 2rem;
	}
	.post {
		background: white;
		transition: box-shadow 0.1s ease-in;
		border: solid;
	}

	.post:hover {
		box-shadow: 1px 1px 3px #aaa;
		cursor: pointer;
	}

	.post,
	.post {
		margin-top: 2rem;
	}
</style>
