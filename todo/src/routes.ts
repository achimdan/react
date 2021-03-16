import Admin from './views/Admin'
import Home from './views/Home';
import Shop from './views/Shop'

const routes:any = [
        {
            name: "home",
            path: "/",
            exact: true,
            component: Home
        },
        {
            name: "shop",
            path: "/shop/:id",
            exact: true,
            component: Shop,
        },
        {
            name: "admin",
            path: "/admin",
            exact: true,
            component: Admin
        }
    ]

export default routes;