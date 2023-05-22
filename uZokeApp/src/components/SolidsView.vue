<template>
  <div class="m-2 container">


    <div class="row m-2">
      <p class="col text-start"> Add food <small><em>optional</em></small></p>
      <div class="input-group m-2">
        <input type="text" class="form-control m-2" id="formGroupExampleInput"
               placeholder="Enter foods or add from below" v-model="searchQuery" list="names-list">
        <datalist id="names-lists">
          <option v-for="name in suggestions" :value="name">{{ name }}</option>
        </datalist>
        <button class="btn btn-outline-secondary" type="button" @click="addPopularFood">
          {{ showInput ? 'Add' : 'Add  food' }}
        </button>


      </div>
      <p>Food :</p>
      <div class="row " v-for="food in foodsEaten">

        <ul>
          <li>{{ food }}</li>
        </ul>
      </div>
    </div>
    <div class=" row m-2">

    </div>
    <div class="row m-2">
      <p class="col text-start"> Custom foods : </p>
      <div>
        <div class="row">
          <button @click="showInput = !showInput" class="col-1">Add</button>
          <form v-if="showInput" @submit.prevent="addCustomFood" class="col-11">
            <input v-model="newFoodName" type="text" placeholder="Enter food name">
            <button type="submit">+</button>
          </form>
        </div>

      </div>

    </div>
    <div>
      <div>
        <p class="m-2">Most popular foods</p>

        <div>
          <ul class="list">
            <li v-for="(item,index) in names" :value="index">{{ item }}
              <button type="submit" @click="addSelectedAliment(index)" class="btn btn-outline-secondary"> +</button>
            </li>

          </ul>
        </div>


      </div>
    </div>
    <div class="m-2">
      <div class="row">
        <button v-on:click="showForm()" class="col-2">Not seeing a food?</button>


        <div class="col-9">
          <input class="form-control" id="exampleDataList" placeholder="search foods..." v-model="searchQuery"
                 list="names-list">
          <datalist id="names-list">
            <option v-for="(name, index) in suggestions" :key="index" :value="name">{{ name }}</option>
          </datalist>
        </div>
        <div class="col-1">
          <div class="col-1">
            <button type="submit" v-on:click="addSelectedAliment(index)" class="btn btn-outline-secondary"> +</button>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>


import {ref, watch} from "vue";

const names = ['avocado', 'banana', 'apple', 'rice cereal', 'sweet potato', 'oatmeal', 'spinach', 'chicken', 'peas', 'pear', 'yogurt', 'carrot', 'broccolli', 'prune', 'green beans', 'mango', 'egg', 'strawberry', 'pasta', 'blueberry'];

const showInput = ref(false);
const searchQuery = ref('');
const suggestions = ref([]);
const foodsEaten = ref([]);
const newFoodName = ref('');
const showFoodForm = ref(false);

const suggest = () => {
  suggestions.value = names.filter((name) =>
      name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
};

const addSelectedAliment = (index) => {
  if (index !== undefined) {
    let itemsCopy = JSON.parse(JSON.stringify(names));
    for (let i = 0; i < itemsCopy.length; i++) {
      if (index === i) {
        return foodsEaten.value.push(names[index]);
      }
    }
  } else {
    foodsEaten.value.push(searchQuery.value);
  }
};

const addCustomFood = () => {
  if (newFoodName.value.trim() !== '') {
    foodsEaten.value.push(newFoodName.value);
    newFoodName.value = '';
    showInput.value = false;
  }
};

const addPopularFood = (name) => {
  if (names.includes(searchQuery.value)) {
    foodsEaten.value.push(searchQuery.value);
  }
};

const showForm = () => {
  showFoodForm.value = true;
};

watch(searchQuery, suggest);


</script>

<style scoped>

div span {
  padding: 5px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.list li {
  flex-basis: 25%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
}

.container {
  margin: 25px;
}
</style>