import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import SegmentList from '@/components/SegmentList';

export default {
  name: 'Search',
  components: {
    Button,
    SearchBar,
    SegmentList,
  },
  computed: {
    ...mapGetters(['getAppTitle', 'getAppDescription', 'getSegments']),
    modeLabel() {
      return 'Dodawanie';
    },
  },
  methods: {
    ...mapActions(['clearSearchData']),
    modeSwitch() {
      this.clearSearchData();
      this.$router.push({ name: 'Add' });
    },
  },
};
