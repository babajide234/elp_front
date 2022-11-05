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
        <b-modal id="staffId" size="lg" title="Staff Member">
          <b-container>
            <b-row>
              <b-col>
                <b-card>
                  <b-tabs content-class="mt-3">
                    <b-tab title="Staff Info" active>
                      <b-container class="bv-example-row">
                        <b-row>
                          <b-col>
                            <img src="https://i.pravatar.cc/300" alt="" class="rounded">
                          </b-col>
                          <b-col cols="8">
                            <b-card>
                              <h4 class="mb-4">Personal Details</h4>
                              <b-row class="mb-4">
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">first name</h5>
                                  <h5 class="capitalize text-sm text-gray-700">placeholder</h5>
                                </b-col>
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">middle name</h5>
                                  <h5 class="capitalize text-sm text-gray-700">placeholder</h5>
                                </b-col>
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">last name</h5>
                                  <h5 class="capitalize text-sm text-gray-700">placeholder</h5>
                                </b-col>
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">nick name</h5>
                                  <h5 class="capitalize text-sm text-gray-700">placeholder</h5>
                                </b-col>
                              </b-row>
                              <b-row class="mb-4">
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">Date Of Birth</h5>
                                  <h5 class="capitalize text-sm text-gray-700">placeholder</h5>
                                </b-col>
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">Mobile Phone</h5>
                                  <h5 class="capitalize text-sm ext-gray-700">placeholder</h5>
                                </b-col>
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">Home phone</h5>
                                  <h5 class="capitalize text-sm text-gray-700">placeholder</h5>
                                </b-col>
                                <b-col>
                                  <h5 class="capitalize text-xs text-gray-500">email</h5>
                                  <h5 class="capitalize text-sm text-gray-700">placeholder</h5>
                                </b-col>
                              </b-row>
                            </b-card>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="Contacts">
                      <b-container>
                        <b-row>
                          <b-col>
                            <div class="page-header">
                              <h3 class="page-title">
                                Staff Contacts
                              </h3>
                              <div class="">
                                <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
                                  <i class="mdi mdi-plus" />
                                  Print
                                </b-button>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col />
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="Notes" />
                    <b-tab title="Immunizations" />
                    <b-tab title="Time Clock Entries">
                      <b-container>
                        <b-row>
                          <b-col>
                            <div class="page-header">
                              <h3 class="page-title">
                                Time Clock Entries
                              </h3>
                              <div class="">
                                <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
                                  <i class="mdi mdi-plus" />
                                  Add Time Entry
                                </b-button>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            <b-table
                              striped responsive hover
                              :items="cloctable"
                            >
                              <template #cell(action)="action">
                                <el-dropdown>
                                  <span class="focus:bg-gray-200 hover:bg-gray-200 btn btn-sm btn-rounded btn-icon flex justify-center items-center">
                                    <i class="mdi mdi-dots-vertical" />
                                  </span>
                                  <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item :id="action">Edit</el-dropdown-item>
                                    <el-dropdown-item :id="action">Delete</el-dropdown-item>
                                  <!-- <el-dropdown-item :id="action" v-b-modal.EditResident>Edit </el-dropdown-item> -->
                                  </el-dropdown-menu>
                                </el-dropdown>
                              </template>
                            </b-table>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="Certifications">
                      <b-container>
                        <b-row>
                          <b-col>
                            <div class="page-header">
                              <h3 class="page-title">
                                Certifications
                              </h3>
                              <div class="">
                                <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
                                  <i class="mdi mdi-plus" />
                                  Add Certifications
                                </b-button>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            <b-table
                              striped responsive hover
                              :items="cert"
                            >
                              <!-- <template #cell(action)="action">
                                <el-dropdown>
                                  <span class="focus:bg-gray-200 hover:bg-gray-200 btn btn-sm btn-rounded btn-icon flex justify-center items-center">
                                    <i class="mdi mdi-dots-vertical" />
                                  </span>
                                  <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item :id="action">Edit</el-dropdown-item>
                                    <el-dropdown-item :id="action">Delete</el-dropdown-item>
                                   <el-dropdown-item :id="action" v-b-modal.EditResident>Edit </el-dropdown-item>
                                  </el-dropdown-menu>
                                </el-dropdown> -->
                              <!-- </template> -->
                            </b-table>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="Training">
                      <b-container>
                        <b-row>
                          <b-col>
                            <div class="page-header">
                              <h3 class="page-title">
                                Training Hours
                              </h3>
                              <div class="">
                                <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
                                  <i class="mdi mdi-plus" />
                                  Add Training
                                </b-button>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col>
                            <b-table
                              striped responsive hover
                              :items="training"
                            >
                              <template #cell(action)="action">
                                <el-dropdown>
                                  <span class="focus:bg-gray-200 hover:bg-gray-200 btn btn-sm btn-rounded btn-icon flex justify-center items-center">
                                    <i class="mdi mdi-dots-vertical" />
                                  </span>
                                  <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item :id="action">Edit</el-dropdown-item>
                                    <el-dropdown-item :id="action">Delete</el-dropdown-item>
                                    <el-dropdown-item :id="action" v-b-modal.EditResident>Edit </el-dropdown-item>
                                  </el-dropdown-menu>
                                </el-dropdown>
                              </template>
                            </b-table>
                          </b-col>
                        </b-row>
                      </b-container>
                    </b-tab>
                    <b-tab title="Forms" />
                  </b-tabs>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </b-modal>

        <div class="page-header">
          <h3 class="page-title">
            Staff List
          </h3>
          <div class="">
            <b-button v-b-modal.AddForm class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Add Staff
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
                  <el-dropdown-item :id="action" v-b-modal.staffId>Details</el-dropdown-item>
                  <!-- <el-dropdown-item :id="action" v-b-modal.EditResident>Edit </el-dropdown-item> -->
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
          Name: 'Dickerson Macdonald',
          Position: '',
          Hire_Date: '',
          End_Date: '',
          Dob: '',
          Phone: '',
          Training_Certifications: '',
          action: 2,
        },
      ],
      cloctable: [
        {
          Start: 'Dickerson Macdonald',
          end: '',
          duration: '',
          type: '',
          notes: '',
          action: 2,
        },
      ],
      cert: [
        {
          Certification: 'Dickerson Macdonald',
          Type: '',
          Renewal: '',
          Training_Hours: '',
          Current_Status: '',
          History: '',
        },
      ],
      training: [
        {
          Year: 'Dickerson Macdonald',
          Date: '',
          Training_Type: '',
          Topic: '',
          Hours: '',
          Hour_Requirement: '',
          Actions: '',
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
