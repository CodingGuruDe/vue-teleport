vue-teleport
-------------

vue-teleport is a lightweight npm package designed to seamlessly integrate Vue 3's [teleport component](https://vuejs.org/guide/built-ins/teleport.html) functionality into Vue 2 projects.

**👍Key Features:**

- Lightweight and easy to integrate into Vue 2 projects, providing Vue 2 developers with a seamless transition to gradually adopt Vue 3 features.
- Implemented using Vue 2's virtual DOM, it delivers excellent performance.

**📦Installation:**
```sh
npm install vue-teleport
```

**📦Example**

```vue
<template>
  <div>
      <button @click="modalOpen = true">
          Open full screen modal! (With teleport!)
      </button>
    
      <Teleport to="body">
        <div v-if="modalOpen" class="modal">
          <div>
            I'm a teleported modal! 
            (My parent is "body")
            <button @click="modalOpen = false">
              Close
            </button>
          </div>
        </div>
      </Teleport>
  </div>
</template>

<script>
import Teleport from 'vue-teleport';

export default {
  components: {
    Teleport,
  },
  data() {
    return { 
      modalOpen: false
    }
  }
}
</script>
```

**📦License**

🚀Start leveraging the power of Vue 3's teleport component within your Vue 2 projects today with vue-teleport!