import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../components/Home"
import Cart from "../components/Cart"
import Restaurant from "../components/Restaurant"

import { lazy , Suspense } from "react"

const AboutUs = lazy(()=> import('../components/AboutUs'))

const appLayout = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: '/about',
                    element: 
                        <Suspense>
                            <AboutUs />
                        </Suspense>
                },
                {
                    path: '/cart',
                    element: <Cart />
                },
                {
                    path:'/restaurant/:id',
                    element: <Restaurant />
                }
            ]
        }
    ])

export default appLayout

