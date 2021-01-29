import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StudentRegistration from '../views/StudentRegistration'
import TeacherRegistration from '../views/TeacherRegistration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/student-registration',
    name: 'StudentRegistration',
    component: StudentRegistration
  },
  {
    path: '/teacher-registration',
    name: 'TeacherRegistration',
    component: TeacherRegistration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
