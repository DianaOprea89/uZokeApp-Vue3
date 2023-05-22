import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../components/HomeView.vue"
import AboutView from "../components/AboutView.vue"
import SleepingView from "../components/SleepingView.vue"
import FeedingView from "../components/FeedingView.vue"
import SolidsView from "../components/SolidsView.vue"
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes :[
        {
        path:"/",
        name:"home",
        component: HomeView
        },
        {
            path:"/home",
            redirect:"/"
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/sleeping",
            name: "sleeping",
            component: SleepingView
        },
        {
            path: "/feeding",
            name: "feeding",
            component: FeedingView
        },
        {
            path: "/solids",
            name: "solids",
            component: SolidsView
        }
        ]
});
export default router;
