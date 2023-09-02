import { writable } from "svelte/store";

export default function () {
  let url = "https://restcountries.com/v3.1/all";

  const loading = writable(false);
  const error = writable(false);
  const countryDataStore = writable([]);

  async function get() {
    loading.set(true);
    error.set(false);
    try {
      const response = await fetch(url);
      countryDataStore.set(await response.json());
    } catch (e) {
      error.set(e);
    }
    loading.set(false);
  }

  get();

  return [countryDataStore, loading, error, get];
}
