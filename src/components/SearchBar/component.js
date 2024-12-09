import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    ...mapGetters(['getQuery']),
    resetIcon() {
      return require('@/assets/reset.svg');
    },
    searchIcon() {
      return require('@/assets/search.svg');
    },
    allowSearch() {
      return this.getQuery.length;
    },
  },
  methods: {
    ...mapActions(['setQuery', 'setSegments', 'fetchSegments', 'clearSearchData',
      'setLoadingMessage', 'setIsLoading', 'clearLoadingMessage']),
    clickReset() {
      this.clearSearchData();
    },
    async clickSearch() {
      this.setLoadingMessage('Szukanie odpowiednich fragmentów...');
      this.setIsLoading(true);
      try {
        await this.fetchSegments(this.getQuery);
      } catch (error) {
        console.error(error);
      }
      this.setIsLoading(false);
      this.clearLoadingMessage();
    },
    onFocus() {
      this.focused = true;
    },
    onLeaveFocus() {
      this.focused = false;
    },
  },
};
