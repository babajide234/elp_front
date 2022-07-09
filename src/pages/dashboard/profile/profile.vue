/* eslint-disable vue/name-property-casing */
<template>
  <section class="tables">
    <b-modal id="editInfo" hide-footer>
      <b-container>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-row>
            <b-col sm="12">
              <b-form-group
                id="fieldset-1"
                description="user Name"
                label="Name"
                label-for="name"
                :state="state"
              >
                <b-form-input id="name" v-model="info.Name" :type="`text`" />
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group
                id="fieldset-1"
                description="Recipients Email"
                label="Email"
                label-for="input-1"
                :state="state"
              >
                <b-form-input id="input-1" v-model="info.Email" :state="state" :type="`email`" />
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group
                id="fieldset-1"
                description="User role"
                label="Role"
                label-for="role"
                :state="state"
              >
                <b-form-select id="role" v-model="info.AccessType" :options="options" size="md" />
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-button type="submit" variant="primary">Update</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-container>
    </b-modal>

    <div class="row">
      <div class="col-lg-6 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Personal Details</h2>
            <button v-b-modal="'editInfo'" type="button" class="btn btn btn-gradient-primary btn-rounded btn-icon btn-secondary position-absolute editbtn">
              <i class="mdi mdi-pencil" />
            </button>
            <!-- <b-table responsive :items="items" /> -->
            <b-container>
              <b-row class="pt-5">
                <b-col class="p-2">
                  <h4 class="text-primary">Name</h4>
                  <h6>{{ info.Name }}</h6>
                </b-col>
                <b-col class="p-2">
                  <h4 class="text-primary">Email</h4>
                  <h6>{{ info.Email }}</h6>
                </b-col>
                <div class="w-100" />
                <b-col class="p-2">
                  <h4 class="text-primary">Access Type</h4>
                  <h6 class="">{{ info.AccessType }}</h6>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Profile',
  data() {
    return {
      info:
        {
          Name: this.$store.state.User.user.name,
          Email: this.$store.state.User.user.email,
          AccessType: this.$store.state.User.user.roles[0],
        },
      options: [
        { value: 'admin', text: 'Admin' },
        { value: 'finance', text: 'Finance' },
        { value: 'planner', text: 'Planner' },
      ],
      invite: {
        email: '',
        roles: [],
      },
    };
  },
  computed: {
    state() {
      if (this.info.Email !== ''){
        return true;
      } else {
        return null;
      }
    },
  },
  methods: {
    inviteMember() {
      this.$store.dispatch('User/inviteTeam', this.invite)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};

</script>

<style scoped>
    .editbtn{
        top:30px;
        right:30px;
    }
</style>
