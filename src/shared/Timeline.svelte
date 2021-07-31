<script>
    import DetailsCard from './DetailsCard.svelte'
    export let timelineEntries = []
    export let showMonthStamp = false

    let DetailsCardHandler;
    let currentProjectDetails = timelineEntries[0]
    
    function handleProjectCardOpen(projectDetails) {
        currentProjectDetails = projectDetails
        DetailsCardHandler.open()
    }
</script>

<div class="timeline-container">
    <div class='timeline'>
        {#each timelineEntries as timelineEntry}
            <h1 class="is-size-3 pl-4 pt-6">{timelineEntry.year}</h1>
            {#each timelineEntry.details as detail}
                <div class="detail-item">
                    <div on:click={handleProjectCardOpen(detail)} class="box">
                        <p class="description has-text-weight-semibold">
                            {detail.title}
                        </p>
                        {#if showMonthStamp}
                            <p class="description-month has-text-weight-semibold">
                                {detail.monthStamp}
                            </p>
                        {/if}
                    </div>
                    <div class="timeline-link"></div>
                </div>
            {/each}
        {/each}
    </div>
</div>

<DetailsCard bind:this={DetailsCardHandler} cardDetails={currentProjectDetails}/>

<style type='text/scss'>

    .timeline-container {
        overflow-y: auto;
        height: 90vh;
        scrollbar-color: $grey-light $grey-darker;

        &::-webkit-scrollbar {
            background-color: $grey-light;
        }

        &::-webkit-scrollbar-thumb {
            background-color: $grey-light;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-track {
            background-color: $grey-darker;
        }
    }

    .timeline {
        border-left: 2px solid $grey;
        color: white;
        margin-left: 1rem;
        margin-right: 1rem;
        
        @include from($mobile) {
            margin-left: 4rem;
            margin-right: 6rem;
        }

        @include desktop-only {
            margin-left: 5rem;
            margin-right: 10rem;
        }
        
        @include from($widescreen) {
            margin-left: 10rem;
            margin-right: 15rem;
        }

        .detail-item {
            position: relative;
            &:last-child {
                padding-bottom: 10rem;
            }
        }
        
        .timeline-link {
            &::before {
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                position: relative;
                left: -4px;
                top: -15px;
                border-radius: 50%;
                background: white;
            }
            border-top: 2px dotted grey;
            position: absolute;
            min-width: 2.5rem;
            top: 1.3rem;
        }

        .box {
            position: relative;
            display: flex;
            justify-content: space-between;
            background-color: $grey-darker;
            margin-left: 3rem;
            margin-bottom: 1rem;
            color: $grey-lighter;
            padding: 0.6rem 1.25rem;
            z-index: 1;


            &:hover {
                background: $grey-light;
                color: $grey-dark;
                cursor: pointer;
            }   
        }
    }
</style>