<template>
  <v-app dark>
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
    <v-app-bar
      :clipped-left="state.clipped"
      state.fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="state.drawer = !state.drawer" />
      <v-btn
        icon
        @click.stop="state.miniVariant = !state.miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${state.miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="state.clipped = !state.clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="state.fixed = !state.fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="state.rightDrawer = !state.rightDrawer"
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
      v-model="state.rightDrawer"
      :right="state.right"
      temporary
      state.fixed
    >
      <v-list>
        <v-list-item @click.native="state.right = !state.right">
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
      :fixed="state.fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import App from '../store/App'// eslint-disable-line no-unused-vars

@Component({
})
export default class LogoComponent extends Vue {
  get state ():App {
    return this.$store.state as App
  }
}
</script>
