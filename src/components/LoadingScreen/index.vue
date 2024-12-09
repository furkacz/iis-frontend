<template>
  <div class="LoadingScreen">
    <Spinner />
    <span class="LoadingScreen__message" v-if="getLoadingMessage">{{ getLoadingMessage }}</span>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
