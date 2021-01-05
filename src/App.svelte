<script lang="ts">
	import Header from './components/Header.svelte';
	import Overview from './components/Overview.svelte';
	import Colors from './components/Colors.svelte';
	import Fonts from './components/Fonts.svelte';
	import Logos from './components/Logos.svelte';
	import Brushes from './components/Brushes.svelte';
	import Footer from './components/Footer.svelte';
	export let name: string;
	export let url: string;
	export let overview: any;
	export let color: any;
	export let font: any;
	export let logo: any;
	export let brush: any;
</script>


<svelte:head>
	<title>{name} - Style Guide</title>
</svelte:head>


<Header {name}/>
	<main>
		<Overview {overview}/>
		<Colors {color}/>
		<Fonts {font}/>
		<Logos {logo}/>
		<Brushes {brush}/>
	</main>
<Footer {name}{url}/>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: calc(100% - 2vw);
		margin: 0 auto;
	}

	@media (min-width: 500px) {
		main {
			max-width: 800px;
		}
	}
</style>