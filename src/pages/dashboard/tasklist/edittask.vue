<template>
  <div class="">
    <div class="row">
      <div class="col-lg-12">
        <!-- <div class=" float-right p-4">
          <button class="">Add Log</button>
        </div> -->
        <b-modal id="AddForm" size="md" title="Add Form">
          <b-container>
            <b-row>
              <b-col>
                <b-card>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Name Of Activity"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Date"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="date" />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Time"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="time" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Duration"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Location"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Director"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
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
            Task List
          </h3>
          <div class="">
            <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Edit Task
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card p-4">
          <b-table
            striped responsive hover
            :items="items"
          >
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
          Resident: 'Dickerson Macdonald',
          Assignee: '',
          Start: '',
          Stop: '',
          Description: '',
          Frequency: '',
          action: 2,
        },
      ],
      type: [
        { text: 'Text', value: 'orange' },
        { text: 'Date', value: 'apple' },
        { text: 'Numeric', value: 'pineapple' },
        { text: 'checkbox', value: 'grape' },
      ],
      input: [
        {
          typ: 'text',
          placeholder: 'nbfia',
          label: 'label',
        },
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
