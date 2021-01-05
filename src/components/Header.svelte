<script lang="ts">
  export let name:string;
</script>
<header>
  <div>
    <h1>{name}</h1>
    <h1>styleguide</h1>
  </div>
  <h3>by <a href="https://blkcatstudio.com">Black Cat Studio</a></h3>
</header>

<style> 
  header{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:2rem auto;
    padding:0 2rem;
  }
  h1{
    display: inline;
    margin:.25rem;
    line-height: 1.2;
  }
  @media screen and (min-width:960px){
    header{
      flex-direction:row;
      justify-content: space-between;
    }
    h1 {
      display:block;
    }
  }
</style>