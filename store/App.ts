import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Icon } from '../types/AppTypes'

@Module({ name: 'App' })
export default class App extends VuexModule {
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
