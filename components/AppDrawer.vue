<template>
  <v-navigation-drawer
    v-model="state.drawer"
    :mini-variant="state.miniVariant"
    :clipped="state.clipped"
    state.fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in state.items"
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
import  App from '../store/App';
@Component
export default class LogoComponent extends Vue {
  get state():App{
    return this.$store.state as App
  }
}
</script>