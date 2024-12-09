import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddForm',
  computed: {
    ...mapGetters(['getSource', 'getSourceText']),
    xIcon() {
      return require('@/assets/reset.svg');
    },
    allowSubmit() {
      return this.getSource.length && this.getSourceText.length;
    },
    textareaHeight() {
      return this.height;
    },
  },
  methods: {
    ...mapActions(['setSource', 'setSourceText', 'sendTextToSegment',
      'clearAddData', 'setLoadingMessage', 'setIsLoading', 'clearLoadingMessage']),
    sourceTextInput(event) {
      this.setSourceText(event.target.value);
    },
    sourceInput(event) {
      this.setSource(event.target.value);
    },
    resetForm() {
      this.clearAddData();
    },
    async sendForm() {
      this.setLoadingMessage('Dodawanie tekstu do bazy danych...');
      this.setIsLoading(true);
      try {
        await this.sendTextToSegment({ source: this.getSource, text: this.getSourceText });
      } catch (error) {
        console.error(error);
      }
      this.setIsLoading(false);
      this.clearLoadingMessage();
    },
  },
};
