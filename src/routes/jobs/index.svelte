<script context="module">
    export async function preload() {
        const result = await this.fetch('/data.json');
        const todos= await result.json();

        return { todos }
    }
</script>

<script>
    export let todos;
    console.log(todos);
</script>

<style>

</style>

<h2>All Current Jobs</h2>
