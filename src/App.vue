<script setup>
import { RouterLink, RouterView } from 'vue-router'

let widget =  FedaPay.init({
  public_key: 'pk_sandbox_4LYKqW0RSMGWORj5cRQtiQWt',
  onComplete: (response) => {
    console.log(reason)
  }
});

function pay(){
  widget.open();
}

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
