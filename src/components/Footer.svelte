<script lang="ts">
  export let name: string;
  export let url: string;
</script>

<footer>
   &copy; {new Date().getFullYear()} <a href="https://blkcatstudio.com">Black Cat Studio</a> | <a href="{ url }">{ name }</a>
</footer>

<style>
  footer{
    margin:2rem auto;
    width:100%;
    text-align: center;
  }
</style>