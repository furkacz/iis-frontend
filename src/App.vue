<template>
  <LoadingScreen v-if="getIsLoading" />
  <router-view v-show="!getIsLoading" />
  <AppVersion />
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';

import AppVersion from '@/components/AppVersion';
import LoadingScreen from '@/components/LoadingScreen';

export default {
  name: 'App',
  components: {
    AppVersion,
    LoadingScreen,
  },
  computed: {
    ...mapGetters(['getIsLoading']),
  },
  store,
};
</script>
