<script>
    import {goto} from '@sapper/app';

    let title;
    let salary;
    let details;

    let handleSubmit = async () => {
        title = inputEl.value
        console.log(inputEl.value)
        const res = await fetch('jobs.json', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, salary, details})
        });
        const updatedJobs = await res.json();
        goto('jobs')
    }

    let emailLogin = false;
    let inputEl;

    let handleClick = () => {
        console.log(inputEl.type, inputEl.value);
        inputEl.type = inputEl.type === 'password' ? 'text' : 'password';

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
    .tabs{
        text-align: center;
    }
    .visibility {
        border: none;
        background: none;
        cursor: pointer;
        border-radius: 6px;
        border: #ff3e00 solid 1px;
        padding: 8px 18px;
    }
</style>


<h2>Add a new Job</h2>
<div class="tabs">
    <button class="btn" class:active={emailLogin} on:click={() => emailLogin = true}>Email only</button>
    <button class="btn" class:active={!emailLogin} on:click={() => emailLogin = false}>Email & password</button>
</div>
{#if emailLogin}
    <form on:submit|preventDefault={handleSubmit}>
        <input bind:value={title} placeholder="job title" required type="text">
        <input bind:value={salary} placeholder="salary" required type="number">
        <textarea bind:value={details} placeholder="job details" required></textarea>
        <button class="btn">Add new job</button>
    </form>
{:else}
    <form on:submit|preventDefault={handleSubmit}>
        <input bind:this={inputEl} placeholder="TITLE TEST" required type="text">
        <input bind:value={salary} placeholder="PLATA TEST" required type="number">
        <textarea bind:value={details} placeholder="TEEEEEEEEEST job details" required></textarea>
        <button type="button" class="visibility" on:click={handleClick}>Hide/Show</button>
        <button class="btn">Add new job</button>
    </form>
{/if}

