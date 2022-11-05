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
                  <b-tabs content-class="mt-3">
                    <b-tab title="Details" active>
                      <b-row>
                        <b-col>
                          <b-form-group
                            id="fieldset-1"
                            label="First Name"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="text" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Phone"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="tel" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Phone Carrier"
                            label-for="role"
                          >
                            <b-select value="" :item="item" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Mar Initails Overide"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="text" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Username"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="text" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Staff PIN"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="numeric" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="password"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="password" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Verify password"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="password" />

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
                          <b-form-group
                            id="fieldset-1"
                            label="Email"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="email" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Additional Email"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="email" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Language"
                            label-for="role"
                          >
                            <b-select value="" :item="item" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Show Google Translate"
                            label-for="role"
                          >
                            <b-select value="" :item="item" />

                          </b-form-group>
                          <b-form-group
                            id="fieldset-1"
                            label="Suppress Notification"
                            label-for="role"
                          >
                            <b-select value="" :item="item" />
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <b-form-group
                            id="fieldset-1"
                            label="SHOW REMINDERS FOR ALL FACILITIES ON CALENDAR"
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
                      <b-row>
                        <b-col>
                          <b-form-group
                            id="fieldset-1"
                            label="Default Signature"
                            label-for="role"
                          >
                            <b-textarea />
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col>
                          <b-form-group
                            id="fieldset-1"
                            label="ALWAYS ALLOW EXTERNAL ACCESS"
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
                      <b-row>
                        <b-col>
                          <b-form-group
                            id="fieldset-1"
                            label="RECEIVE SYSTEM EMAILS"
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
                    </b-tab>
                    <b-tab title="Roles/Permissions" active>
                      <b-row>
                        <b-col>
                          <b-form-group
                            id="fieldset-1"
                            label="Date/Time"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="date" />

                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-tab>
                    <b-tab title="Form Permissions" active>
                      <b-row>
                        <b-col>
                          <b-form-group
                            id="fieldset-1"
                            label="Date/Time"
                            label-for="role"
                          >
                            <b-form-input id="Name" type="date" />

                          </b-form-group>
                        </b-col>
                      </b-row>
                    </b-tab>
                  </b-tabs>
                </b-card>
              </b-col>
            </b-row>
          </b-container>
        </b-modal>

        <div class="page-header">
          <h3 class="page-title">
            User Accounts
          </h3>
          <div class="">
            <b-button v-b-modal.AddLog class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Add User
            </b-button>
            <b-button v-b-modal.AddLog class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-settings" />
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
                  <el-dropdown-item v-b-modal.EditResident @click="action.value">Edit</el-dropdown-item>
                  <el-dropdown-item v-b-modal.AddContacts>Change Password</el-dropdown-item>
                  <el-dropdown-item v-b-modal.AddMedication>Delete</el-dropdown-item>
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
          Name: 'Paul Mitchell',
          Username: 'Dickerson',
          Access_role: 'Facility Admin',
          Email: 'pmell393@gmail.com',
          Phone: '(715) 602-95',
          Last_Login: '4/26/22 225 PM (68.134.50.67)',
          action: 2,
        },
      ],
      options: [
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
.checkbox:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
