<template>
  <div class="">
    <div class="row">
      <div class="col-lg-12">
        <!-- <div class=" float-right p-4">
          <button class="">Add Log</button>
        </div> -->
        <b-modal id="AddForm" size="lg" title="Add Entry">
          <b-container>
            <b-row>
              <b-col>
                <b-card>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Time"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="date" />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Associated With"
                        label-for="role"
                      >
                        <b-form-select id="Name" :options="res" />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Staff Member"
                        label-for="role"
                      >
                        <b-form-select id="Name" :options="staff" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Show In Prgress Notes"
                        label-for="role"
                      >
                        <b-form-select id="Name" :options="progress" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Note"
                        label-for="role"
                      >
                        <b-form-textarea />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </b-modal>

        <div class="page-header">
          <h3 class="page-title">
            To Do List:
          </h3>
          <div class="">
            <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Add Service
            </b-button>
            <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Add Task
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card p-4">
          <b-table striped responsive hover :items="items">
            <template #cell(action)="action">
              <el-dropdown>
                <span class="focus:bg-gray-200 hover:bg-gray-200 btn btn-sm btn-rounded btn-icon flex justify-center items-center">
                  <i class="mdi mdi-dots-vertical" />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-b-modal.AddContacts>Details</el-dropdown-item>
                  <el-dropdown-item :id="action" v-b-modal.EditResident>Edit </el-dropdown-item>
                  <el-dropdown-item v-b-modal.AddContacts>Print</el-dropdown-item>
                  <el-dropdown-item v-b-modal.AddContacts>Link</el-dropdown-item>
                  <el-dropdown-item v-b-modal.AddContacts>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Start: '',
          Resident: 'Dickerson Macdonald',
          Room: '',
          Res_Group: '',
          Description: '',
          Staff_type: '',
          Staff_group: '',
          Status: '',
          Notes: '',
          action: 2,
        },
      ],
      Resident: [
        { text: 'Text', value: 'orange' },
        { text: 'Date', value: 'apple' },
        { text: 'Numeric', value: 'pineapple' },
        { text: 'checkbox', value: 'grape' },
      ],
      staff: [
        { text: 'Text', value: 'orange' },
        { text: 'Date', value: 'apple' },
        { text: 'Numeric', value: 'pineapple' },
        { text: 'checkbox', value: 'grape' },
      ],
      Res: [
        { text: 'Text', value: 'orange' },
        { text: 'Date', value: 'apple' },
        { text: 'Numeric', value: 'pineapple' },
        { text: 'checkbox', value: 'grape' },
      ],
      progress: [
        { text: 'Text', value: 'orange' },
        { text: 'Date', value: 'apple' },
        { text: 'Numeric', value: 'pineapple' },
        { text: 'checkbox', value: 'grape' },
      ],
    };
  },
  mounted() {

  },
  updated() {

  },
  methods: {

  },
};
</script>

<style>
.checkbox:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
