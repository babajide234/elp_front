<template>
  <div class="">
    <div class="row">
      <div class="col-lg-12">
        <!-- <div class=" float-right p-4">
          <button class="">Add Log</button>
        </div> -->
        <b-modal id="AddLog" size="xl" title="Add Comunication Log">
          <b-container>
            <b-row>
              <b-col>
                <b-card>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="First Name"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Middle Name/Initails"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Last Name"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-row>
                        <b-col lg="6">
                          <b-form-group
                            id="fieldset-1"
                            label="Contact Type"
                            label-for="role"
                          >
                            <b-form-select id="Name" :options="type" type="text" />
                          </b-form-group>
                        </b-col>
                        <b-col lg="6">
                          <b-form-group
                            id="fieldset-1"
                            label="Achieved"
                            label-for="role"
                          >
                            <b-form-checkbox
                              id="checkbox-1"
                              v-model="status"
                              name="checkbox-1"
                              value="accepted"
                              unchecked-value="not_accepted"
                            >
                              YES
                            </b-form-checkbox>
                            <b-form-checkbox
                              id="checkbox-1"
                              v-model="status"
                              name="checkbox-1"
                              value="accepted"
                              unchecked-value="not_accepted"
                            >
                              NO
                            </b-form-checkbox>
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Company Name"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Username"
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
                        label="Address"
                        label-for="role"
                      >
                        <b-form-textarea id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="City"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="State Or Province"
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
                        label="Country"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Zip Code"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Email"
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
                        label="Work Phone"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Home Phone"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Mobile Phone"
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
                        label="Fax"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                    <b-col />
                    <b-col />
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Notes"
                        label-for="role"
                      >
                        <b-form-textarea id="Name" type="text" />

                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Vehicle Information"
                        label-for="role"
                      >
                        <b-form-textarea id="Name" type="text" />

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
            Facility Forms
          </h3>
          <div class="">
            <b-button v-b-modal.AddLog class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Add Contacts
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
                  <el-dropdown-item :id="action" v-b-modal.EditResident>Edit </el-dropdown-item>
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
          name: 'Dickerson Macdonald',
          contact_type: '',
          phones: '',
          address: '',
          associated_with: '',
          notes: '',
          action: 2,
        },
      ],
      type: [
        { text: 'Allow Replies', value: 'orange' },
        { text: 'Prevent Replies', value: 'apple' },
        { text: 'Archived', value: 'pineapple' },
        { text: 'Resolved', value: 'grape' },
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

</style>
