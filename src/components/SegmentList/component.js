import SegmentCard from '@/components/SegmentCard';

export default {
  name: 'SegmentList',
  components: {
    SegmentCard,
  },
  props: {
    segments: Array,
  },
  computed: {
    segmentsList() {
      return this.segments ?? [];
    },
    shouldDisplay() {
      return this.segments ? this.segments.length : false;
    },
  },
};
