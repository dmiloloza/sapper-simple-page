<script context="module">
    export async function preload(page, session) {
        const res = await this.fetch('/jobs.json')
        const jobs = await res.json();

        return {jobs};
    }
</script>

<script>
    export let jobs;
    console.log(jobs)
</script>

<style>
    div {
        text-align: center;
    }

    ul {
        padding: 0;
        max-width: 20em;
    }

    li {
        list-style-type: none;
    }

    li a {
        width: 100%;
        display: block;
        padding: 1em;
        border: 1px solid #f2f2f2;
        border-radius: 6px;
        margin: 1em auto;
        text-decoration: none;
    }

    li a:hover {
        background: #f6f6f6;
    }
</style>

<h2>All Current Jobs</h2>
<ul>
    {#each jobs as job}
        <li>
            <a  rel="prefetch" href={`jobs/${job.id}`}>{job.title}</a>
        </li>
    {/each}
</ul>
<div>
    <a class='btn' href="jobs/create">Create a New Job</a>
</div>
