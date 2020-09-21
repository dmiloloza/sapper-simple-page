<style>
    h1, p {
        text-align: center;
        margin: 0 auto;
    }

    h1 {
        font-size: 2em;
        text-transform: uppercase;
        font-weight: 700;
        margin: 0 0 0.5em 0;
    }

    img {
        width: 200px;
        margin: 0 auto;
        display: block;

    }

    a {
        margin-top: 40px;
    }

    div{
        margin-top: 2em;
        text-align: center;
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
</style>

<svelte:head>
    <title>Home page</title>
</svelte:head>

<div>
    <img src="shield-letter-s-logo_8586-82.jpg" alt="image logo">
    <h1>Simple page</h1>
    <p>Find your next assignment right here.</p>
    <a class="btn" href="jobs">View jobs</a>
</div>

