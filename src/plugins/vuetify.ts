import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#007AC3',
        secondary: '#009881',
        accent: '#A6D1EA',
        error: '#E5202E',
        info: '#409BD2',
        success: '#85BC20',
        warning: '#EA8F00',
      }
    }
  }
});
