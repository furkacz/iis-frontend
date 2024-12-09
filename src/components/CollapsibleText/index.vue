<template>
  <span :class="{ CollapsibleText: longEnough }" @click="toggleHidden">
    <span>{{ firstSection }}</span>
    <span v-if="longEnough" v-show="hidden">...</span>
    <span v-if="longEnough" v-show="!hidden">{{ secondSection }}</span>
  </span>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
