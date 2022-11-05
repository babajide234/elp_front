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
                        label="Date/Time"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="date" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Date/Time"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="time" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <!-- Toggle B -->
                      <b-form-group
                        id="fieldset-1"
                        label="Flag As Important"
                        label-for="role"
                      >
                        <div class="flex items-center justify-center w-full mb-12">
                          <label for="toggleB" class="flex items-center cursor-pointer">
                            <div class="relative">
                              <input id="toggleB" type="checkbox" class="sr-only checkbox">
                              <div class="block bg-gray-600 w-14 h-8 rounded-full " />
                              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
                            </div>
                          </label>

                        </div>
                      </b-form-group>

                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Group"
                        label-for="role"
                      >
                        <b-select id="Name" type="date" options="" />

                      </b-form-group>
                    </b-col>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label=""
                        label-for="role"
                      >
                        <b-input-group class="mt-3">
                          <b-form-input />
                          <b-input-group-append>
                            <b-button variant="outline-success">ADD GROUP</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        id="fieldset-1"
                        label="Date/Time"
                        label-for="role"
                      >
                        <b-form-textarea
                          id="textarea"
                          v-model="text"
                          placeholder="Enter something..."
                          rows="3"
                          max-rows="6"
                        />

                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-form-group
                        label="Lock Replies"
                      >
                        <b-form-checkbox-group
                          v-model="selected"
                          :options="options"
                          :aria-describedby="ariaDescribedby"
                          buttons
                          button-variant="primary"
                          size="lg"
                          name="buttons-2"
                        />
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
            Custom User Groups
          </h3>
          <div class="">
            <b-button v-b-modal.AddLog class="btn btn btn-gradient-primary btn-fw btn-secondary">
              <i class="mdi mdi-plus" />
              Add User Group
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
          Group_Members: 'Dickerson',
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
