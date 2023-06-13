<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div>
    <h1>Welcome To Industry DB</h1>
    <span>Providing options for hire in a pinch</span>
    <span>Select the option which best suits you:</span>
    <a href="">
      <div>You Represent an Organization and are Looking to Hire Industry Workers</div>
    </a>
    <a href="">
      <div>You are a Workers Looking to Get Hired in the Industry</div>
    </a>
  </div>
</template>