import { mapGetters } from 'vuex';

import Spinner from '@/components/Spinner';

export default {
  name: 'LoadingScreen',
  components: {
    Spinner,
  },
  computed: {
    ...mapGetters(['getLoadingMessage']),
  },
};
