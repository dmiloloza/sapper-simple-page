<script>
    import {goto} from '@sapper/app';

    let title;
    let salary;
    let details;

    let handleSubmit = async () => {
        const res = await fetch('jobs.json', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, salary, details})
        })
        const updatedJobs = await res.json();
        goto('jobs')
    }
</script>

<style>
    h2 {
        text-align: center;
    }

    form {
        max-width: 360px;
        text-align: center;
        margin: 2em auto;
    }

    input, textarea {
        display: block;
        width: 100%;
        padding: 1em;
        font-family: Arial;
        margin: 1em auto;
        border: 1px solid #ddd;
        border-radius: 6px;
    }
</style>


<h2>Add a new Job</h2>
<form on:submit|preventDefault={handleSubmit}>
    <input bind:value={title} placeholder="job title" required type="text">
    <input bind:value={salary} placeholder="salary" required type="number">
    <textarea bind:value={details} placeholder="job details" required></textarea>
    <button class="btn">Add new job</button>
</form>
