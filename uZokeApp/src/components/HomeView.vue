<script setup>
import { defineProps } from "vue"
import { useRouter } from "vue-router"
import data from "../data.json"

const router = useRouter()
const props = defineProps(['activity'])
const activity = data.find(item => item.name === props.activity)
</script>

<template>
  <div class="header bg-secondary">
    <header>
      <h1 class="text-light">SleepTightBy</h1>
    </header>
  </div>

  <div class="plans row">
    <div v-for="currentPlan in data" :key="currentPlan.name" class="plan col-4">
      <div class="description">
        <div class="bg-primary-light" @click="$router.push(`/${currentPlan.url}`)">
          <p class="title display-2 p-3">
            <img :src="currentPlan.image.src" :alt="currentPlan.image.alt">
          </p>
          <p>{{ currentPlan.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



