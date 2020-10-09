<svelte:head>
    <title>About</title>
</svelte:head>

<script>
    let inputEl;

    let handleClick = () => {
        console.log(inputEl.type);
        inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    }
</script>

<h1>About this site</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta nulla porro sit tempore? Adipisci amet at aut
    corporis culpa eaque fugit inventore molestias optio tenetur! Accusamus aliquid dolorem tempora.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta nulla porro sit tempore? Adipisci amet at aut
    corporis culpa eaque fugit inventore molestias optio tenetur! Accusamus aliquid dolorem tempora.</p>


<label>
    <input bind:this={inputEl} type="password">
</label>
<button on:click={handleClick}>Toggle</button>

<input type="text" placeholder="cool">
