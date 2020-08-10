import Statement from '@/views/Statement.vue'
import OurStory from '@/views/OurStory.vue'
import Projects from '@/views/Projects.vue'
import SupportUs from '@/views/SupportUs.vue'
import News from '@/views/News.vue'
import JoinOurTeam from '@/views/JoinOurTeam.vue'
import ActivityReports from '@/views/ActivityReports.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsAndConditions from '@/views/TermsAndConditions.vue'
import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Statement',
    component: Statement,
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('redirect') !== null) {
        const redirect = sessionStorage.redirect
        delete sessionStorage.redirect
        next(redirect)
      } else {
        next()
      }
    }
  },
  {
    path: '/ourstory',
    name: 'Our Story',
    component: OurStory,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/supportus',
    name: 'Support us',
    component: SupportUs,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/joinourteam',
    name: 'Join our team',
    component: JoinOurTeam
  },
  {
    path: '/activityreports',
    name: 'Activity reports',
    component: ActivityReports
  },
  {
    path: '/privacypolicy',
    name: 'Privacy policy',
    component: PrivacyPolicy
  },
  {
    path: '/termsandconditions',
    name: 'Terms and conditions',
    component: TermsAndConditions
  }
]

export default routes