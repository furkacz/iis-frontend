import { mapGetters, mapActions } from 'vuex';
import AddForm from '@/components/AddForm';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import SegmentList from '@/components/SegmentList';

export default {
  name: 'Add',
  components: {
    AddForm,
    Button,
    SearchBar,
    SegmentList,
  },
  computed: {
    ...mapGetters(['getAppTitle', 'getAppDescription',
      'getSource', 'getSourceText', 'getAddedSegments']),
    modeLabel() {
      return 'Wyszukiwanie';
    },
  },
  methods: {
    ...mapActions(['clearAddData']),
    modeSwitch() {
      this.clearAddData();
      this.$router.push({ name: 'Search' });
    },
  },
};
