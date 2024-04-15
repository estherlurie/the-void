<script>
	export let text = 'not hovering';
	export let hover_text = 'hovering';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const on_click = async () => {
		dispatch('message', { text: 'clicked' });
	};
</script>

<button class="button" style="--hover-text: '{hover_text}'" on:click={on_click}>
	<span>{text}</span>
</button>

<style>
	.button {
		width: 130px; /* set a width so it doesnt change upon hover */
		height: 130px;
		font-size: inherit;
		border-radius: 100px;
		margin: auto;
		background-color: #fff;
	}

	.button:hover span {
		display: none;
	}

	.button:hover:before {
		content: var(--hover-text);
	}

	.button:hover {
		background-color: #ccc;
	}
</style>
