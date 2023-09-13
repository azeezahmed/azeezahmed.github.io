<script>
    import Layout from "./shared/Layout.svelte";
    import Timeline from "./shared/Timeline.svelte";

    let projectsTimeline = [
        {
            year: "2015",
            details: [
                {
                    title: "Advancion Energy Storage: AES HMI",
                    monthStamp: "Sept, 2015",
                    technologies: [
                        "RUBY",
                        "RAILS",
                        "REDIS",
                        "JQUERY",
                        "MYSQL",
                        "D3",
                        "NGINX",
                    ],
                    keyContrib: [
                        "Refactoring the entire codebase to introduce parallel processing with clustering and multi-threading, improve code readability",
                        "Migrated the entire project from Rails 3.2 to Rails 5.1",
                        "Recieved best employee award",
                    ],
                    challenges: [
                        "Performance optimization for optimal load average of server",
                        "Memory leaks due to redis, Connection drop in websockets dispatcher",
                        "Refactor the entire codebase for better performance",
                    ],
                    desc: "Advancion Energy Storage(currently known as Fluence) is a leading Energy Storage firm in US.The solution developed provides an intuitive environment for monitoring and controlling a remotely located control system (Human-Machine Interface,usually used in Energy grids) using a consumer-grade touch device.",
                },
            ],
        },
        {
            year: "2017",
            details: [
                {
                    title: "Kuwait Petroleum: Workflow Manager",
                    technologies: ["ANGULAR"],
                    desc: "Workflow Manager is an hierarchical task management system for work management and team collaboration",
                    keyContrib: [
                        "Developing Responsive User interface as per designs spec",
                        "Integrating Filenet APIs",
                        "Reviewing code for quality checks and best practices",
                    ],
                    challenges: [
                        "Maintaining Cross Platform support",
                        "Supporting Legacy browsers like IE9",
                    ],
                    monthStamp: "March, 2017",
                },
                {
                    title: "Conceirge Key Health: CKH",
                    desc: "Conceirge Key Health(currently known as Access-Elite) is an app-based service that provides consumers access to elite, peer-vetted physician specialists across multiple specialties on-demand.",
                    technologies: ["RUBY", "RAILS", "STRIPE", "ELASTIC"],
                    keyContrib: [
                        "Developing Web and API components",
                        "ElasticSearch setup for full text search and integrating push notification services",
                        "Setting up Stripe Connect for linking bank accounts,credit cards and enabling scheduled payouts over stripe",
                    ],
                    challenges: [
                        "Understanding ElasticSearch custom script fields for geo queries of distance and radial search",
                        "Ensuring the application meets HIPAA(Health Insurance Portability and Accountability Act) compliance",
                    ],
                    monthStamp: "July, 2017",
                },
            ],
        },
        {
            year: "2018",
            details: [
                {
                    title: "Roostify: Curb Appeal",
                    monthStamp: "April, 2018",
                    desc: "Roostify is an app-based service that provides enhanced lending experience for everyone involved in the home buying process. The project involved a complete refresh of the app's look & feel.",
                    technologies: ["RUBY", "RAILS", "POSTGRES", "VUE", "REACT"],
                    keyContrib: [
                        "Building an whitelabelling setup, to customize the application as the customer's specification",
                        "Meta programming from builders to have component based approach for a business requirement to have dynamic, customizable forms and email templates",
                        "Frontend revamped to Bootstrap 4, also fixing the entire acceptance test suite post upgrade",
                        "Recieved Best Employee Award",
                    ],
                    challenges: [
                        "Understanding ElasticSearch custom script fields for geo queries of distance and radial search",
                        "Ensuring the application meets HIPAA(Health Insurance Portability and Accountability Act) compliance",
                    ],
                },
            ],
        },
        {
            year: "2019",
            details: [
                {
                    title: "Roostify: UX Lender",
                    monthStamp: "January, 2019",
                    technologies: ["RUBY", "RAILS", "VUE", "REACT"],
                    keyContrib: [
                        "Performance improvements by differential/lazing loading",
                        "Upgrading UI to 99% compatible with WCAG 2.0",
                        "Switching server rendered sections of page to React.js and Vue.js for better UX",
                    ],
                    challenges: ["Picking up new front-end technologies"],
                    desc: "Roostify is an app-based service that provides enhanced lending experience for everyone involved in the home buying process. The project involved enhancement and migration of a specific role's look and feel to Hybrid React.js and Vue.js Components",
                },
                {
                    title: "Roostify: URLA 1003 revision",
                    technologies: ["RUBY", "RAILS", "POSTGRES", "VUE", "REACT"],
                    desc: "Roostify is an app-based service that provides enhanced lending experience for everyone involved in the home buying process. The project involved re-work of core system and updating all the third-party integration services to latest standards of mortgage loan applications.",
                    monthStamp: "July, 2019",
                    keyContrib: [
                        "Refactoring white label dynamic forms to support 1003 revision",
                        "Migrated Esign Services, Automated Underwriting service to latest version",
                        "Updating Third party integration to support URLA 1003, MISMO 3.4, Credit reporting Services like EquiFax and AccountChek",
                    ],
                    challenges: [
                        "Exploring new third party tools in banking/mortgage and finding better ways of integration",
                        "Adhering to US standards for banking/mortgage applications like, ADA Act, WCAG 2.0 certification, ECOA Act, Data Privacy",
                    ],
                },
            ],
        },
        {
            year: "2020",
            details: [
                {
                    title: "Infrrd: IDP Platform UI",
                    technologies: ["ANGULAR", "D3", "PYTHON", "NGINX"],
                    keyContrib: [
                        "Established Delivery workflow for UI",
                        "Setup Github standards for multiple teams to develop seamlessly without any major conflicts",
                        "Mentor new team members and review their work on daily basis",
                        "Build and integrated Github Actions checks as part of CICD across all repos of the Tech Stack",
                        "Integrate UI/UX to train ML models table and checkbox entities",
                    ],
                    challenges: [
                        "Served as a key decision maker for technology choice and overall design approach",
                        "Underwent Training for people management skills",
                    ],
                    monthStamp: "January, 2020",
                    desc: "Infrrd helps enterprises drive process innovation by removing manual processing bottlenecks and automating data extraction from documents.",
                },
            ],
        },
        {
            year: "2023",
            details: [
                {
                    title: "Infrrd: IDP Mortgage Compliance",
                    technologies: ["ANGULAR", "D3", "PYTHON", "NGINX"],
                    monthStamp: "July, 2023",
                    keyContrib: [
                        "Defined high level design specs and front-end architecture",
                        "Switched the application to lazing loading of modules",
                        "Interact with different stakeholders, product team, UX designers to analyse requirements and create high level design documents for the team",
                        "Performance optimizations by eliminating libraries and switching certain aspects of the application to relatively similar solution for business requirements",
                        "Integrated google analytics and dashboard setup for the platform",
                    ],
                    challenges: [
                        "Exploring and understanding mortgage servicing applications and core requirements",
                    ],
                    desc: "Infrrd helps enterprises drive process innovation by removing manual processing bottlenecks and automating data extraction from documents.",
                },
            ],
        },
    ];
</script>

<Layout gradientBg={true} hostComponent={"projects"}>
    <Timeline timelineEntries={projectsTimeline} />
</Layout>
