/* eslint-disable vue/no-parsing-error */
/* eslint-disable vue/no-parsing-error */
/* eslint-disable vue/html-quotes */
/* eslint-disable vue/html-quotes */
<template>
  <section class="app-sidebar">
    <nav id="sidebar" class="sidebar sidebar-offcanvas">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <a href="javascript:void(0);" class="nav-link">
            <div class="nav-profile-image">
              <img :src="require('../../assets/images/faces/face1.jpg').default" alt="profile">
              <span class="login-status online" />
            </div>
            <div class="nav-profile-text d-flex flex-column">
              <span class="font-weight-bold mb-2">{{ this.$store.state.User.user.name }}</span>
              <span class="text-secondary text-small capitalize">{{ this.$store.state.User.user.roles[0] }}</span>
            </div>
            <i class="mdi mdi-bookmark-check text-success nav-profile-badge" />
          </a>
        </li>
        <li class="nav-item" @click="collapseAll">
          <router-link class="nav-link" to="/">
            <span class="menu-title">Dashboard</span>
            <i class="mdi mdi-home menu-icon" />
          </router-link>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'residents-dropdown'" class="nav-link">
            <span class="menu-title">Residents</span>
            <i class="menu-arrow" />
            <i class="mdi mdi-settings menu-icon" />
          </span>
          <b-collapse id="residents-dropdown" accordion="sidebar-accordion">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/residents">Residents Listing</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/manageresidents/">Manage Residents</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/comunication">
            <span class="menu-title">Comunication</span>
            <i class="mdi mdi-home menu-icon" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contacts">
            <span class="menu-title">Contacts</span>
            <i class="mdi mdi-phone menu-icon" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/forms">
            <span class="menu-title">Forms</span>
            <i class="mdi mdi-phone menu-icon" />
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/updates">
            <span class="menu-title">Update</span>
            <i class="mdi mdi-phone menu-icon" />
          </router-link>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'task-dropdown'" class="nav-link">
            <span class="menu-title">Task List</span>
            <i class="menu-arrow" />
            <i class="mdi mdi-settings menu-icon" />
          </span>
          <b-collapse id="task-dropdown" accordion="sidebar-accordion">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/activities">Activities</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/todo">To Do List</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/editservice">Edit Services</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/edittask">Edit Tasks</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'staff-dropdown'" class="nav-link">
            <span class="menu-title">Staff</span>
            <i class="menu-arrow" />
            <i class="mdi mdi-settings menu-icon" />
          </span>
          <b-collapse id="staff-dropdown" accordion="sidebar-accordion">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/stafflist">Staff List</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/stafftype">Staff Types</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/certification">Certification</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/staffgroups">Staff Groups</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/useraccounts">User Accounts</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/staffschedule">Staff Schedule</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/timeclock">Time Clock</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'facility-dropdown'" class="nav-link">
            <span class="menu-title">Facility</span>
            <i class="menu-arrow" />
            <i class="mdi mdi-settings menu-icon" />
          </span>
          <b-collapse id="facility-dropdown" accordion="sidebar-accordion">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/info">Facility Info</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/accounts">User Accounts</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/group">User Group</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/permisions">Form Permissions</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/types">Show/Hide Types</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/cash">Petty Cash</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/files">Files</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <span v-b-toggle="'settings_dropdown'" class="nav-link">
            <span class="menu-title">Settings</span>
            <i class="menu-arrow" />
            <i class="mdi mdi-settings menu-icon" />
          </span>
          <b-collapse id="settings_dropdown" accordion="sidebar-accordion">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <router-link class="nav-link" to="/profile">Profile</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/team">Team</router-link>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'sidebar',
  data() {
    return {
      collapses: [
        { show: false },
        { show: false },
        { show: false },
      ],
    };
  },
  watch: {
    $route() {
      document.querySelector('#sidebar').classList.toggle('active');
    },
  },
  mounted() {
    const body = document.querySelector('body');
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function(el) {
      el.addEventListener('mouseover', function() {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  },
  methods: {
    collapseAll() {
      var exp_elm = document.getElementsByClassName('show');
      if (exp_elm.length > 0) {
        var elm_id = exp_elm[0].id;
        this.$root.$emit('bv::toggle::collapse', elm_id);
      }
    },
  },
};
</script>
