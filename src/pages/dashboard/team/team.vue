/* eslint-disable vue/name-property-casing */
<template>
  <section class="tables">
    <div class="page-header">
      <h3 class="page-title">
        Your team
      </h3>
      <div class="">
        <b-button v-b-modal="'my-modal'" class="btn btn btn-gradient-primary btn-fw btn-secondary">
          <i class="mdi mdi-account-plus" />
          Add New Team Member
        </b-button>
      </div>
    </div>
    <b-modal id="my-modal" hide-footer>
      <b-container>
        <b-form @submit="inviteMember">
          <b-form-row>
            <b-col sm="12">
              <b-form-group
                id="fieldset-1"
                description="Recipients Role"
                label="Role"
                label-for="role"
              >
                <b-form-select id="role" v-model="newTeam.roles" :options="options" size="md" />
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
                <b-form-input id="input-1" v-model="newTeam.email" :state="state" :type="`email`" />
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-button type="submit" variant="primary">Invite</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-container>
    </b-modal>

    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <!-- <h2 class="card-title">Personal Details</h2>
            <button type="button" class="btn btn btn-gradient-primary btn-rounded btn-icon btn-secondary position-absolute editbtn">
              <i class="mdi mdi-pencil" />
            </button> -->
            <b-table responsive :items="myProvider" />
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
      items: [],
      newTeam: {
        roles: '',
        email: '',
      },
      options: [
        { value: 'admin', text: 'Admin' },
        { value: 'finance', text: 'Finance' },
        { value: 'planner', text: 'Planner' },
      ],
    };
  },
  computed: {

    state() {
      if (this.newTeam.email !== ''){
        return true;
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.$store.dispatch('User/listUsers')
      .then(response => {
        console.log(response.data);
        const data = response.data;
        data.forEach(element => {
          this.items[
            element
          ];
        });
        console.log(this.items);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    inviteMember(event) {
      event.preventDefault();
      this.$store.dispatch('User/inviteTeam', this.newTeam)
        .then(response => {
          console.log(response);

          // this.$message({
          //   message: `${response.message}`,
          //   type: 'success',
          //   duration: 5 * 1000,
          // });
          this.$bvModal.hide('my-modal');
        })
        .catch(err => {
          console.log(err);
        });
    },
    myProvider() {
      const promise = this.$store.dispatch('User/listUsers');

      return promise.then((data) => {
        const items = data.data;
        items.forEach(element => {
          this.items.push(
            {
              Name: element.name,
              Email: element.email,
              Role: element.roles[0],
            }
          );
        });
        console.log(this.items);
        return (this.items);
      }).catch(error => {
        return [error];
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
