/* eslint-disable curly */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
import Vue from 'vue';
import VueRouter from 'vue-router'
import LoginView from '../components/LoginView';
// import Dashboard from '../components/Dashboard';
// import Home from '../components/Home';
import Logout from '../components/Logout';
import Register from '@/pages/samples/auth-pages/register';
// import Profile from '@/pages/dashboard/profile/profile';
import layout from '../layout';
import store from '../store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

Vue.use(VueRouter)

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/pages/dashboard'),
          meta: {
            requiresAuth: true
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      component: layout,
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('@/pages/dashboard/profile/profile'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/residents',
      component: layout,
      children: [
        {
          path: '',
          name: 'residents',
          component: () => import('@/pages/dashboard/residents/residents'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/manageresidents',
      component: layout,
      children: [
        {
          path: '',
          name: 'manageresidents',
          component: () => import('@/pages/dashboard/residents/manageresidents'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/team',
      component: layout,
      children: [
        {
          path: '',
          name: 'team',
          component: () => import('@/pages/dashboard/team/team'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/facility',
      component: layout,
      children: [
        {
          path: '/',
          name: 'comunication',
          component: () => import('@/pages/dashboard/facility/facility'),
        },
        {
          path: '/info',
          name: 'info',
          component: () => import('@/pages/dashboard/facility/info'),
        },
        {
          path: '/accounts',
          name: 'accounts',
          component: () => import('@/pages/dashboard/facility/accounts'),
        },
        {
          path: '/group',
          name: 'group',
          component: () => import('@/pages/dashboard/facility/group'),
        },
        {
          path: '/permisions',
          name: 'permisions',
          component: () => import('@/pages/dashboard/facility/permisions'),
        },
        {
          path: '/types',
          name: 'types',
          component: () => import('@/pages/dashboard/facility/types'),
        },
        {
          path: '/cash',
          name: 'cash',
          component: () => import('@/pages/dashboard/facility/cash'),
        },
        {
          path: '/files',
          name: 'files',
          component: () => import('@/pages/dashboard/facility/files'),
        },
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/activities',
      component: layout,
      children: [
        {
          path: '/',
          name: 'activities',
          component: () => import('@/pages/dashboard/tasklist/activities'),
        },
        {
          path: '/todo',
          name: 'todo',
          component: () => import('@/pages/dashboard/tasklist/todo'),
        },
        {
          path: '/editservice',
          name: 'editservice',
          component: () => import('@/pages/dashboard/tasklist/editservice'),
        },
        {
          path: '/edittask',
          name: 'edittask',
          component: () => import('@/pages/dashboard/tasklist/edittask'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/staff',
      component: layout,
      children: [
        {
          path: '/certification',
          name: 'certification',
          component: () => import('@/pages/dashboard/staff/certification'),
        },
        {
          path: '/stafftypes',
          name: 'stafftypes',
          component: () => import('@/pages/dashboard/staff/stafftype'),
        },
        {
          path: '/stafflist',
          name: 'staff',
          component: () => import('@/pages/dashboard/staff/stafflist'),
        },
        {
          path: '/staffgroups',
          name: 'staffgroups',
          component: () => import('@/pages/dashboard/staff/staffgroups'),
        },
        {
          path: '/useraccounts',
          name: 'useraccounts',
          component: () => import('@/pages/dashboard/staff/useraccounts'),
        },
        {
          path: '/staffschedule',
          name: 'staffschedule',
          component: () => import('@/pages/dashboard/staff/staffschedule'),
        },
        {
          path: '/timeclock',
          name: 'timeclock',
          component: () => import('@/pages/dashboard/staff/timeclock'),
        },
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/comunication',
      component: layout,
      children: [
        {
          path: '',
          name: 'team',
          component: () => import('@/pages/dashboard/comunication/comunication'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contacts',
      component: layout,
      children: [
        {
          path: '/',
          name: 'contacts',
          component: () => import('@/pages/dashboard/contacts/contacts'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/forms',
      component: layout,
      children: [
        {
          path: '/',
          name: 'forms',
          component: () => import('@/pages/dashboard/forms/forms'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/updates',
      component: layout,
      children: [
        {
          path: '/',
          name: 'updates',
          component: () => import('@/pages/dashboard/update/update'),
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/complete_invite',
      name: 'complete_invite',
      component: () => import('@/pages/dashboard/completeInvite/complete.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const loggedIN = store.getters['User/loggedIn'];
  console.log(requiresAuth, 'Auth');
  console.log(loggedIN, 'store');

  // this route requires auth, check if logged in
  // if not, redirect to login page.
  // if (requiresAuth && !loggedIN) next({ name: 'Login' })
  // else next();

  if (requiresAuth && !loggedIN) {
    next({ name: 'Login' })
    console.log(requiresAuth && !loggedIN, 'redirected');
    NProgress.done();
    console.log(requiresAuth && !loggedIN);
  } else {
    const UserInfo = store.dispatch('User/getInfo');
    console.log(UserInfo, 'authenticated');
    next() // go to wherever I'm going
    NProgress.done();
  }
  console.log('requires auth');
  console.log(requiresAuth && !loggedIN, 'auth');
});

export function resetRouter() {
  const newRouter = router();
  router.matcher = newRouter.matcher;
  // reset router
}
router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});

export default router;
