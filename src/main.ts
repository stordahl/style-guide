import App from './App.svelte';
import Data from './data.json';

const app = new App({
	target: document.body,
	props: {
		...Data
	}
});

export default app;