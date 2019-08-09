<template>
  <v-navigation-drawer
    v-model="appStore.drawer"
    :mini-variant="appStore.miniVariant"
    :clipped="appStore.clipped"
    appStore.fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in appStore.items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import {appStore} from '../store/App';
import { getModule } from 'vuex-module-decorators';
@Component
export default class LogoComponent extends Vue {
  
}
</script>