<!-- all catch route exam: docs/feature1/somethis22/example -->
<script>
  import { page } from "$app/stores";
  const slugArr = $page.params.slug.split("/");
</script>

{#if slugArr.length === 1}
  <h3>this is the first route {slugArr[0]}</h3>
{:else if slugArr.length === 2}
  <h4>this is {slugArr[0]} inner route exam {slugArr[1]}</h4>
{/if}
