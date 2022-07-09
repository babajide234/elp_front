<template>
  <b-row>
    <b-col>
      <b-row>
        <b-col>
          <div class="col-lg-12">
            <div class="page-header">
              <h3 class="page-title">Facility Information</h3>
              <div class="">
                <b-button
                  v-b-modal.AddLog
                  class="btn btn btn-gradient-primary btn-fw btn-secondary"
                >
                  <i class="mdi mdi-plus" />
                  Edit
                </b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="col-lg-12">
            <div class="card p-4">
              <b-row>
                <b-col lg="5">
                  <b-form-group
                    id="fieldset-1"
                    label="Facility Name"
                    label-for="role"
                  >
                    <b-form-input id="Name" type="text" />
                  </b-form-group>
                  <b-form-group
                    id="fieldset-1"
                    label="Address"
                    label-for="role"
                  >
                    <b-form-textarea placeholder="Address" />
                  </b-form-group>
                  <b-form-group
                    id="fieldset-1"
                    label="Primary Phone"
                    label-for="role"
                  >
                    <b-form-input id="Name" type="tel" />
                  </b-form-group>
                  <b-form-group
                    id="fieldset-1"
                    label="Secondary Phone"
                    label-for="role"
                  >
                    <b-form-input id="Name" type="tel" />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-row>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Legal Name"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="License"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Region"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="City"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="County"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="State"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Fax"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="After"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-row>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="country"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Ownership"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                    <b-col lg="4">
                      <b-form-group id="fieldset-1" label="" label-for="role">
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col lg="4">
                      <b-form-group
                        id="fieldset-1"
                        label="Zip"
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
                        label="Administrator 3"
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
                        label="Administrator 4"
                        label-for="role"
                      >
                        <b-form-input id="Name" type="text" />
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data() {
    // inputs:{
    //   'FACILITY NAME',
    //   'ADDRESS',
    //   'PRIMARY PHONE',
    //   'SECONDARY PHONE',
    //   'LEGAL NAME',
    //   'CITY',
    //   'COUNTY',
    //   'FAX',
    //   'AFTER:',
    //   'LICENSE ',
    //   'REGION',
    //   'COUNTRY',
    //   'OWNERSHIP',
    //   'Non-Profit',
    //   'STATE',
    //   'ZIP',
    //   'LAST FULL STATE INSPECTION',
    //   'ADMINISTRATOR 1',
    //   'ADMINISTRATOR 2',
    //   'ADMINISTRATOR 3',
    //   'ADMINISTRATOR 4',
    //   'NON-ADMIN ACCESS LIST',
    //   'ROOM NUMBERS (COMMA SEPARATED)',
    //   'PREFERENCES POSITION ON RESIDENT PROFILE',
    //   'DEFAULT RESIDENT FILE FOLDERS (ONE PER LINE)',
    //   'DEFAULT STAFF MEMBER FILE FOLDERS (ONE PER LINE)',
    //   'HIDE ADL TRACKER',
    //   'TIME ZONE',
    //   'ADDITIONAL CARE LEVELS (ONE PER LINE)',
    //   'DEFAULT DAILY MEDS ORDERING',
    //   'CALL BELLS (ONE PER LINE)',
    //   'SHOW FORM META DATA',
    //   'STORE RESIDENT ADDRESSES',
    //   'HIDE CARE LEVEL LOG',
    // };
  },
};
</script>
