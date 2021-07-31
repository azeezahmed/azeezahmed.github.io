<script>
    import Layout from './shared/Layout.svelte';
    import SvelteTooltip from 'svelte-tooltip';
    import { totalExperience } from './globalStore.js';
    import { ToolIcon, ArchiveIcon, UserIcon,
             LinkedinIcon, GithubIcon, InstagramIcon,
             MailIcon, DownloadIcon } from 'svelte-feather-icons';
</script>

<Layout hostComponent={'bio'} showHeader={false} gradientBg={true}>
    <div class="section">
        <div class="columns is-flex-mobile is-hidden-tablet is-centered">
            <div class="column is-full">
                <div class="profile-container">
                    <div class='profile-pic'></div>
                </div>
            </div>
        </div>

        <div class="columns is-centered">
            <div class="column lhs-detail-column">
                <div class="columns">
                    <div class="column">
                        <h1 class="title">
                            Shaik Azeez Ahmed
                        </h1>
                        <h2 class="subtitle is-spaced">
                            Full-Stack Engineer
                        </h2>
                        <h3 class="subtitle is-spaced is-italic">
                            {$totalExperience}+ years of experience in building web applications
                            for both private and public sector
                        </h3>

                        <div class="buttons mt-6">
                            <a href="projects" class="button is-fullwidth-mobile is-medium is-light hvr-sweep-to-top">
                                <span>Projects</span>
                                <ToolIcon class="btn-icon ml-1" size="20" />
                            </a>
                            <a href="workHistory" class="button is-fullwidth-mobile is-medium is-light hvr-sweep-to-top">
                                <span>Work History</span>
                                <ArchiveIcon class="btn-icon ml-1" size="20" />
                            </a>
                            <a href="about" class="button is-fullwidth-mobile is-medium is-light hvr-sweep-to-top">
                                <span>About</span>
                                <UserIcon class="btn-icon ml-1" size="20" />
                            </a>
                        </div>

                        <div class="buttons contact-icon-tray">
                            <a
                            target="_blank"
                            class='button is-ghost'
                            href="https://www.linkedin.com/in/shaik-azeez-ahmed-7254b1a3/">
                            <span class="icon">
                                <SvelteTooltip tip="visit LinkedIn profile" bottom color="hsl(0, 0%, 93%)">
                                    <LinkedinIcon class="btn-icon nav-btn-icon" size="20" />
                                </SvelteTooltip>
                            </span>
                            </a>
                            
                            <a 
                                target="_blank"
                                class='button is-ghost'
                                href="https://github.com/azeez-infrrd">
                                <span class="icon">
                                    <SvelteTooltip tip="visit Github profile" bottom color="hsl(0, 0%, 93%)">
                                        <GithubIcon class="btn-icon nav-btn-icon" size="20" />
                                    </SvelteTooltip>
                                </span>
                            </a>
            
                            <a
                                target="_blank" 
                                class='button is-ghost'
                                href="https://www.instagram.com/thiz_is_zi/">
                                <span class="icon">
                                    <SvelteTooltip tip="visit Instagram profile" bottom color="hsl(0, 0%, 93%)">
                                        <InstagramIcon class="btn-icon nav-btn-icon" size="20" />
                                    </SvelteTooltip>
                                </span>
                            </a>
            
                            
                            <a
                                class='button is-ghost'
                                href="mailto:azizahmed648@gmail.com">
                                <span class="icon">
                                    <SvelteTooltip tip="send Email" bottom color="hsl(0, 0%, 93%)">
                                        <MailIcon class="btn-icon nav-btn-icon" size="20" />
                                    </SvelteTooltip>
                                </span>
                            </a>

                            <a href="/resume.pdf" class='button is-ghost download-link' download="Resume: Shaik Azeez Ahmed">
                                <span class="icon">
                                    <SvelteTooltip tip="Download resume" bottom color="hsl(0, 0%, 93%)">
                                        <DownloadIcon class='btn-icon nav-btn-icon' size='20'/>
                                    </SvelteTooltip>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="column is-hidden-mobile is-4">
                        <div class="profile-container">
                            <div class='profile-pic'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</Layout>


<style type='text/scss'>

    @include until($tablet) {
        .title, .subtitle {
            text-align: center;
        }
        .buttons {
            justify-content: center;
        }
    }

    @include until($mobile) {
        .buttons {
            .button.is-fullwidth-mobile {
                display: flex;
                width: 100%;
                margin-right: 0rem;
            }
        }
    }

    @include from($tablet) {
        .section {
            padding-top: 12rem;
        }
        .buttons {
            .button {
                margin-right: 1rem;
            }
        }
    }

    @include from($tablet) {
        .lhs-detail-column {
            flex: none;
            width: 83%;
        }
    }

    @include from($widescreen) {
        .lhs-detail-column {
            flex: none;
            width: 66%;
        }
    }

    h1.title, h2.subtitle, h3.subtitle {
        color: $grey-lightest;
        font-family: trebuchet ms, sans-serif;
    }
    
    .profile-container {
        .profile-pic {
            height: 20rem;
            width: 20rem;
            border-radius: 50%;
            border: 3px solid white;
            background-image: url("/images/profile.jpg");
            background-repeat: no-repeat;
            background-size: 100% auto;
            margin: auto;
        }
    }

    .button {
        text-decoration: none;        
    }

    .contact-icon-tray {
        margin-top: 2rem;
        justify-content: center;

        @include from($tablet) {
            justify-content: flex-start;
        }

        .button {
            color: $grey-lightest;
            &:hover, &:focus {
                background-color: $grey-lightest;
                color: $grey-dark;
            }
            &:focus {
                outline: 1px solid $grey-lightest;
            }

            &:not(:last-child) {
                margin-right: 2rem;
            }

            @include from($tablet) {
                &:not(:last-child) {
                    margin-right: 4rem;
                }
            }
        }
    }

    /* Sweep To Top */
    .hvr-sweep-to-top {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }

    .hvr-sweep-to-top:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $grey-darker;
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active {
        color: white;
    }

    .hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
</style>