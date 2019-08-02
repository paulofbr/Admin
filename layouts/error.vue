<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

interface Error{
  statusCode:number
}

@Component({
  layout: 'empty'
})
export default class LogoComponent extends Vue {
  pageNotFound:string= '404 Not Found';
  otherError:string='An error occurred';

  @Prop({default:null})
  error!:Error
    
  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {title}
  }
  
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
