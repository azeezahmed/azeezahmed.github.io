<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    export let triggerId = 'id'

    onMount(async() => {
        
        let triggerElemRef = document.getElementById(triggerId)
        let contextModalRef = document.getElementById('modal-' + triggerId)

        if(triggerElemRef) {
            
            triggerElemRef.addEventListener('click', () => {
                contextModalRef.classList.add('is-active')
            })
        }
    })
</script>


<div in:fade="{{delay: 200, duration: 500}}" id='modal-{triggerId}' class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
            <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
        </footer>
    </div>
</div>