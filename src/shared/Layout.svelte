<script>
    import Header from './Header.svelte'
    import { fade } from 'svelte/transition';

    export let showBrand = true
    export let showHeader = true
    export let gradientBg = false
    export let hostComponent = 'none'

    const myName = 'Shaik Azeez'
    let pageTitle = hostComponent.toLowerCase()
    let TitleToDisplay = myName + ': ' + pageTitle
</script>

<svelte:head>
    <title>{TitleToDisplay}</title>
</svelte:head>

<main>
    {#if showHeader}
        <section>
            <Header hostComponent={hostComponent} showBrand={showBrand} />
        </section>
    {/if}
    <section class:header-spacer={showHeader} class:gradient={gradientBg}  in:fade="{{delay: 200, duration: 500}}">
        <slot></slot>
    </section>
    
</main>

<style type='text/scss'>
    .gradient {
        min-height: 100vh;
        $color: $grey-darker;
        $gradient-top-left: darken(saturate(adjust-hue($color, -10deg), 10%), 10%);
        $gradient-bottom-right: lighten(saturate(adjust-hue($color, 10deg), 5%), 5%);
        background-image: linear-gradient(141deg, $gradient-top-left 0%, $color 71%, $gradient-bottom-right 100%)
    }

    .header-spacer {
        @include from($mobile){
            margin-top: 1rem;
        }
        @include until($mobile){
            margin-top: 3rem;
        }
    }
</style>