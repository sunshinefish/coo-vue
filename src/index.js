import './assets/scss/index.scss';
// 入口页
import Vue from 'vue';
import router from './router';
const app = new Vue({router});

window.addEventListener('DOMContentLoaded', () => app.$mount('#coo-app'), false);
