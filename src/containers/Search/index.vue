<template>
  <div class="Search">
    <Button class="Search__switch" :text="modeLabel" :click="modeSwitch" />
    <div class="Search__content">
      <div class="Search__content--title">
        <h1 class="Search__content--title-text">{{ getAppTitle }}</h1>
        <h2 class="Search__content--title-subtext">{{ getAppDescription }}</h2>
      </div>
      <div class="Search__content--search-bar">
        <SearchBar />
      </div>
      <div class="Search__content--list">
        <SegmentList :segments="getSegments" />
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
