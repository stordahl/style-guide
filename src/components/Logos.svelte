<script lang="ts">
  export let logo:any;

  {}
</script>

<section class="row">
  <h1 class="sectionTitle">logos</h1>
  <h3>Primary Logo</h3>
  <div id="primary">
    <img src="./images/logos/{logo.primary.image}" alt="{logo.primary.name}">
    <h4>{logo.primary.name}</h4>
    <a href="./images/logos/{logo.primary.image}" class="dl" download>Download</a>
  </div>
  <h3>Logo Variations</h3>
  <div id="logo-grid">
    {#each logo.variations as {id, name, image}}
      <div class="grid-item">
        <img src="./images/logos/{image}" alt="{name}">
        <h4>{name}</h4>
        <a href="./images/logos/{image}" class="dl" download>Download</a>
      </div>
    {/each}
  </div>
  <p class="desc">{logo.text}</p>
</section>

<style>
  .sectionTitle {
    text-align: start;
  }

  img {
    max-width: 300px;
  }

  #primary {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  #logo-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
    grid-auto-rows: auto auto 500px;
    margin: auto;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .dl {
    background: gray;
    border-radius: 5px;
    width: 100px;
    height: 30px;
    color:white;
    text-decoration: none;
  }

  .dl:hover {
    text-decoration: underline;
  }
</style>