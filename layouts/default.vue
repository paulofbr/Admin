<template>
  <v-app dark>
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
    <v-app-bar
      :clipped-left="appStore.clipped"
      appStore.fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="appStore.drawer = !appStore.drawer" />
      <v-btn
        icon
        @click.stop="appStore.miniVariant = !appStore.miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${appStore.miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="appStore.clipped = !appStore.clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="appStore.fixed = !appStore.fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="appStore.rightDrawer = !appStore.rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="appStore.rightDrawer"
      :right="appStore.right"
      temporary
      appStore.fixed
    >
      <v-list>
        <v-list-item @click.native="appStore.right = !appStore.right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="appStore.fixed"
      app
    >
      <span>&copy; 2021</span>
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { getModule} from 'vuex-module-decorators'
import {appStore} from '../store/App';

@Component({
})
export default class LogoComponent extends Vue {
  
}
</script>
