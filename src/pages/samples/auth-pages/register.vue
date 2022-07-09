/* eslint-disable vue/name-property-casing */
<template>
  <section class="register">
    <FlashMessage />
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-8 col-lg-10 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="../../../assets/images/logo.svg">
                </div>
                <h4>New here?</h4>
                <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <div>
                  <div class="form-group">
                    <!-- <input id="" v-model="" type="text" class="form-control form-control-lg" placeholder="Company Name"> -->
                    <input v-model="formData.company" class="form-control form-control-lg" placeholder="Company Name">
                  </div>
                  <div class="form-group">
                    <input id="" v-model="formData.email" type="email" class="form-control form-control-lg" placeholder="Email">
                    <!-- <form-error v-if="errors.title" :errors="errors">
                      @{{ errors.title }}
                    </form-error> -->
                  </div>
                  <div class="form-group">
                    <input id="" v-model="formData.first_name" type="text" class="form-control form-control-lg" placeholder="First Name">
                  </div>
                  <div class="form-group">
                    <input id="" v-model="formData.last_name" type="text" class="form-control form-control-lg" placeholder="Last Name">
                  </div>
                  <div class="form-group">
                    <input id="" v-model=" formData.phone_number" type="text" class="form-control form-control-lg" placeholder="Phone No">
                  </div>
                  <div class="form-group">
                    <textarea id="" v-model="formData.address" name="" class="form-control form-control-lg" cols="30" rows="10" placeholder="Address" />
                  </div>
                  <div class="form-group">
                    <input id="" v-model="formData.password" type="password" class="form-control form-control-lg" placeholder="Password">
                  </div>
                  <div class="form-group">
                    <input id="" v-model="formData.confirm_password" type="password" class="form-control form-control-lg" placeholder="Confirm Password">
                  </div>
                  <div class="mt-3">
                    <!-- <router-link class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" to="/">SIGN UP</router-link> -->
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" @click="register"> SIGN UP</button>
                  </div>
                  <div class="text-center mt-4 font-weight-light">
                    Already have an account? <router-link to="/login" class="text-primary">Login</router-link>
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
// import { getError } from '../../../utils/helpers';
export default {
  name: 'Register',
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.confirm_password !== '') {
          this.$refs.ruleForm.validateField('confirm_password');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };
    return {
      formData: {
        first_name: 'Black',
        last_name: 'Black',
        email: 'black@email.com',
        password: '123456',
        company: 'Black',
        slug: '',
        phone_number: '08135198896',
        address: 'nigeria',
        confirm_password: '123456',
      },
      rules: {
        company: [
          { required: true, message: 'Please pick a time', trigger: 'change' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        first_name: [
          { required: true, message: 'Please input First name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        last_name: [
          { required: true, message: 'Please input First name', trigger: 'blur' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
        ],
        phone_number: [
          { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' },
        ],
        address: [
          { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' },
        ],
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
        confirm_password: [
          { validator: validatePass2, trigger: 'blur' },
        ],
      },
      errors: [],
      submitted: false,
    };
  },
  methods: {
    register() {
      this.$store.dispatch('User/register', {
        first_name: this.formData.first_name,
        last_name: this.formData.last_name,
        email: this.formData.email,
        password: this.formData.password,
        company: this.formData.company,
        slug: this.formData.company.toLowerCase().trim(),
        phone_number: this.formData.phone_number,
        address: this.formData.address,
        confirm_password: this.formData.confirm_password,
      }).then((res) => {
        this.$message({
          message: `${res.message}`,
          type: 'success',
          duration: 5 * 1000,
        });

        setTimeout(function() {
          this.$router.push({ name: 'Login' });
        }, 2000);
      }).catch((err) => {
        console.error(err);
      });
    },
  },
};
</script>

