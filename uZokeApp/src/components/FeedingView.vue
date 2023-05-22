<template>
  <div id="app2">
    <div class="m-5">
    </div>
    <div class="row m-5  ">
      <p class="col text-center border border-dark"> Nursing </p>

    </div>
    <div class="row m-5">
      <p class="col text-start"> Start Time : </p>
      <p class="col text-end" @click="startTimer" v-if="timerStarted"> {{currentTime}}</p>
    </div>
    <div class="row m-5">
      <p class="col text-start"> End Time : </p>
      <p class="col text-end" @click="stopTimer" v-if="!timerStarted"> {{currentTimer}} </p>
    </div>

    <div>
      <div class="row text-center m-5">
        <div>
          <div class="col">
            <span>{{ minutes }}:</span><span>{{ seconds < 10 ? '0' + seconds : seconds }}</span></div>
          <div class="col text-center">
            <button @click="startTimer" class="btn btn-light m-2"> Left</button>
            <button @click="startTimer" class="btn btn-light m-2"> Right</button>
          </div>
          <div class="col">
            <button @click="stopTimer" class="btn btn-light m-3"> Stop</button>

          </div>

        </div>


      </div>

    </div>
    <div class="row m-5  ">
      <p class="col text-center border border-dark"> Bottle </p>
    </div>
    <div class="row m-5">
      <p class="col text-center">Type: </p>
      <ul>
        <li v-for="item in foodsEaten">{{item}}</li>
      </ul>

      <button @click="addFood" class="col-1 btn btn-outline-dark"> Add</button>
    </div>
    <div class="row m-5">
      <p class="col">Milk type : {{typeMilk}}</p>
      <p class="col">Amount: {{amount}} ml</p>
    </div>

    <div class="row ">
      <p class="col-1 text-start"> Type : </p>
      <div class="col-4">
        <select class="form-select " aria-label="Default select example" v-model="typeMilk">
          <option selected>Breast Milk</option>
          <option>Formula</option>
          <option>Cow Milk</option>
          <option>Goat Milk</option>
          <option>Soy Milk</option>
          <option>Other</option>
        </select>
      </div>
      <div class="col-5">
        Amount: <input type="number" id="myNumberInput" name="myNumberInput" v-model="amount"> ml
      </div>
    </div>
    <div class="row mx-5">
      <div class="row">
        <span class="font-weight-bold mr-2  text-start col">0</span>
        <span class="font-weight-bold indigo-text ml-2 text-end col">350</span>
      </div>
      <div>
        <form action="" class="range-field w-100 row">
          <input id="text1" name="text1" type="range" class="custom-range" min="0" max="350"
                 style="width: 100%" v-model.lazy="amount">
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed, watch } from 'vue';
const time = ref(0);
const timerInterval = ref(null);
const setTime = ref(null);
const buttonClickTime = ref(null);
const timestored = ref('');
const startTime = ref(null);
const timerStarted = ref(false);
const stopTime = ref(null);
const amount = ref('');
const typeMilk = ref('');
const isHidden = ref(false);
const endTime = ref(null);
const foodsEaten = ref([]);
const minutes = computed(() => Math.floor(time.value / 60));
const seconds = computed(() => time.value % 60);
const currentTime = computed(() => {
  if (timerStarted.value) {
    return startTime.value ? startTime.value.toLocaleTimeString() : '';
  } else {
    return '';
  }
});
const currentTimer = computed(() => {
  if (endTime.value) {
    return endTime.value ? endTime.value.toLocaleTimeString() : '';
  } else {
    return '';
  }
});

// Methods
const startTimer = () => {
  startTime.value = new Date();
  timerStarted.value = true;
  isHidden.value = true;
};

const stopTimer = () => {
  endTime.value = new Date();
  timerStarted.value = false;
  isHidden.value = false;
};

const addFood = () => {
  if (!typeMilk.value || !amount.value) {
    return;
  }

  const existingFoodItem = foodsEaten.value.find(item =>
      item.startsWith(`${typeMilk.value} `)
  );

  if (existingFoodItem) {
    // Update the existing food item
    const existingAmount = existingFoodItem.split(' ')[1];
    const newAmount = parseInt(existingAmount) + parseInt(amount.value);
    const newFoodItem = `${typeMilk.value} ${newAmount} ml`;
    const existingItemIndex = foodsEaten.value.indexOf(existingFoodItem);
    foodsEaten.value.splice(existingItemIndex, 1, newFoodItem);
  } else {
    // Add a new food item
    const newFoodItem = `${typeMilk.value} ${amount.value} ml`;
    foodsEaten.value.push(newFoodItem);
  }

  typeMilk.value = '';
  amount.value = '';
};

// Watch for changes in time and start/stop the interval accordingly
watch(timerStarted, (newValue) => {
  if (newValue) {
    timerInterval.value = setInterval(() => {
      time.value++;
    }, 1000);
  } else {
    clearInterval(timerInterval.value);
  }
});
</script>

<style scoped>

</style>