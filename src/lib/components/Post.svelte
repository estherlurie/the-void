<script lang="ts">
	import type { PageData } from './$types';

	export let post: PageData;
	export let threshold_hours: number;

	const time_left_min = (create_time: Date): number => {
		const now = new Date();
		const elapsed_ms = now.getTime() - create_time.getTime();
		const threshold_ms = threshold_hours * 60 * 60 * 1000;
		const time_left_ms = threshold_ms - elapsed_ms;
		const time_left_min = time_left_ms / 1000 / 60;
		return Math.round(time_left_min);
	};
</script>

<div class="post">
	<small>@{post.users.name}</small>
	<p>{post.text}</p>
	<small>
		{time_left_min(post.create_time)} minutes left
	</small>
</div>

<style>
	div {
		font-size: inherit;
		color: inherit;
		padding: 2rem;
	}
	.post {
		width: 50%;
		margin: auto;
		transition: box-shadow 0.1s ease-in;
		border: dotted;
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
