export default {
  name: 'CollapsibleText',
  props: {
    text: String,
    size: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      hidden: true,
    };
  },
  computed: {
    sectionSize() {
      return this.size;
    },
    longEnough() {
      return this.text.length > this.sectionSize;
    },
    firstSection() {
      return this.text.slice(0, this.sectionSize + 1);
    },
    secondSection() {
      return this.text.slice(this.sectionSize + 1);
    },
  },
  methods: {
    toggleHidden() {
      this.hidden = !this.hidden;
    },
  },
};
