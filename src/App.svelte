<script>
	import { Router, Route } from "svelte-routing"
	import Bio from "./Bio.svelte"
	import Projects from "./Projects.svelte"
    import About from "./About.svelte"
	import WorkHistory from "./WorkHistory.svelte";
	
	export let url = ""
</script>

<Router url="{url}">
	  <Route path="projects" component="{Projects}" />
	  <Route path="workHistory" component="{WorkHistory}" />
	  <Route path="about" component="{About}" />
	  <Route path="/" component="{Bio}"></Route>
</Router>

<style lang="scss" global>
	@import "./styles.scss";

	:global(html), :global(body) {
		background: $grey-dark;
	}

	:global(body::-webkit-scrollbar) {
		display: none;
	}

	:global(.btn-icon) {
        position: relative;
		top: 2px;
    }

	:global(.nav-btn-icon) {
		@include from($tablet) {
            width: 26px;
            height: 26px;
        }
	}

	:global(.tooltip) {
        z-index: 1;
    }

	@include until($tablet) {
		p {
			font-size: 12px;
		}
	}
</style>