<template>
  <div class="SegmentList" v-if="shouldDisplay">
    <SegmentCard class="SegmentList__card" v-for="segment in segmentsList"
      :segment="segment.data" :score="segment.score ?? -1" :source="segment.url ?? ''" :key="segment.id" />
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
