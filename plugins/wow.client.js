import Vue from 'vue';
import WOW from 'wow.js';

const wow = new WOW();
wow.init();

Vue.prototype.$wow = wow;
