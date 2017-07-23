// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.component('datatable', require('vuejs-datatable'))

Vue.component('edit-button', {
  template: `
        <button class="btn btn-xs btn-primary" @click="goToUpdatePage">Edit</button>
    `,
  props: ['row'],
  methods: {
    goToUpdatePage: function () {
      window.location = '/contact/' + this.row.id + '/update'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    table_columns: [
      { label: 'First Name', field: 'first_name' },
      { label: 'Last Name', field: 'last_name' },
      { label: 'Email', field: 'email' },
      {
        label: 'age',
        callback: function (row) {
          var ageDiff = Date.now() - (new Date(row.birthdate).getTime())
          var ageDate = new Date(ageDiff)

          return Math.abs(ageDate.getUTCFullYear() - 1970)
        }
      },
      { label: '', component: 'edit-button' }
    ],
    table_rows: []
  }
})
