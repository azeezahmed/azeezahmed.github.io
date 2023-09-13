<script>
    import { Router, Route } from "svelte-routing";
    import Bio from "./Bio.svelte";
    import Projects from "./Projects.svelte";
    import About from "./About.svelte";
    import WorkHistory from "./WorkHistory.svelte";

    export let url = "";
</script>

<Router {url}>
    <Route path="projects" component={Projects} />
    <Route path="workHistory" component={WorkHistory} />
    <Route path="about" component={About} />
    <Route path="/" component={Bio} />
</Router>

<style lang="scss" global>
    @import "./styles.scss";

    :global(section::-webkit-scrollbar) {
        background-color: transparent;
    }

    :global(.section.section-scrollable) {
        padding: 1rem;
        overflow: auto;
        height: calc(100vh - 108px);
        padding-bottom: 4rem;
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
