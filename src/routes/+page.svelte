<script>
  import { goto, beforeNavigate, afterNavigate } from "$app/navigation";
  const handleOrder = () => {
    console.log("new Order");
    goto("/products");
  };
  beforeNavigate((navigation) => {
    console.log({ before: navigation }); // before naviagate
  });
  afterNavigate((navigation) => {
    console.log({ after: navigation }); //after navigate
  });
</script>

<h1>Welcome to Learning SvelteKit</h1>
<!-- route navigation -->
<a href="/about">About</a>
<a href="/blog">Blog</a>
<a href="/products">Products</a>
<button on:click={handleOrder}>Order Place</button>
