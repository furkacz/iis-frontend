<template>
  <div class="Add">
    <Button class="Add__switch" :text="modeLabel" :click="modeSwitch" />
    <div class="Add__content">
      <div class="Add__content--title">
        <h1 class="Add__content--title-text">{{ getAppTitle }}</h1>
        <h2 class="Add__content--title-subtext">{{ getAppDescription }}</h2>
      </div>
      <div class="Add__content--form">
        <AddForm/>
      </div>
      <div class="Add__content--list">
        <SegmentList :segments="getAddedSegments" />
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
