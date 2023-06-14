<script setup>
  import { defineProps } from 'vue'
  import Card from 'primevue/card';
  import Button from 'primevue/button';

  const props = defineProps(['title', 'content', 'btn1', 'btn1-url', 'btn2', 'btn2-url'])
  console.log("Card Props", props);
</script>

<template>
  <Card>
    <template #title> {{ props.title }} </template>
    <template #content>
      <p>
        {{ props.content }}
      </p>
    </template>
    <template #footer>
      <router-link :to="props.btn1Url">
        <Button icon="pi pi-arrow-right" iconPos="right" :label="props.btn1" />
      </router-link>
      <!-- <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" /> -->
    </template>
  </Card>
</template>