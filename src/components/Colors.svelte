<script lang="ts">
  import CopyToClipboard from "svelte-copy-to-clipboard";
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'
  export let color:any;

  const handleSuccessfullyCopied = () => {
      // alert('successfully copied to clipboard!');
      notifier.success('Copied to Clipboard!')
  }

  const handleFailedCopy = () => {
      alert('failed to copy :(');
  }


let themes = { // These are the defaults
  danger: '#f09292',
  success: '#9af092',
  default: '#aaaaaa' // relates to simply '.show()'
}
</script>

<section class="rowRev">
  <NotificationDisplay {themes}/>
  <h1 class="sectionTitle">colors</h1>
  <div class="colorGrid">
    {#each color.colors as {id, hex, hsla}}
      <div class="gridItem">
        <div class="rnd" style="background-color:{hex};">
          <h2 class="id">{id}</h2>
        </div>
        <CopyToClipboard text={hex} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
          <p on:click={copy} class="copy">{hex}</p>
        </CopyToClipboard>
        <CopyToClipboard text={hsla} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
          <p on:click={copy} class="copy">{hsla}</p>
        </CopyToClipboard>
      </div>
    {/each}
  </div>
  <p class="desc">{color.text}</p>
</section>

<style>
.copy:hover {
  cursor: pointer;
}
h1 {
  text-align: start;
}
.colorGrid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.gridItem{
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
}
.rnd{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
.id{
  font-size: 4rem;
  color: #fff;
  
}
.gridItem > p {
  font-size: 1.5rem;
}

</style>