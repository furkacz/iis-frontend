<template>
  <div class="SegmentCard">
    <CollapsibleText class="SegmentCard__segment hover" :text="segment" :size="256" />
    <div class="SegmentCard__source">
      <span class="SegmentCard__source--score">{{ score.toFixed(3) }}</span>
      <a class="SegmentCard__source--link hover" :href="source" target="_blank">{{ source }}</a>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
