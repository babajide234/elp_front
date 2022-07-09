<template>
  <div />
</template>

<script>
export default {
  created() {
    this.$store.dispatch('User/destroyToken').then(response => {
      this.$router.push({ name: 'Login' });
    }).catch((error) => {
      console.error(error);
      this.$router.push({ name: 'Login' });
    });
  },
};
</script>

