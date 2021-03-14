<script>
    import Layout from './shared/Layout.svelte';
    import SvelteTooltip from 'svelte-tooltip';
    import { ToolIcon, ArchiveIcon, UserIcon,
             LinkedinIcon, GithubIcon, InstagramIcon,
             MailIcon, DownloadIcon } from 'svelte-feather-icons'
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
                            Full-Stack Developer
                        </h2>
                        <h3 class="subtitle is-spaced is-italic">
                            Software Engineer with 5+ years of experience in building platform web applications
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

                        <div class="contact-icon-tray">
                            <a
                            target="_blank"
                            href="https://www.linkedin.com/in/shaik-azeez-ahmed-7254b1a3/">
                            <SvelteTooltip tip="visit LinkedIn profile" bottom >
                                <LinkedinIcon class="btn-icon nav-btn-icon" size="20" />
                            </SvelteTooltip>
                            </a>
                            
                            <a 
                                target="_blank"
                                href="https://github.com/azeez-infrrd">
                                <SvelteTooltip tip="visit Github profile" bottom >
                                    <GithubIcon class="btn-icon nav-btn-icon" size="20" />
                                </SvelteTooltip>
                                
                            </a>
            
                            <a
                                target="_blank" 
                                href="https://www.instagram.com/thiz_is_zi/">
                                <SvelteTooltip tip="visit Instagram profile" bottom >
                                    <InstagramIcon class="btn-icon nav-btn-icon" size="20" />
                                </SvelteTooltip>
                            </a>
            
                            
                            <a
                                href="mailto:azizahmed648@gmail.com">
                                <SvelteTooltip tip="send Email" bottom >
                                    <MailIcon class="btn-icon nav-btn-icon" size="20" />
                                </SvelteTooltip>
                            </a>

                            <a href="/resume.pdf" class='has-text-light download-link' download="Resume: Shaik Azeez Ahmed">
                                <SvelteTooltip tip="Download resume" bottom >
                                    <DownloadIcon class='btn-icon nav-btn-icon' size='20'/>
                                </SvelteTooltip>
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
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        a {
            color: $grey-lightest;
            margin: 0 2rem;
        }
        @include from($tablet) {
            max-width: 80%;
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