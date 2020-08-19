import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/:locale',
    name: 'statement',
    props: true,
    component: () => import('@/views/Statement.vue')
  },
  {
    path: `/:locale/ourstory`,
    name: 'our_story',
    props: true,
    component: () => import('@/views/OurStory.vue')
  },
  {
    path: '/:locale/projects',
    name: 'projects',
    props: true,
    component: () => import('@/views/Projects.vue')
  },
  {
    path: '/:locale/supportus',
    name: 'support_us',
    props: true,
    component: () => import('@/views/SupportUs.vue')
  },
  {
    path: '/:locale/news',
    name: 'news',
    props: true,
    component: () => import('@/views/News.vue')
  },
  {
    path: '/:locale/joinourteam',
    name: 'join_our_team',
    props: true,
    component: () => import('@/views/JoinOurTeam.vue')
  },
  {
    path: '/:locale/activityreports',
    name: 'activity_reports',
    props: true,
    component: () => import('@/views/ActivityReports.vue')
  },
  {
    path: '/:locale/privacypolicy',
    name: 'privacy_policy',
    props: true,
    component: () => import('@/views/PrivacyPolicy.vue')
  },
  {
    path: '/:locale/termsandconditions',
    name: 'terms_and_conditions',
    props: true,
    component: () => import('@/views/TermsAndConditions.vue')
  }
]

export default routes