<script>
    import Layout from './shared/Layout.svelte'
    import Timeline from './shared/Timeline.svelte'

    let projectsTimeline = [
        {
            year: '2015',
            details: [
                {
                    title: 'Advancion Energy Storage: AES HMI',
                    monthStamp: 'Sept, 2015',
                    technologies: ['RUBY', 'RAILS', 'REDIS', 'JQUERY', 'MYSQL', 'D3'],
                    desc: 'Advancion Energy Storage(currently known as Fluence) is a leading Energy Storage firm in US.The solution developed provides an intuitive environment for monitoring and controlling a remotely located control system (Human-Machine Interface,usually used in Energy grids) using a consumer-grade touch device.'
            }]
        },
        {   year: '2017',
            details: [
                {
                    title: 'Kuwait Petroleum: Workflow Manager',
                    technologies: ['ANGULAR'],
                    desc: 'Workflow Manager is an hierarchical task management system for work management and team collaboration',
                    monthStamp: 'March, 2017'
                },
                {   title: 'Conceirge Key Health: CKH',
                    desc: 'Conceirge Key Health(currently known as Access-Elite) is an app-based service that provides consumers access to elite, peer-vetted physician specialists across multiple specialties on-demand.',
                    technologies: ['RUBY', 'RAILS', 'STRIPE', 'ELASTIC'],
                    monthStamp: 'July, 2017'
            }]
        },
        {   year: '2018',
            details: [{
                title: 'Roostify: Curb Appeal',
                monthStamp: 'April, 2018',
                desc: 'Roostify is an app-based service that provides enhanced lending experience for everyone involved in the home buying process. The project involved a complete refresh of the app\'s look & feel.',
                technologies: ['RUBY', 'RAILS', 'POSTGRES', 'VUE', 'REACT']
            }]
        },
        {   year: '2019',
            details: [{
                title: 'Roostify: UX Lender',
                monthStamp: 'January, 2019',
                technologies: ['RUBY', 'RAILS', 'VUE', 'REACT'],
                desc: 'Roostify is an app-based service that provides enhanced lending experience for everyone involved in the home buying process. The project involved enhancement and migration of a specific role\'s look and feel to Hybrid React.js and Vue.js Components',
                },
                {title: 'Roostify: URLA 1003 revision',
                technologies: ['RUBY', 'RAILS', 'POSTGRES', 'VUE', 'REACT'],
                desc: 'Roostify is an app-based service that provides enhanced lending experience for everyone involved in the home buying process. The project involved re-work of core system and updating all the third-party integration services to latest standards of mortgage loan applications.',
                monthStamp: 'July, 2019'
            }]
        },
        {   year: '2020',
            details: [{
                title: 'Infrrd: IDP Platform UI',
                technologies: ['ANGULAR', 'D3'],
                monthStamp: 'January, 2020',
                desc: 'Infrrd helps enterprises drive process innovation by removing manual processing bottlenecks and automating data extraction from documents.'
            }]
        }
    ]
</script>

<Layout hostComponent={'projects'}>
    <Timeline timelineEntries={projectsTimeline}></Timeline>    
</Layout>
