// import axios from 'axios';
// import store from '@/store';
import { login, logout, getInfo, register, invite, list, resident, getresident, singleresident } from '@/api/auth';
import { resetRouter } from '@/router';
const state = {
  user: {
    id: null,
    token: localStorage.getItem('Token') || null,
    user: null,
    name: '',
    avatar: '',
    roles: [],
    permissions: [],
  },
};
const getters = {
  loggedIn: (state) => {
    if (state.user.token !== null) {
      return true;
    } else {
      return false;
    }
  },
};
const actions = {
  loginUser({ commit }, user) {
    const { email, password } = user;
    return new Promise((resolve, reject) => {
      login({
        email: email.trim(),
        password: password,
      }).then(response => {
        console.log(response);
        if (response.token){
          const token = response.token;

          localStorage.setItem('Token', token);
          commit('SET_TOKEN', token);
          resolve(response);
        }
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  },
  register({  }, data){
    return new Promise((_resolve, reject) => {
      register({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        company: data.company,
        slug: data.slug,
        phone_number: data.phone_number,
        address: data.address,
        confirm_password: data.confirm_password,
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    });
  },
  destroyToken(context) {
    if (context.getters.loggedIn) {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          console.log(response);
          localStorage.removeItem('Token');
          context.commit('destroyToken');
          resolve(response);
        }).catch(error => {
          localStorage.removeItem('Token');
          context.commit('destroyToken');
          reject(error);
        });
      });
    }
  },
  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          localStorage.removeItem('Token');
          commit('destroyToken');
          resetRouter();
          resolve();
        })
        .catch(error => {
          localStorage.removeItem('Token');
          commit('destroyToken');
          resetRouter();
          reject(error);
        });
    });
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      localStorage.removeItem('Token');
      commit('destroyToken');
      resolve();
    });
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then(response => {
          console.log(response);
          const { data } = response;

          if (!data) {
            reject('Verification failed, please Login again.');
          }
          console.log(response.data[0].roles, 'roles');
          // console.log(permissions, 'permissions');
          // roles must be a non-empty array
          if (!response.data[0].roles || response.data[0].roles.length <= 0) {
            reject('getInfo: roles must be a non-null array!');
          }

          commit('SET_ROLES', response.data[0].roles);
          commit('SET_PERMISSIONS', response.data[0].permissions);
          commit('SET_NAME', response.data[0].name);
          commit('SET_EMAIL', response.data[0].email);
          commit('SET_AVATAR', response.data[0].avatar);
          commit('SET_ID', response.data[0].id);
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  inviteTeam({  }, data) {
    return new Promise((resolve) => {
      invite({
        roles: data.roles,
        email: data.email,
      })
        .then(response => {
          console.log(data);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  listUsers({  }){
    return new Promise((resolve) => {
      list()
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  addResident({  }, data){
    return new Promise((resolve) => {
      getresident({
        first_name: data.contact_Info.first_name,
        middle_name: data.contact_Info.middle_name,
        last_name: data.contact_Info.last_name,
        nick_name: data.contact_Info.nick_name,
        dob: data.contact_Info.dob,
        mobile_phone: data.contact_Info.mobile_phone,
        home_phone: data.contact_Info.home_phone,
        email: data.contact_Info.email,
        physical_address: {
          address_line_1: data.physical_address.address_line_1,
          address_line_2: data.physical_address.address_line_1,
          city: data.physical_address.city,
          state: data.physical_address.state,
          zip: data.physical_address.zip,
        },
        previous_address: {
          address_line_1: data.previous_address.address_line_1,
          address_line_2: data.previous_address.address_line_1,
          city: data.previous_address.city,
          state: data.previous_address.state,
          zip: data.previous_address.zip,
        },
        mailing_address: {
          address_line_1: data.mailing_address.address_line_1,
          address_line_2: data.mailing_address.address_line_1,
          city: data.mailing_address.city,
          state: data.mailing_address.state,
          zip: data.mailing_address.zip,
        },
        admission_info: {
          ssn: data.admission_info.ssn,
          pob: data.admission_info.pob,
          medica_rec_no: data.admission_info.medica_rec_n,
          medical_id_no: data.admission_info.medical_id_no,
          gender: data.admission_info.gender,
          race: data.admission_info.rac,
          hair_color: data.admission_info.hair_color,
          eye_color: data.admission_info.eye_color,
          marital_status: data.admission_info.marital_status,
          referral_type: 'something',
          height: data.admission_info.height,
          weight: data.admission_info.weight,
          religion: data.admission_info.religion,
          mobility_needs: data.admission_info.mobility_needs,
          language: data.admission_info.language,
          means_communication: data.admission_info.means_communication,
          level_care: data.admission_info.level_care,
          vehicle_information: data.admission_info.vehicle_information,
          email: data.contact_Info.email,
          identifying_mark: data.admission_info.identifying_mark,
          special_note: data.admission_info.special_note,
          scheduled_days: {
            monday: data.admission_info.scheduled_days.monday,
            tuesday: data.admission_info.scheduled_days.tuesday,
            wednesday: data.admission_info.scheduled_days.wednesday,
            thursday: data.admission_info.scheduled_days.thursday,
            friday: data.admission_info.scheduled_days.friday,
          },
          pick_up_days: {
            monday: data.admission_info.pick_up_days.monday,
            tuesday: data.admission_info.pick_up_days.tuesday,
            wednesday: data.admission_info.pick_up_days.wednesday,
            thursday: data.admission_info.pick_up_days.thursday,
            friday: data.admission_info.pick_up_days.friday,
          },
          drop_off_day: {
            monday: data.admission_info.drop_off.monday,
            tuesday: data.admission_info.drop_off.tuesday,
            wednesday: data.admission_info.drop_off.wednesday,
            thursday: data.admission_info.drop_off.thursday,
            friday: data.admission_info.drop_off.friday,
          },
        },
        flags: {
          two_person_assist_mobilty: data.flags.two_person_assist_mobilty,
          advanced_directive: data.flags.advanced_directive,
          alcohol_order: data.flags.alcohol_order,
          beauty_shop: data.flags.beauty_shop,
          chf_factors: data.flags.chf_factors,
          cpr: data.flags.cpr,
          decision_making_capacity_risk: data.flags.decision_making_capacity_risk,
          dementia: data.flags.dementia,
          diabetic: data.flags.diabetic,
          dni: data.flags.dni,
          dnr_order_signed_by_physician: data.flags.dnr_order_signed_by_physician,
          do_not_intubate: data.flags.do_not_intubate,
          elopment_risk: data.flags.elopment_risk,
          etoh_use: data.flags.etoh_use,
          fall_risk: data.flags.fall_risk,
          flight_risk: data.flags.flight_risk,
          food_allergies: data.flags.food_allergies,
          full_code: data.flags.full_code,
          guadianship: data.flags.guadianship,
          history_of_illicit_drug_use: data.flags.history_of_illicit_drug_use,
          iddm: data.flags.iddm,
          laundry: data.flags.laundry,
          living_will: data.flags.living_will,
          living_will_dnr: data.flags.living_will_dnr,
          medicine_allergies: data.flags.medicine_allergies,
          molst: data.flags.molst,
          most: data.flags.most,
          newspaper: data.flags.newspaper,
          non_english_speaking: data.flags.non_english_speaking,
          ohdnr: data.flags.ohdnr,
          other_allergies: data.flags.other_allergies,
          pacemaker: data.flags.pacemaker,
          polst: data.flags.polst,
          post: data.flags.post,
          power_of_attorney: data.flags.power_of_attorney,
          proxy_caregiver: data.flags.proxy_caregiver,
          receiver_antibiotics: data.flags.receiver_antibiotics,
          receiver_anticoagulant: data.flags.receiver_anticoagulant,
          receiver_psychoropics: data.flags.receiver_psychoropics,
          resident_secure_demential_unit: data.flags.resident_secure_demential_unit,
          served_oversea: data.flags.served_oversea,
          smoker: data.flags.smoker,
          suffocation_risk: data.flags.suffocation_risk,
        },
        income: {
          city_subsidy: data.income.city_subsidy,
        },
        military_information: {
          air_force: data.military_information.air_force,
        },
        mail_preference: {
          open_all_email: data.mail_preference.open_all_email,
        },
      })
        .then(response => {
          console.log(response);
          console.log(data);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  Resident({  }){
    return new Promise((resolve) => {
      resident()
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
  SingleResident({  }, id){
    return new Promise((resolve) => {
      singleresident({
        data: id,
      })
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  },
};
const mutations = {
  SET_ID: (state, id) => {
    state.user.id = id;
  },
  SET_TOKEN: (state, token) => {
    state.user.token = token;
  },
  destroyToken: (state) => {
    state.user.token = null;
  },
  SET_NAME: (state, name) => {
    state.user.name = name;
  },
  SET_EMAIL: (state, email) => {
    state.user.email = email;
  },
  SET_AVATAR: (state, avatar) => {
    state.user.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.user.roles = roles;
  },
  SET_PERMISSIONS: (state, permissions) => {
    state.user.permissions = permissions;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
