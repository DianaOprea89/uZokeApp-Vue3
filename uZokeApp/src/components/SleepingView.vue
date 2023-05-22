<template>

  <div class="row m-5">
    <p class="col text-start"> Start Time : </p>
    <p class="col text-end" @click="startTimer" v-if="timerStarted"> {{currentTime}}</p>
  </div>
  <div class="row m-5">
    <p class="col text-start"> End Time : </p>
    <p class="col text-end" @click="stopTimer"  v-if="!timerStarted">{{currentTimer}}</p>
  </div>
  <div>
    <div class="row text-center m-5">
      <div class="p-3">
        <span >{{ minutes }}:</span><span>{{ seconds < 10 ? '0' + seconds : seconds }}</span>
      </div>
      <div>

        <button @click="startTimer" id="button" v-if="!this.isHidden">Start</button>
        <button @click="stopTimer">Stop</button>
      </div>


    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';


    const time = ref(0);
    let timerInterval = null;
    const startTime = ref('');
    const endTime = ref('');
    const timerStarted = ref(false);
    const isHidden = ref(false);

    const minutes = computed(() => {
      return Math.floor(time.value / 60);
    });

    const seconds = computed(() => {
      return time.value % 60;
    });

    const currentTime = computed(() => {
      if (timerStarted.value) {
        return startTime.value.toLocaleTimeString();
      } else {
        return '';
      }
    });

    const currentTimer = computed(() => {
      if (endTime.value) {
        return endTime.value.toLocaleTimeString();
      } else {
        return '';
      }
    });

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

    onMounted(() => {
      timerInterval = setInterval(() => {
        if (timerStarted.value) {
          time.value++;
        }
      }, 1000);
    });




</script>

<style scoped>

</style>