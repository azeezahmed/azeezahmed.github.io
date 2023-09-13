<script>
    import { fade, fly } from "svelte/transition";

    let isOpen = false;
    export let cardDetails = {};
    const open = () => (isOpen = true);
    const close = () => (isOpen = false);

    const techIconNames = Object.freeze({
        RUBY: "ruby",
        RAILS: "rails",
        MYSQL: "mysql",
        REDIS: "redis",
        MODBUS: "modbus",
        JQUERY: "jquery",
        STRIPE: "stripe",
        ELASTIC: "elastic",
        D3: "d3",
        ANGULAR: "angular",
        VUE: "vue",
        REACT: "react",
        POSTGRES: "postgresql",
        PYTHON: "python",
        NGINX: "nginx",
    });

    const techNames = Object.freeze({
        RUBY: "Ruby",
        RAILS: "Rails",
        MYSQL: "MySQL",
        REDIS: "Redis",
        MODBUS: "Modbus",
        JQUERY: "Jquery mobile",
        STRIPE: "Stripe Connect",
        ELASTIC: "Elastic Search",
        D3: "D3.js",
        ANGULAR: "Angular 2+",
        VUE: "Vue.js",
        REACT: "React.js",
        POSTGRES: "PostgreSQL",
        PYTHON: "Python",
        NGINX: "Nginx",
    });

    export { open, close };
</script>

{#if isOpen}
    <div transition:fade class="modal is-active">
        <div on:click={close} class="modal-background" />
        <div transition:fly={{ y: 100, duration: 500 }} class="modal-content">
            <div class="card">
                <div class="card-content">
                    <p class="title is-4">{cardDetails.title}</p>
                    <p class="subtitle is-6">{cardDetails.monthStamp}</p>
                    <div class="field is-grouped is-grouped-multiline">
                        {#each cardDetails.technologies as technology}
                            <div class="control">
                                <span class="tags has-addons">
                                    <span class="tag is-dark">
                                        {techNames[technology]}
                                    </span>
                                    <span class="tag">
                                        <img
                                            class="tag-icon svlete-svg"
                                            src={`/icons/${techIconNames[technology]}.svg`}
                                            alt="Svelte"
                                        />
                                    </span>
                                </span>
                            </div>
                        {/each}
                    </div>
                    <div class="content">
                        <p>
                            {cardDetails.desc}
                        </p>
                        <span>Key Contributions:</span>
                        <ul>
                            {#each cardDetails.keyContrib as contribution}
                                <li>{contribution}</li>
                            {/each}
                        </ul>
                        <span>Challenges faced:</span>
                        <ul>
                            {#each cardDetails.challenges as contribution}
                                <li>{contribution}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style type="text/scss">
    .card {
        background-color: #2c3e50;
    }
    .tag.is-dark {
        background-color: #3498db;
    }
    .tag-icon {
        height: 20px;
        width: 20px;
    }
    .title,
    .subtitle {
        color: white;
    }
    .field.is-grouped.is-grouped-multiline {
        margin-bottom: 2.5rem;
    }
</style>
