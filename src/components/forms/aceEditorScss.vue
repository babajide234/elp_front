<template>

  <section class="ace-editor">
    <editor v-model="content" width="100%" lang="scss" theme="monokai" height="200px" @init="editorInit" />
  </section>

</template>

<script>
export default {
  name: 'AceEditor',
  components: {
    editor: require('vue2-ace-editor'),
  },
  data() {
    return {
      content: `
.nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

`,
    };
  },
  methods: {
    editorInit: function() {
      require('brace/ext/language_tools');
      require('brace/mode/html');
      require('brace/mode/javascript');
      require('brace/mode/less');
      require('brace/mode/scss');
      require('brace/theme/chrome');
      require('brace/theme/monokai');
      require('brace/snippets/javascript');
    },
  },
};
</script>
