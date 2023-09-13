<script>
    import Header from "./Header.svelte";
    import { fade } from "svelte/transition";

    export let showBrand = true;
    export let showHeader = true;
    export let showFooter = false;
    export let gradientBg = false;
    export let hostComponent = "none";

    const myName = "Shaik Azeez";
    let pageTitle = hostComponent.toLowerCase();
    let TitleToDisplay = myName + ": " + pageTitle;
</script>

<svelte:head>
    <title>{TitleToDisplay}</title>
</svelte:head>

<main>
    {#if showHeader}
        <section class="header-section">
            <Header {hostComponent} {showBrand} />
        </section>
    {/if}
    <section
        class="content-section"
        class:header-spacer={showHeader}
        class:gradient={gradientBg}
        in:fade={{ delay: 200, duration: 500 }}
    >
        <slot />
    </section>

    {#if showFooter}
        <!-- <div class="exit-footer">
            <h6>
                <p class="is-size-7 pr-4">Made with:</p>
            </h6>

            <div class="field is-grouped is-grouped-multiline">
                <div class="control">
                    <div class="tags has-addons">
                        <span class="tag is-light">Svelte</span>
                        <span class="tag is-danger">
                            <img
                                class="svlete-svg"
                                src="/icons/svelte.svg"
                                alt="Svelte"
                            />
                        </span>
                    </div>
                </div>

                <div class="control">
                    <div class="tags has-addons">
                        <span class="tag is-light">Bulma</span>
                        <span class="tag is-primary">
                            <img src="/icons/bulma.svg" alt="Bulma" />
                        </span>
                    </div>
                </div>
            </div>
        </div> -->

        <footer class="footer">
            <div class="content has-text-centered">
                <div class="field is-grouped is-grouped-multiline">
                    <p class="control is-size-7 pr-4">Built with:</p>
                    <div class="control">
                        <div class="tags has-addons">
                            <span class="tag is-light">Bulma</span>
                            <span class="tag is-primary">
                                <img src="/icons/bulma.svg" alt="Bulma" />
                            </span>
                        </div>
                    </div>
                    <div class="control">
                        <div class="tags has-addons">
                            <span class="tag is-light">Svelte</span>
                            <span class="tag is-danger">
                                <img
                                    class="svlete-svg"
                                    src="/icons/svelte.svg"
                                    alt="Svelte"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    {/if}
</main>

<style type="text/scss">
    main {
        min-height: 100vh;
        background-image: linear-gradient(141deg, #2c3e50 0%, #3498db 100%);
    }
    .header-spacer {
        @include from($mobile) {
            margin-top: 1rem;
        }
    }

    footer {
        color: white;
        background-color: #2c3e50;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;

        .content {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
