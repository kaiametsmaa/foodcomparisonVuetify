import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/ToodeteKategooriad.vue'
import Ostukorv from '../views/Ostukorv'
import PuuJaKoogiviljad from "../views/PuuJaKoogiviljad";
import Juustud from "../views/Juustud";
import LihaJaKalatooted from "../views/LihaJaKalatooted";
import PiimatootedMunadVoid from "../views/PiimatootedMunadVoid";
import LeivadSaiadKondiitritooted from "../views/LeivadSaiadKondiitritooted";
import Valmistoidud from "../views/Valmistoidud";
import KuivainedHommikusoogidHoidised from "../views/KuivainedHommikusoogidHoidised";
import MaailmakookMaitseainedPuljongid from "../views/MaailmakookMaitseainedPuljongid";
import KastmedOlid from "../views/KastmedOlid";
import MaiustusedKupsisedNaksid from "../views/MaiustusedKupsisedNaksid";
import KulmutatudToidukaubad from "../views/KulmutatudToidukaubad";
import Joogid from "../views/Joogid";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ostukorv',
    name: 'Ostukorv',
    component: Ostukorv
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/Ostukorv.vue')
    // }
  },
  {
    path: '/puujakoogiviljad',
    name: 'PuuJaKoogiviljad',
    component: PuuJaKoogiviljad
  },
  {
    path: '/juustud',
    name: 'Juustud',
    component: Juustud
  },
  {
    path: '/lihajakalatooted',
    name: 'LihaJaKalatooted',
    component: LihaJaKalatooted
  },
  {
    path: '/piimatootedmunadvoid',
    name: 'PiimatootedMunadVoid',
    component: PiimatootedMunadVoid
  },
  {
    path: '/leivadsaiadkondiitritooted',
    name: 'LeivadSaiadKondiitritooted',
    component: LeivadSaiadKondiitritooted
  },
  {
    path: '/valmistoidud',
    name: 'Valmistoidud',
    component: Valmistoidud
  },
  {
    path: '/kuivainedhommikusoogidhoidised',
    name: 'KuivainedHommikusoogidHoidised',
    component: KuivainedHommikusoogidHoidised
  },
  {
    path: '/maailmakookmaitseainedpuljongid',
    name: 'MaailmakookMaitseainedPuljongid',
    component: MaailmakookMaitseainedPuljongid
  },
  {
    path: '/kastmedolid',
    name: 'KastmedOlid',
    component: KastmedOlid
  },
  {
    path: '/maiustusedkupsisednaksid',
    name: 'MaiustusedKupsisedNaksid',
    component: MaiustusedKupsisedNaksid
  },
  {
    path: '/kulmutatudtoidukaubad',
    name: 'KulmutatudToidukaubad',
    component: KulmutatudToidukaubad
  },
  {
    path: '/joogid',
    name: 'Joogid',
    component: Joogid
  },
]

const router = new VueRouter({
  routes
})

export default router
