import HomeView from '@/views/anonymous/HomeView.vue'
import AboutView from '@/views/anonymous/AboutView.vue'
// Define route components
const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: () => import('@/views/Index.vue'),
            anonymous: HomeView,
        },
        children: [
            // Dashboard
            {
                name: 'Dashboard',
                path: '',
                component: () => import('@/views/DashboardView'),
            },
            {
                name: 'User Profile',
                path: 'user',
                component: () => import('@/views/UserProfile'),
                meta: { requiresAuth: true }
              },
        ],
    },
    {
        path: '/about',
        name: 'about',
        components: {
            default: () => import('@/views/Index.vue'),
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
