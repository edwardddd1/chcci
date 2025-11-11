export const studentRoute = (prop) => [{
  path: '/student/dashboard',
  name: prop + '.dashboard',
  meta: {
    auth: true,
    name: 'Dashboard',
    user: 'student'
  },
  component: () => import('../views/student/dashboard.vue')
},
{
  path: '/student/enrollment/certification',
  name: prop + '.enrollment-certification',
  meta: {
    auth: true,
    name: 'Enrollment Certification',
    user: 'student'
  },
  component: () => import('../views/student/dashboard.vue')
},
{
  path: '/student/payment/current-payment',
  name: prop + '.current-payment',
  meta: {
    auth: true,
    name: 'Payment Overview',
    user: 'student'
  },
  component: () => import('../views/student/payment/overview.vue')
},
{
  path: '/student/payment/payment-history',
  name: prop + '.payment-history',
  meta: {
    auth: true,
    name: 'Payment Assessment History',
    user: 'student'
  },
  component: () => import('../views/student/dashboard.vue')
},
{
  path: '/student/payment/payment-history',
  name: prop + '.payment-history',
  meta: {
    auth: true,
    name: 'Payment History',
    user: 'student'
  },
  component: () => import('../views/student/dashboard.vue')
},
{
  path: '/student/onboard/enrollment',
  name: prop + '.onboard-enrollment',
  meta: {
    auth: true,
    name: 'Onboard Training Enrollment',
    user: 'student'
  },
  component: () => import('../views/student/onboard/enrollment/enrollment-overview.vue')
},
{
  path: '/student/onboard/assessment/view',
  name: prop + '.onboard-assessment-view',
  meta: {
    auth: true,
    name: 'Assessment',
    user: 'student'
  },
  component: () => import('../views/student/onboard/assessment/AssessmentView.vue')
},
{
  path: '/student/onboard/assessment/questioner',
  name: prop + '.onboard-questioner-view',
  meta: {
    auth: true,
    name: 'Examination',
    user: 'student'
  },
  component: () => import('../views/student/onboard/assessment/QuestionerView.vue')
},
{
  path: '/student/bma-applications',
  name: prop + '.mobile-applications',
  meta: {
    auth: true,
    name: 'BMA App',
    user: 'student'
  },
  component: () => import('@/views/student/MobileApplicationView.vue')
}
]
