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
  <div
    class="grid-item1 grid-item bg-blue-400 justify-center items-center flex font-bold text-[24px]"
  >
    1
  </div>
  <div
    class="grid-item2 grid-item bg-teal-400 justify-center items-center flex font-bold text-[24px]"
  >
    2
  </div>
  <div
    class="grid-item3 grid-item bg-fuchsia-400 justify-center items-center flex font-bold text-[24px]"
  >
    3
  </div>
  <div
    class="grid-item4 grid-item bg-rose-100 justify-center items-center flex font-bold text-[24px]"
  >
    4
  </div>
  <div
    class="grid-item5 grid-item bg-blue-400 justify-center items-center flex font-bold text-[24px]"
  >
    5
  </div>
  <div
    class="grid-item6 grid-item bg-yellow-100 justify-center items-center flex font-bold text-[24px]"
  >
    <div
      class="bg-[#293462] text-slate-200 w-[300px] h-[300px] justify-center items-center flex font-bold text-[24px]"
    >
      <div
        class="rounded-full w-[200px] h-[200px] bg-lime-300 p-9 justify-center items-center flex font-bold text-[24px]"
      >
        <div class="z-0 ...">inner</div>
      </div>
    </div>
  </div>
  <div
    class="grid-item7 grid-item bg-emerald-400 justify-center items-center flex font-bold text-[24px]"
  >
    7
  </div>
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .grid-item {
    min-height: 350px;
  }

  /* Apply styles for screens wider than 768 pixels */
  @media screen and (min-width: 769px) {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      width: 100vw;
      height: 100vh;
      padding: 20px;
    }

    /* Style for grid items */
    .grid-item1 {
      grid-column: 1/3;
      grid-row: 1/4;
      min-height: 100px;
    }

    .grid-item2 {
      min-height: 100px;
      grid-column: 1/3;
      grid-row: 4/6;
    }
    .grid-item3 {
      grid-column: 1/7;
      grid-row: 6/7;
      min-height: 100px;
    }
    .grid-item4 {
      grid-column: 3/7;
      grid-row: 1/6;
      min-height: 100px;
    }
    .grid-item5 {
      grid-column: 7/-1;
      grid-row: 1/3;
      min-height: 100px;
    }
    .grid-item6 {
      grid-column: 7/11;
      grid-row: 3/7;
      min-height: 100px;
    }
    .grid-item7 {
      grid-column: 11/-1;
      grid-row: 3/7;
      min-height: 100px;
    }
  }
</style>
