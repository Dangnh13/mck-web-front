import HomeView from '@/views/anonymous/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AboutView from '@/views/anonymous/AboutView.vue'
// Define route components
const routes = [
    {
        path: '/',
        components: {
            default: DashboardView,
            anonymous: HomeView,
        },
    },
    {
        path: '/about',
        components: {
            default: DashboardView,
            anonymous: AboutView,
        }
    },
    {
        path: '/404',
        components: {
            default: () => import('@/views/404View.vue'),
            anonymous: () => import('@/views/anonymous/404View.vue'),
        }
    },
    {
        // will match everything
        path: '/*', redirect: to => {
            console.log(to.fullPath)
            return { path: '/404' }
        }
    }

]

export default routes;
