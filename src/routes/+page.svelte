<script>
  import { goto, beforeNavigate, afterNavigate } from "$app/navigation";
  const handleOrder = () => {
    goto("/products");
  };
  beforeNavigate((navigation) => {
    console.log({ before: navigation }); // before naviagate
  });
  afterNavigate((navigation) => {
    console.log({ after: navigation }); //after navigate
  });
</script>



<div class="grid-container">
  <div class="grid-item1 bg-blue-400">1</div>
  <div class="grid-item2 bg-teal-400">2</div>
  <div class="grid-item3 bg-fuchsia-400">3</div>
  <div class="grid-item4 bg-rose-100">4</div>
  <div class="grid-item5 bg-blue-400">5</div>
  <div class="grid-item6 bg-yellow-100">
    <div class="bg-black text-slate-200 p-10 ">
      <div class="rounded-full bg-lime-300 p-9">ddd</div>
    </div>
  </div>
  <div class="grid-item7 bg-emerald-400">7</div>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Apply styles for screens wider than 768 pixels */
  @media screen and (min-width: 769px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr); /* 12 equal columns */
      /* grid-template-rows: repeat(7, 1fr);  */
      width: 100vw;
      height: 100vh;
      padding: 20px; /* Optional padding */
    }

    /* Style for grid items */
    .grid-item1 {
      display: flex;
      align-items: center;
      grid-column: 1/3;
      grid-row: 1/4;
      justify-content: center;
      border: 1px solid #ccc; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }

    .grid-item2 {
      display: flex;
      align-items: center;
      grid-column: 1/3;
      grid-row: 4/6;
      justify-content: center;
      border: 1px solid #ccc; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }
    .grid-item3 {
      display: flex;
      align-items: center;
      grid-column: 1/7;
      grid-row: 6/7;
      justify-content: center;
      border: 1px solid #ccc; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }
    .grid-item4 {
      display: flex;
      align-items: center;
      grid-column: 3/7;
      grid-row: 1/6;
      justify-content: center;
      border: 1px solid #131010; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }
    .grid-item5 {
      display: flex;
      align-items: center;
      grid-column: 7/-1;
      grid-row: 1/3;
      justify-content: center;
      color: "#fff";
      border: 1px solid #ccc; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }
    .grid-item6 {
      display: flex;
      align-items: center;
      grid-column: 7/11;
      grid-row: 3/7;
      justify-content: center;
      /* background-color: #ffffff; Background color of grid items */
      border: 1px solid #ccc; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }
    .grid-item7 {
      display: flex;
      align-items: center;
      grid-column: 11/-1;
      grid-row: 3/7;
      justify-content: center;
      /* background-color: #ffffff; Background color of grid items */
      border: 1px solid #ccc; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }
    .grid-item {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff; /* Background color of grid items */
      border: 1px solid #ccc; /* Border for grid items */
      font-size: 24px; /* Adjust font size as needed */
      font-weight: bold; /* Optional font weight */
      min-height: 100px; /* Set a minimum height for grid items */
    }
  }
</style>
