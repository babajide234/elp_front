<template>
  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <!-- <img src="../../assets/images/logo.svg"> -->
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <div class="pt-3">
                  <div class="form-group">
                    <input
                      v-model="user.email" type="email" class="form-control form-control-lg"
                      placeholder="Username"
                    >
                  </div>
                  <div class="form-group">
                    <input
                      v-model="user.password" type="password" class="form-control form-control-lg"
                      placeholder="Password"
                    >
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" @click="login">SIGN IN</button>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <div class="form-check">
                      <label class="form-check-label text-muted">
                        <input type="checkbox" class="form-check-input">
                        Keep me signed in
                        {{ loading ? 'loading':'' }}
                        <i class="input-helper" />
                      </label>
                    </div>
                    <a href="javascript:void(0);" class="auth-link text-black">Forgot password?</a>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Don't have an account? <router-link to="/register" class="text-primary">Create</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>
</template>

<script>
// import { login } from '@/api/auth';
export default {
  // computed: {
  //   user: {
  //     get() {
  //       return this.$store.state.User.user;
  //     },
  //   },
  // },
  data: () => ({
    user: {
      email: 'admin@example.com',
      password: 'admin123',
    },
    loading: false,
  }),
  methods: {
    login() {
      this.$store.dispatch('User/loginUser', this.user)
        .then(response => {
          this.$message({
            message: `${response.message}`,
            type: 'success',
            duration: 5 * 1000,
          });
          this.loading = true;
          this.$router.push({ name: 'dashboard' });
        });
    },
  },
};
</script>

