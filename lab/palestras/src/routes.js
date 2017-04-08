import Home from './components/home/Home.vue'
import Single from './components/single/Single.vue'

export const routes = [
  {
    path: '',
    component: Home,
    titulo: 'Home'
  },
  {
    path: '/single',
    component: Single,
    titulo: 'Single'
  },
]
