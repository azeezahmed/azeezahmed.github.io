<script>
    import Layout from "./shared/Layout.svelte";
    import { DownloadIcon } from "svelte-feather-icons";
    import { totalExperience } from "./globalStore.js";
</script>

<Layout gradientBg={true} showFooter={true} hostComponent={"about"}>
    <section class="section section-scrollable">
        <div class="columns is-centered">
            <div class="column lhs-detail-column">
                <div class="columns">
                    <div class="column">
                        <h4 class="title is-4">Shaik Azeez Ahmed</h4>
                        <h5 class="subtitle is-6 is-spaced">
                            Full-Stack Engineer
                        </h5>
                        <p class="is-size-6-tablet">
                            I specialize in MVC based micro-services,
                            whitelabelled web-applications and web
                            accessibility.
                        </p>
                        <br />
                        <p class="is-size-6-tablet">
                            My current interests are UX design-systems and
                            delivery workflows. I enjoy developing simple and
                            clever solutions to complex problems.
                        </p>
                        <br />
                        <p class="is-size-6-tablet">
                            When I'm not writing code, I spend my time on my
                            guitar, gaming rig or simply having a brunch out
                            with friends and family.
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
                                        <td class="has-text-weight-semibold"
                                            >Bachelor's Degree:</td
                                        >
                                        <td>Computer Science & Engineering</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold"
                                            >Backend:</td
                                        >
                                        <td
                                            >Ruby on Rails, Django,
                                            Node.js(express)</td
                                        >
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold"
                                            >Frontend:</td
                                        >
                                        <td>Angular, React, Vue, Svelte</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold"
                                            >Current role:</td
                                        >
                                        <td>Technical specialist</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold"
                                            >Total experience:</td
                                        >
                                        <td>{$totalExperience} yrs</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold"
                                            >Nationality:</td
                                        >
                                        <td>Indian</td>
                                    </tr>
                                    <tr>
                                        <td class="has-text-weight-semibold"
                                            >Complete Resume:</td
                                        >
                                        <td class="has-text-weight-semibold">
                                            <a
                                                href="/resume.pdf"
                                                class="has-text-light download-link"
                                                download="Resume: Shaik Azeez Ahmed"
                                            >
                                                <DownloadIcon
                                                    class="btn-icon"
                                                    size="20"
                                                />
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
</Layout>

<style type="text/scss">
    a.download-link {
        border-bottom: 1px solid;
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
        background-color: #2c3e50;
        color: $grey-lighter;
        td {
            border: none;
        }
    }
    .table.is-hoverable tbody tr:not(.is-selected):hover {
        background-color: #2c3e50;
    }
    .details {
        background-color: #2c3e50;
        color: $grey-lighter;
        border-radius: 10px;
        margin-top: 0.5rem;
        @include until($mobile) {
            font-size: 12px;
        }
    }

    .title {
        letter-spacing: 0.06rem;
        color: #e8eef2;
        font-family: trebuchet ms, sans-serif;
    }
    .subtitle,
    p {
        line-height: 1.6;
        letter-spacing: 0.06rem;
        color: #e8eef2;
    }

    .svlete-svg {
        height: 20px;
    }
</style>
