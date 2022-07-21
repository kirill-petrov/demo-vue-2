<template>
  <div class="cars-view">
    <pre class="cars-data">{{
      JSON.stringify($store.state.cars.cars, null, 2)
    }}</pre>
    <form @submit.prevent="addCar" class="add-car">
      <input type="text" name="model" placeholder="model" autofocus />
      <input type="text" name="color" placeholder="color" />
      <button>add car</button>
    </form>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "CarsView",
  methods: {
    addCar(e) {
      const payload = {
        model: e.target.model.value,
        color: e.target.color.value,
      };
      store.commit("cars/addCar", payload);
    },
  },
};
</script>

<style lang="scss">
.cars-view {
  display: flex;
  justify-content: center;

  .cars-data {
    text-align: left;
  }

  .add-car {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button {
      width: 100px;
    }
  }
}
</style>
