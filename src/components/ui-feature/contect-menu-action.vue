<template>
  <div>
    <div>
      <p @contextmenu.prevent="$refs.menu.open">
        Right click on me
      </p>
    </div>
    <vue-context ref="menu">
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)"><i
          class="mdi mdi-lead-pencil
"
        /> edit</a></li><li /><li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)"><i
          class="mdi mdi-content-cut
"
        /> cut</a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)"><i
          class="mdi mdi-content-copy
"
        /> copy</a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)"><i
          class="mdi mdi-content-paste
"
        /> paste</a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)"><i
          class="mdi mdi-delete
"
        /> delete</a>
      </li>
      <li>
        <a href="javascript:void(0);" @click.prevent="onClick($event.target.innerText)"><i
          class="mdi mdi-exit-to-app
"
        /> quit</a>
      </li>
    </vue-context>
  </div>
</template>
<script>
import { VueContext } from 'vue-context';
export default {
  components: {
    VueContext,
  },
  methods: {
    onClick(text) {
      alert(`You clicked ${text}!`);
    },
  },
};
</script>
<style>
@import '~vue-context/dist/css/vue-context.css';
</style>
