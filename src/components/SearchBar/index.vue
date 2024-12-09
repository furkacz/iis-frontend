<template>
  <div class="SearchBar" :class="{ focused: focused }">
    <form class="SearchBar__input" @submit.prevent="() => {if (allowSearch) clickSearch()}">
      <input class="SearchBar__input--box" :value="getQuery" @input="event => setQuery(event.target.value)"
        @focus="onFocus" @blur="onLeaveFocus">
    </form>
    <div class="SearchBar__reset">
      <img class="SearchBar__reset-image hover" :src="resetIcon" @click="clickReset" />
    </div>
    <div class="SearchBar__search">
      <button class="SearchBar__search-button hover" :disabled="!allowSearch" @click="clickSearch">
        <img class="SearchBar__search-button-image" :src="searchIcon" />
      </button>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
