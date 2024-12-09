import { mapGetters } from 'vuex';

export default {
  name: 'AppVersion',
  computed: {
    ...mapGetters(['getAppTitle']),
    version() {
      return process.env.VUE_APP_VERSION;
    },
  },
};
