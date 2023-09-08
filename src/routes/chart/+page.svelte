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

<div class="container m-auto md:flex justify-center gap-2 p-3">
  <div>
    {#if $loading}
      Loading...
    {:else if $error}
      Error: {$error}
    {:else}
      <table class="table-auto rounded">
        <thead>
          <tr class="border">
            <th class="border">Flug</th>
            <th class="border">Name</th>
            <th class="border">Population</th>
            <th class="border">CIOC</th>
            <th class="border">UN Member Status</th>
            <th class="border">Currencies</th>
            <th class="border">Language</th>
          </tr>
        </thead>
        <tbody class="border text-center">
          {#each $countryDataStore as item}
            <tr class="border">
              <td class="border">{item.flag}</td>
              <td class="border"> {item.name.common}</td>
              <td class="border"> {item.population}</td>
              <td class="border">{item.cioc}</td>

              {#if item.unMember}
                <td class="border">Yes</td>
              {:else}
                <td class="border">No</td>
              {/if}
              <td class="border">
                {#each Object.entries({ ...item.currencies }) as [key, name]}
                  <span>{item.currencies[key].name}</span>
                {/each}</td
              >
              <td class="border">
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
  <div class="mt-2 md:mt-0">
    <main class="border justify-center">
      <div class="border-b">
        <h3 class="ml-2">Countires</h3>
      </div>
      <canvas id="polarAreaChart" height="400" width="400" />
    </main>
  </div>
</div>
