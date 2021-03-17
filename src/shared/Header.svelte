<script>
    import SvelteTooltip from 'svelte-tooltip';
    import { onMount, onDestroy } from 'svelte';
    import { LinkedinIcon, GithubIcon, InstagramIcon, MailIcon } from 'svelte-feather-icons'

    export let fullName = 'Shaik Azeez Ahmed';
    export let showBrand = false;
    export let hostComponent = 'none';
    let pages = {projects: 'projects', about: 'about', work: 'workHistory'}

    onMount(async () => {
        const hamburgerLinkElem = document.querySelector('.navbar-burger')
        hamburgerLinkElem.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = hamburgerLinkElem.dataset.target;
            const targetElem = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            hamburgerLinkElem.classList.toggle('is-active');
            targetElem.classList.toggle('is-active');
        })
	});

    onDestroy(() => {
        const hamburgerLinkElem = document.querySelector('.navbar-burger')
        hamburgerLinkElem.removeEventListener('click')
    })
</script>

<nav class="navbar is-fixed-top is-dark"  role="navigation" aria-label="main navigation">
    {#if showBrand}
        <div class='navbar-brand is-size-4'>
            <a class="navbar-item" href="/">
                <h1>{fullName}</h1>
            </a>
            <hr class="navbar-divider">

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navlinks">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    {/if}
        
    <div id="navlinks" class="navbar-menu">
        <div class='navbar-start'>
            {#if hostComponent != pages.projects}
            <a class="navbar-item"  href="/projects">Projects</a>
            {/if}
            {#if hostComponent != pages.work}
                <a class="navbar-item"  href="/workHistory">Work History</a>
            {/if}
            {#if hostComponent != pages.about}
                <a class="navbar-item"  href="/about">About</a>
            {/if}
        </div>
    </div>
    
    <div class='navbar-end'>
        
        <a
            target="_blank"
            href="https://www.linkedin.com/in/shaik-azeez-ahmed-7254b1a3/"
            class="navbar-item linkedin-icon">
            <SvelteTooltip tip="visit LinkedIn profile" bottom >
                <LinkedinIcon class="btn-icon nav-btn-icon" size="20" />
            </SvelteTooltip>
        </a>
        
        <a 
            target="_blank"
            href="https://github.com/azeez-infrrd"
            class="navbar-item">
            <SvelteTooltip tip="visit Github profile" bottom >
                <GithubIcon class="btn-icon nav-btn-icon" size="20" />
            </SvelteTooltip>
            
        </a>

        <a
            target="_blank" 
            href="https://www.instagram.com/thiz_is_zi/"
            class="navbar-item instagram-icon">
            <SvelteTooltip tip="visit Instagram profile" bottom >
                <InstagramIcon class="btn-icon nav-btn-icon" size="20" />
            </SvelteTooltip>
        </a>

        
        <a
            href="mailto:azizahmed648@gmail.com"
            class="navbar-item email-icon">
            <SvelteTooltip tip="send Email" bottom >
                <MailIcon class="btn-icon nav-btn-icon" size="20" />
            </SvelteTooltip>
        </a>
    </div>
</nav>

<style type='text/scss'>
    
    .navbar-end {
        display: flex;
        @include from($tablet) {
            margin-right: 2rem;
        }
    }

    .navbar-item, .navbar-menu {
        color: $grey-lightest;
        background-color: $grey-darker;
    }
    
    @include from($mobile) {
        .navbar-brand {
            margin-left: 0rem !important;
        }
    }

    .navbar-item:hover, .navbar-item:focus {
        background-color: #292929;
        color: $grey-lightest
    }

    .navbar-item:focus {
        outline: 1px solid $grey-lightest;
        outline-offset: -2px;
    }

</style>
