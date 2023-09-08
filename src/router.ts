import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Inventory from './views/Inventory.vue'
import person from './views/personList.vue'
import UIElements from './views/UIElements.vue'
import Login from './views/Login.vue'
import Database from './views/Database.vue'
import Reports from './views/Reports.vue'
import settings from './views/settings.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Inventory',
    name: 'Inventory',
    component: Inventory,
  },
  {
    path: '/person',
    name: 'person',
    component: person,
  },
  {
    path: '/Reports',
    name: 'Reports',
    component: Reports,
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
  },
  {
    path: '/Database',
    name: 'Database',
    component: Database,
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
