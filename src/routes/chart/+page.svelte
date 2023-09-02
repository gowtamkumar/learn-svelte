<script>
  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";
  import fetchStore from "../../store/store.js";
  import Chart from "chart.js";
  const [countryDataStore, loading, error] = fetchStore();
  export let data;

  let chart;

  let chartData = {
    labels: [...data.countryDataStore]
      .sort((a, b) => b.population - a.population)
      .slice(0, 10)
      .map((item) => item.name.common),
    datasets: [
      {
        data: [...data.countryDataStore]
          .sort((a, b) => b.population - a.population)
          .slice(0, 10)
          .map((item) => item.population),
        backgroundColor: [
          "#FF5733",
          "#FFC300",
          "#36A2EB",
          "#4BC0C0",
          "#F56991",
          "#FF5733",
          "#FFC300",
          "#36A2EB",
          "#4BC0C0",
          "#F56991",
        ],
      },
    ],
  };

  let options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  function createChart() {
    const ctx = document.getElementById("polarAreaChart").getContext("2d");
    chart = new Chart(ctx, {
      type: "polarArea",
      data: chartData,
      options: options,
    });
  }

  function updateChart() {
    chart.data = chartData;
    chart.update();
  }
  onMount(createChart);
  afterUpdate(updateChart);
</script>

<div class="container text-center">
  <h3>Chart page</h3>
  <div class="m-auto md:flex justify-center justify-items-end gap-2 p-3">
    <div>
      {#if $loading}
        Loading...
      {:else if $error}
        Error: {$error}
      {:else}
        <table class="table-auto">
          <thead>
            <tr class="border">
              <th>Flug</th>
              <th>Name</th>
              <th>Population</th>
              <th>CIOC</th>
              <th>UN Member Status</th>
              <th>Currencies</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody class="border">
            {#each $countryDataStore as item}
              <tr class="border">
                <td>{item.flag}</td>
                <td> {item.name.common}</td>
                <td>{item.population}</td>
                <td>{item.cioc}</td>

                {#if item.unMember}
                  <td>Yes</td>
                {:else}
                  <td>No</td>
                {/if}
                <td>
                  {#each Object.entries({ ...item.currencies }) as [key, name]}
                    <span>{item.currencies[key].name}</span>
                  {/each}</td
                >
                <td>
                  {Object.values({ ...item.languages })[0]}
                  <!-- {#each Object.values({ ...item.languages }) as value}
                    <span>{value},</span>
                  {/each} -->
                </td>
              </tr>
            {/each}
            <tr />
          </tbody>
        </table>
      {/if}
    </div>
    <div>
      <main class="border">
        <canvas id="polarAreaChart" width="400" height="400" />
      </main>
    </div>
  </div>
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12 equal columns */
    width: 100vw;
    height: 100vh;
    padding: 20px; /* Optional padding */
  }

  .grid-item1 {
    display: flex;
    align-items: center;
    grid-column: 1/6;
    grid-row: 1/-1;
    justify-content: center;
    border: 1px solid #ccc; /* Border for grid items */
    font-size: 24px; /* Adjust font size as needed */
    font-weight: bold; /* Optional font weight */
    min-height: 100px; /* Set a minimum height for grid items */
  }
  .grid-item2 {
    display: flex;
    align-items: center;
    grid-column: 1/6;
    grid-row: 1/-1;
    justify-content: center;
    border: 1px solid #ccc; /* Border for grid items */
    font-size: 24px; /* Adjust font size as needed */
    font-weight: bold; /* Optional font weight */
    min-height: 100px; /* Set a minimum height for grid items */
  }
</style>
