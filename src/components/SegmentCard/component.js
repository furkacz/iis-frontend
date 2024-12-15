import CollapsibleText from '@/components/CollapsibleText';

export default {
  name: 'SegmentCard',
  components: {
    CollapsibleText,
  },
  props: {
    source: String,
    score: Number,
    segment: String,
  },
};
