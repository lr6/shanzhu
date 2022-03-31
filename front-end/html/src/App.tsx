import { defineComponent } from 'vue'

export const App = defineComponent({
  setup() {
    return () => <>
      <div>
        <router-link to='/'>home</router-link> 
        | nav |
        <router-link to='/about'>about</router-link>
        <div>
        <router-view></router-view>
        </div>
      </div>
    </>
  }
})