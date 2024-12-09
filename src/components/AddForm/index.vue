<template>
  <form class="AddForm" @submit.prevent="() => {if (allowSubmit) sendForm()}">
    <div class="AddForm__row">
      <textarea class="AddForm__row--textarea" placeholder="Tekst:"
        :value="getSourceText" @input="sourceTextInput"/>
    </div>
    <div class="AddForm__row">
      <input class="AddForm__row--input" placeholder="Żródło:"
        :value="getSource" @input="sourceInput">
      <button class="AddForm__row--button hover" type="reset" @click="resetForm" >
        <img class="AddForm__row--button-img" :src="xIcon" />
      </button>
      <button class="AddForm__row--button hover" type="submit" :disabled="!allowSubmit" >
        <img class="AddForm__row--button-img rotated" :src="xIcon" />
      </button>
    </div>
  </form>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
