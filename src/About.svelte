<script>
    import Layout from './shared/Layout.svelte'
    import { DownloadIcon } from 'svelte-feather-icons'
</script>

<Layout gradientBg={true} hostComponent={'about'}>
    <section class='section'>
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
                        <p class="is-size-6-tablet">
                            Software Engineer with 5+ years of experience in building platform web applications
                            for both private and public sector
                        </p>
                        <br>
                        <p class="is-size-6-tablet">
                            I specialize in MVC based micro-services, whitelabelled applications and web accessibility.
                            I enjoy developing simple and clever solutions to complex problems.
                        </p>
                        <br>
                        <p class="is-size-6-tablet">
                            When I'm not writing code, you can find me on my musical instruments,
                            taking a solo trip or simply having a brunch out with friends and family.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="columns is-centered">
            <div class="column lhs-detail-column">
                <div class="columns">
                    <div class="column is-8-desktop is-7-widescreen">
                        <div class="details box is-horizontal">
                            <table class="table is-hoverable">
                                <tbody>
                                    <tr>
                                        <td class="has-text-weight-semibold">Bachelor's Degree:</td>
                                        <td>Computer Science & Engineering</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold">Backend:</td>
                                        <td>Ruby on Rails</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold">Frontend:</td>
                                        <td>Angular, React, Vue, Svelte</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold">Nationality:</td>
                                        <td>Indian</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold">Complete Resume:</td>
                                        <td class="has-text-weight-semibold">
                                            <a href="/resume.pdf" class='has-text-light download-link' download="Resume: Shaik Azeez Ahmed">
                                                <DownloadIcon class='btn-icon' size='20'/>
                                                Shaik Azeez Ahmed.pdf
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="exit-footer">
        <h6>
            <p class="is-size-7 pr-4">Made with:</p>
        </h6>

        <div class="field is-grouped is-grouped-multiline">
            <div class="control">
                <div class="tags has-addons">
                <span class="tag is-light">Svelte</span>
                <span class="tag is-danger">
                    <img class='svlete-svg' src="/icons/svelte.svg" alt="Svelte">
                </span>
                </div>
            </div>
            
            <div class="control">
                <div class="tags has-addons">
                <span class="tag is-light">Bulma</span>
                <span class="tag is-primary">
                    <img src="/icons/bulma.svg" alt="Bulma">
                </span>
                </div>
            </div>
        </div>
    </div>
</Layout>

<style type='text/scss'>

    a.download-link {
        border-bottom: 1px solid;
    }

    .section {
        @include from($mobile) {
            padding-top: 5rem;
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

    .table {
        background-color: $grey-darker;
        color: $grey-lighter;
        td {
            border: none;
        }
    }
    .table.is-hoverable tbody tr:not(.is-selected):hover {
        background-color: $grey-dark;
    }
    .details {
        background-color: $grey-darker;
        color: $grey-lighter;
        border-radius: 10px;
        margin-top: 0.5rem;
    }
    
    h1.title {
        letter-spacing: 0.06rem;
        color: #e8eef2;
        font-family: trebuchet ms, sans-serif;
    }
    .subtitle, p {
        line-height: 1.6;
        letter-spacing: 0.06rem;
        color: #e8eef2;
    }
    
    .svlete-svg {
        height: 20px
    }

    .exit-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: $grey-darker;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        flex-basis: 100%;
        border-top: 1px solid $grey-lighter;
        padding: 2rem;
        align-items: baseline;
    }
</style>