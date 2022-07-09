<template>
  <div>
    <p v-if="message" key="message">
      {{ message }}
    </p>
    <p
      v-if="error && getType(error) === 'string'"
      key="error"
    >
      {{ error }}
    </p>
    <ul
      v-if="getType(error) === 'object'"
      key="error-list"
    >
      <li v-for="key in errorKeys" :key="key">
        <b>{{ key | titleCase }}</b>
        <ul>
          <li v-for="(item, index) in getErrors(key)" :key="`${index}-error`">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FlashMessage',
  filters: {
    titleCase(value) {
      return value.replace('_', ' ');
    },
  },
  props: {
    message: {
      type: String,
      default: null,
    },
    error: {
      type: [Object, String],
      default: null,
    },
  },
  computed: {
    errorKeys() {
      if (!this.error || this.getType(this.error) === 'string') {
        return null;
      }
      return Object.keys(this.error);
    },
  },
  methods: {
    getErrors(key) {
      return this.error[key];
    },
    getType(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    },
  },
};
</script>
