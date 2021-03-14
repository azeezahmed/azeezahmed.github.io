<script>
    import Layout from './shared/Layout.svelte'
    import ModalCard from './shared/ModalCard.svelte'
    import Timeline from './shared/Timeline.svelte'

    let projectsTimeline = [
        {year: '2015', details: [
                        {title: 'Advancion Energy Storage (Fluence): AES HMI', monthStamp: 'Sept'}
                        ]
        },
        {year: '2017', details: [
                        {title: 'HASHECM (Kuwait Petroleum): Task Workflow', monthStamp: 'Mar'},
                        {title: 'Conceirge Key Health (AccessElite): CKH', monthStamp: 'Jul'}
                        ]
        },
        {year: '2018', details: [
                        {title: 'Roostify: Curb Appeal', monthStamp: 'Apr'},
                        ]
        },
        {year: '2019', details: [
                        {title: 'Roostify: UX Lender', monthStamp: 'Jan'},
                        {title: 'Roostify: URLA 1003 revision', monthStamp: 'Jul'},
                        ]
        },
        {year: '2020', details: [
                        {title: 'Infrrd: IDP Platform', monthStamp: 'Jan'}
                        ]
        }
    ]
</script>

<Layout hostComponent={'projects'}>
    <Timeline timelineEntries={projectsTimeline}></Timeline>
</Layout>
