<template>
  <b-form>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="First Name"
          label-for="role"
        >
          <b-form-input id="firstName" v-model="data.contact_Info.first_name" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="MIDDLE NAME"
          label-for="input-1"
        >
          <b-form-input id="Mid" v-model="data.contact_Info.middle_name" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="Last Name"
          label-for="input-1"
        >
          <b-form-input id="lastName" v-model="data.contact_Info.last_name" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="Nick Name"
          label-for="role"
        >
          <b-form-input id="nickName" v-model="data.contact_Info.nick_name" type="text" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="DATE OF BIRTH"
          label-for="role"
        >
          <b-form-input id="Dob" v-model="data.contact_Info.dob" :type="`date`" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="ROOM PHONE"
          label-for="input-1"
        >
          <b-form-input id="roomPhone" v-model="data.contact_Info.home_phone" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="CELL PHONE"
          label-for="input-1"
        >
          <b-form-input id="cellPhone" v-model="data.contact_Info.mobile_phone" type="text" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="SOCIAL SECUCRITY NUMBER"
          label-for="role"
        >
          <b-form-input id="SSN" v-model="data.admission_info.ssn" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="MID.REC.NUM."
          label-for="role"
        >
          <b-form-input id="midRecNum" v-model="data.admission_info.medica_rec_n" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="MID.ID.NUM."
          label-for="role"
        >
          <b-form-input id="midRecNum" v-model="data.admission_info.medical_id_no" type="text" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="RACE"
          label-for="role"
        >
          <b-form-select v-model="data.admission_info.rac" :options="Race" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="HAIR COLOR"
          label-for="role"
        >
          <b-form-input id="hairColor" v-model="data.admission_info.hair_color" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="EYE COLOR"
          label-for="role"
        >
          <b-form-input id="eyeColor" v-model="data.admission_info.eye_color" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="MARITAL STATUS"
          label-for="role"
        >
          <b-form-select v-model="data.admission_info.marital_status" :options="Marital_Status" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="GENDER"
          label-for="role"
        >
          <b-form-select id="gender" v-model="data.admission_info.gender" :options="Gender" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="PLACE OF BIRTH"
          label-for="role"
        >
          <b-form-input id="placeOfBirth" v-model="data.admission_info.pob" type="text" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="HEIGHT"
          label-for="role"
        >
          <b-form-input id="height" v-model="data.admission_info.height" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="WEIGHT"
          label-for="role"
        >
          <b-form-input id="weight" v-model="data.admission_info.weight" type="text" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="RELIGION"
          label-for="role"
        >
          <b-form-input id="religion" v-model="data.admission_info.religion" type="text" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <!-- <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="ADDMISION DATE"
          label-for="role"
        >
          <b-form-input id="addmision" v-model="data.admission_info." :type="`date`" />
        </b-form-group>
      </b-col>
    </b-form-row> -->
    <!-- <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="FINANCIAL ADDMISION DATE"
          label-for="role"
        >
          <b-form-input id="financialAddmissionDate" v-model="data.admission_info.Financial_Admission_Dates" :type="`date`" />
        </b-form-group>
      </b-col>
    </b-form-row> -->
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="MOBILITY NEEDS"
          label-for="role"
        >
          <b-form-select v-model="data.admission_info.mobility_needs" :options="Mobility_Needs" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="LANGUAGE"
          label-for="role"
        >
          <b-form-select v-model="data.admission_info.language" :options="Language" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="MEANS OF COMMUNICATION"
          label-for="role"
        >
          <b-form-input id="meansOfComunication" v-model="data.admission_info.means_communication" type="text" />
        </b-form-group>
      </b-col>
      <!-- <b-col sm="3">
        <b-form-group
          id="fieldset-1"
          label="USUAL OCCUPATION"
          label-for="role"
        >
          <b-form-input id="usalOccupation" v-model="data.admission_info.usalOccupation" type="text" />
        </b-form-group>
      </b-col> -->
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id=""
          label="LEVEL OF CARE"
          label-for="level"
        >
          <b-form-select v-model="data.admission_info.level_care" :options="Level_of_care_option" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id=""
          label="VEHICLE INFORMATION"
          label-for="level"
        >
          <b-form-input v-model="data.admission_info.vehicle_information" type="text" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id=""
          label="EMAIL ADDRESS"
          label-for="level"
        >
          <b-form-input v-model="data.contact_Info.email" type="text" />
        </b-form-group>
      </b-col>

    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="3">
        <b-form-group
          id=""
          label="RESIDENT FLAGS"
          label-for="level"
        >
          <div v-for="(item, key, index) in data.flags" :key="key" class="">
            <input :id="'checkbox_'+index" v-model="data.flags[key]" :name="'checkbox-'+index" type="checkbox">
            <label :for="'checkbox_'+index" class="capitalize">{{ key.replaceAll('_'," ") }}</label>
          </div>
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group
          id=""
          label="INCOME"
          label-for="level"
        >
          <div v-for="(item, key, index) in data.income" :key="key" class="">
            <input :id="'check_'+index" v-model="data.income[key]" :name="'check_'+index" type="checkbox">
            <label :for="'check_'+index" class="capitalize">{{ key.replaceAll('_'," ") }}</label>
          </div>
        </b-form-group>
      </b-col>
      <b-col sm="6">
        <b-form-group
          id=""
          label="IDENTIFYING MARKS"
          label-for="level"
        >
          <b-form-textarea v-model="data.admission_info.identifying_mark" />
        </b-form-group>
        <b-form-group
          id=""
          label="SPECIAL NOTE(SHOWN IN TOOLTIP AND PROFILE)"
          label-for="level"
        >
          <b-form-textarea v-model="data.admission_info.special_note" />
        </b-form-group>
        <b-form-group
          id=""
          label="MAIL PREFERENCE"
          label-for="level"
        >
          <div v-for="(item, key, index) in data.mail_preference" :key="key" class="">
            <input :id="'ch_'+index" v-model="data.mail_preference[key]" :name="'ch_'+index" type="checkbox">
            <label :for="'ch_'+index" class="capitalize">{{ key.replaceAll('_'," ") }}</label>
          </div>
        </b-form-group>
        <b-form-group
          id=""
          label="MILITARY BRANCH"
          label-for="level"
        >
          <div v-for="(item, key, index) in data.military_information" :key="key" class="">
            <input :id="'mil_'+index" v-model="data.military_information[key]" :name="'mil_'+index" type="checkbox">
            <label :for="'mil_'+index" class="capitalize">{{ key.replaceAll('_'," ") }}</label>
          </div>
          <!-- <b-form-select v-model="" :options="Military_Information_options" /> -->
        </b-form-group>
      </b-col>

    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="4">
        <h3>Physical Address</h3>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="4">
        <b-form-group
          id=""
          label="STREET ADDRESS"
          label-for="level"
        >
          <b-form-input v-model="data.physical_address.address_line_1" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="CITY"
          label-for="level"
        >
          <b-form-input v-model="data.physical_address.city" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="STATE"
          label-for="level"
        >
          <b-form-input v-model="data.physical_address.state" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="ZIP"
          label-for="level"
        >
          <b-form-input v-model="data.physical_address.zip" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="4">
        <h3>Mailing Address</h3>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="4">
        <b-form-group
          id=""
          label="STREET ADDRESS"
          label-for="level"
        >
          <b-form-input v-model="data.mailing_address.address_line_1" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="CITY"
          label-for="level"
        >
          <b-form-input v-model="data.mailing_address.city" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="STATE"
          label-for="level"
        >
          <b-form-input v-model="data.mailing_address.state" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="ZIP"
          label-for="level"
        >
          <b-form-input v-model="data.mailing_address.zip" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="4">
        <h3>Previous Address</h3>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col sm="4">
        <b-form-group
          id=""
          label="STREET ADDRESS"
          label-for="level"
        >
          <b-form-input v-model="data.previous_address.address_line_1" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="CITY"
          label-for="level"
        >
          <b-form-input v-model="data.previous_address.city" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="STATE"
          label-for="level"
        >
          <b-form-input v-model="data.previous_address.state" />
        </b-form-group>
      </b-col>
      <b-col sm="4">
        <b-form-group
          id=""
          label="ZIP"
          label-for="level"
        >
          <b-form-input v-model="data.previous_address.zip" />
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-row class="mb-4">
      <b-col>
        <b-button variant="success" @click="addResident">Submit</b-button>
      </b-col>
    </b-form-row>
  </b-form>
</template>

<script>
export default {
  name: 'AddResident',
  data() {
    return {
      data: {
        contact_Info: {
          first_name: '',
          middle_name: '',
          last_name: '',
          nick_name: '',
          dob: '',
          mobile_phone: '',
          home_phone: '',
          email: '',
        },
        physical_address: {
          address_line_1: '',
          address_line_2: '',
          city: '',
          state: '',
          zip: '',
        },
        previous_address: {
          address_line_1: '',
          address_line_2: '',
          city: '',
          state: '',
          zip: '',
        },
        mailing_address: {
          address_line_1: '',
          address_line_2: '',
          city: '',
          state: '',
          zip: '',
        },
        admission_info: {
          ssn: '',
          pob: '',
          medica_rec_n: '',
          medical_id_no: '',
          gender: '',
          rac: '',
          hair_color: '',
          eye_color: '',
          marital_status: '',
          referral_type: '',
          height: '',
          weight: '',
          religion: '',
          mobility_needs: '',
          language: '',
          means_communication: '',
          level_care: '',
          vehicle_information: '',
          email: '',
          identifying_mark: '',
          special_note: '',
          scheduled_days: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
          },
          pick_up_days: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
          },
          drop_off: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
          },
        },
        flags: {
          two_person_assist_mobilty: false,
          advanced_directive: false,
          alcohol_order: false,
          beauty_shop: false,
          chf_factors: false,
          cpr: false,
          decision_making_capacity_risk: false,
          dementia: false,
          diabetic: false,
          dni: false,
          dnr_order_signed_by_physician: false,
          do_not_intubate: false,
          elopment_risk: false,
          etoh_use: false,
          fall_risk: false,
          flight_risk: false,
          food_allergies: false,
          full_code: false,
          guadianship: false,
          history_of_illicit_drug_use: false,
          iddm: false,
          laundry: false,
          living_will: false,
          living_will_dnr: false,
          medicine_allergies: false,
          molst: false,
          most: false,
          newspaper: false,
          non_english_speaking: false,
          ohdnr: false,
          other_allergies: false,
          pacemaker: false,
          polst: false,
          post: false,
          power_of_attorney: false,
          proxy_caregiver: false,
          receiver_antibiotics: false,
          receiver_anticoagulant: false,
          receiver_psychoropics: false,
          resident_secure_demential_unit: false,
          served_oversea: false,
          smoker: false,
          suffocation_risk: false,
        },
        income: {
          city_subsidy: false,
        },
        military_information: {
          air_force: false,
        },
        mail_preference: {
          open_all_email: false,
        },
      },
      Race: [
        { value: null, text: 'Please select an option' },
        { value: 'African-American', text: 'African-American' },
        { value: 'Alaskan', text: 'Alaskan' },
        { value: 'American Indian', text: 'American Indian' },
        { value: 'Arab-Berber', text: 'Arab-Berber' },
        { value: 'Asian', text: 'Asian' },
        { value: 'Biracial', text: 'Biracial' },
        { value: 'Black', text: 'Black' },
        { value: 'Caucasian', text: 'Caucasian' },
        { value: 'Hispanic', text: 'Hispanic' },
        { value: 'Indian', text: 'Indian' },
        { value: 'Native American', text: 'Native American' },
        { value: 'Pacific Islander', text: 'Pacific Islander' },
        { value: 'Puerto Rican', text: 'Puerto Rican' },
        { value: 'White', text: 'White' },
      ],
      Marital_Status: [
        { value: null, text: 'Please select an option' },
        { value: 'Divorced', text: 'Divorced' },
        { value: 'Married', text: 'Married' },
        { value: 'Partnered', text: 'Partnered' },
        { value: 'Religious', text: 'Religious' },
        { value: 'Separated', text: 'Separated' },
        { value: 'Single', text: 'Single' },
        { value: 'Unknown', text: 'Unknown' },
        { value: 'Widowed', text: 'Widowed' },
      ],
      Gender: [
        { value: null, text: 'Please select an option' },
        { value: 'Male', text: 'Male' },
        { value: 'Female', text: 'Female' },
      ],
      Mobility_Needs: [
        { value: 'Independent (Mobile)', text: 'Independent (Mobile)' },
        { value: 'Minimal (Mobile)', text: 'Minimal (Mobile)' },
        { value: 'Moderate (Immobile)', text: 'Moderate (Immobile)' },
        { value: 'Total (Immobile)', text: 'Total (Immobile)' },
      ],
      Language: [
        { value: 'Chinese', text: 'Chinese' },
        { value: 'English', text: 'English' },
        { value: 'French', text: 'French' },
        { value: 'German', text: 'German' },
        { value: 'Hungarian', text: 'Hungarian' },
        { value: 'Italian', text: 'Italian' },
        { value: 'Romanian', text: 'Romanian' },
        { value: 'Russian', text: 'Russian' },
        { value: 'Spanish', text: 'Spanish' },
        { value: 'Yiddish', text: 'Yiddish' },
      ],
      Level_of_care_option: [
        { value: 'Level 1', text: 'Level 1' },
        { value: 'Level 2', text: 'Level 2' },
        { value: 'Level 3', text: 'Level 3' },
        { value: 'Level 4', text: 'Level 4' },
        { value: 'Level 5', text: 'Level 5' },
        { value: 'Basic', text: 'Basic' },
        { value: 'Personal Care', text: 'Personal Care' },
        { value: 'Assisted Living', text: 'Assisted Living' },
        { value: 'Care Plus', text: 'Care Plus' },
        { value: 'Secured Alzheimers', text: 'Secured Alzheimers' },
        { value: 'Directed Care', text: 'Directed Care' },
        { value: 'Supervisory Care', text: 'Supervisory Care' },
        { value: 'PC Basic', text: 'PC Basic' },
        { value: 'PC Level 1', text: 'PC Level 1' },
        { value: 'PC Level 2', text: 'PC Level 2' },
        { value: 'PC Level 3', text: 'PC Level 3' },
        { value: 'PC Level 4', text: 'PC Level 4' },
        { value: 'PC Level 5', text: 'PC Level 5' },
        { value: 'PC Level 6', text: 'PC Level 6' },
        { value: 'MCN Basic', text: 'MCN Basic' },
        { value: 'MCN Level 1', text: 'MCN Level 1' },
        { value: 'MCN Level 2', text: 'MCN Level 2' },
        { value: 'MCN Level 3', text: 'MCN Level 3' },
        { value: 'MCN Level 4', text: 'MCN Level 4' },
        { value: 'MCN Level 5', text: 'MCN Level 5' },
      ],
      ResidentFlags: [
        { value: '2 Person Assist - Mobility', text: '2 Person Assist - Mobility' },
        { value: 'Advanced Directive', text: 'Advanced Directive' },
        { value: 'Alcohol/Wine Order', text: 'Alcohol/Wine Order' },
        { value: 'Beauty Shop', text: 'Beauty Shop' },
        { value: 'CHF Factors', text: 'CHF Factors' },
        { value: 'CPR', text: 'CPR' },
        { value: 'Decision-Making Capacity Risk', text: 'Decision-Making Capacity Risk' },
        { value: 'Dementia', text: 'Dementia' },
        { value: 'Diabetic (NIDDM)', text: 'Diabetic (NIDDM)' },
        { value: 'DNI', text: 'DNI' },
        { value: 'DNR Order Signed by Physician', text: 'DNR Order Signed by Physician' },
        { value: 'Do not intubate', text: 'Do not intubate' },
        { value: 'Elopement Risk', text: 'Elopement Risk' },
        { value: 'ETOH Use', text: 'ETOH Use' },
        { value: 'Fall Risk', text: 'Fall Risk' },
        { value: 'Flight Risk', text: 'Flight Risk' },
        { value: 'Food Allergies', text: 'Food Allergies' },
        { value: 'Full Code', text: 'Full Code' },
        { value: 'Guardianship', text: 'Guardianship' },
        { value: 'History of illicit drug use', text: 'History of illicit drug use' },
        { value: 'IDDM', text: 'IDDM' },
        { value: 'Laundry', text: 'Laundry' },
        { value: 'Living Will', text: 'Living Will' },
        { value: 'Living Will (Contains DNR Request)', text: 'Living Will (Contains DNR Request)' },
        { value: 'Medicine Allergies', text: 'Medicine Allergies' },
        { value: 'MOLST', text: 'MOLST' },
        { value: 'MOST', text: 'MOST' },
        { value: 'Newspaper', text: 'Newspaper' },
        { value: 'Non-English Speaking', text: 'Non-English Speaking' },
        { value: 'OHDNR', text: 'OHDNR' },
        { value: 'Other Allergies', text: 'Other Allergies' },
        { value: 'Pacemaker', text: 'Pacemaker' },
        { value: 'POLST', text: 'POLST' },
        { value: 'POST', text: 'POST' },
        { value: 'Power Of Attorney', text: 'Power Of Attorney' },
        { value: 'Proxy Caregiver', text: 'Proxy Caregiver' },
        { value: 'Receives Antibiotics', text: 'Receives Antibiotics' },
        { value: 'Receives Anticoagulants', text: 'Receives Anticoagulants' },
        { value: 'Receives Psychotropics', text: 'Receives Psychotropics' },
        { value: 'Resident is in Secured Dementia Unit', text: 'Resident is in Secured Dementia Unit' },
        { value: 'Served Overseas', text: 'Served Overseas' },
        { value: 'Smoker', text: 'Smoker' },
        { value: 'Suffocation Risk', text: 'Suffocation Risk' },
      ],
      IncomeValues: [
        { value: 'City Subsidy', text: 'City Subsidy' },
        { value: 'Food Stamps', text: 'Food Stamps' },
        { value: 'Long Term Care Insurance', text: 'Long Term Care Insurance' },
        { value: 'Medicaid Waiver', text: 'Medicaid Waiver' },
        { value: 'Medical Assistance', text: 'Medical Assistance' },
        { value: 'Medical Insurance', text: 'Medical Insurance' },
        { value: 'Pace', text: 'Pace' },
        { value: 'PC Supplement', text: 'PC Supplement' },
        { value: 'Private', text: 'Private' },
        { value: 'Public Welfare', text: 'Public Welfare' },
        { value: 'Rep Payee', text: 'Rep Payee' },
        { value: 'Social Security', text: 'Social Security' },
        { value: 'SSDI', text: 'SSDI' },
        { value: 'SSI', text: 'SSI' },
        { value: 'Third Party Agreement', text: 'Third Party Agreement' },
        { value: 'Unknown', text: 'Unknown' },
        { value: 'Veterans Aid and Attendance', text: 'Veterans Aid and Attendance' },
      ],
      Mail_Preference_option: [
        { value: 'Open All Mail', text: 'Open All Mail' },
        { value: 'Open Medical Mail', text: 'Open Medical Mail' },
        { value: 'Open Personal Mail', text: 'Open Personal Mail' },
        { value: 'Open Financial Mail', text: 'Open Financial Mail' },
        { value: 'Forward Mail to Family', text: 'Forward Mail to Family' },
      ],
      Military_Information_options: [
        { value: 'Air Force', text: 'Air Force' },
        { value: 'Air Force Reserve', text: 'Air Force Reserve' },
        { value: 'Air National Guard', text: 'Air National Guard' },
        { value: 'Army', text: 'Army' },
        { value: 'Army National Guard', text: 'Army National Guard' },
        { value: 'Army Reserve', text: 'Army Reserve' },
        { value: 'Coast Guard', text: 'Coast Guard' },
        { value: 'Coast Guard Reserve', text: 'Coast Guard Reserve' },
        { value: 'Marine Corps', text: 'Marine Corps' },
        { value: 'Marine Corps Reserve', text: 'Marine Corps Reserve' },
        { value: 'Navy', text: 'Navy' },
        { value: 'Navy Reserve', text: 'Navy Reserve' },
      ],
    };
  },
  methods: {
    addResident() {
      this.$store.dispatch('User/addResident', this.data)
        .then(response => {
          this.$message({
            message: `${response.message}`,
            type: 'success',
            duration: 5 * 1000,
          });
          this.loading = true;
          this.$router.push({ name: 'dashboard' });
        });
    },
  },
};
</script>
