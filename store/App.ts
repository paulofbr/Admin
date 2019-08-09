import { Module, VuexModule, Mutation, getModule, } from 'vuex-module-decorators'
import { Icon } from '../types/AppTypes'
import store from './index'

@Module({ stateFactory: true ,name: 'app',store })
export  class AppModule extends VuexModule {
  clipped:boolean= false;
  drawer:boolean= false;
  fixed:boolean= false;
  items:Icon[] = [
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    },
    {

      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    }
  ];
  miniVariant:boolean= false;
  right:boolean= true;
  rightDrawer:boolean= false;
  title:string= 'Vuetify.js'

  @Mutation
  toogleDrawer (drawer:boolean):boolean {
    return !drawer
  }
}
let appStore:AppModule =  getModule(AppModule)
export {appStore}
 