import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../container";
import { AboutUs, ContactUs, Home, OurServices, Portofolio } from "../container/screens";
import Video_Screen from "../container/screens/Video_screen/Video_Screen";

const appRoutes = [
    { path: '/', element: <Dashboard /> },
    { path: '/:id', element: <Video_Screen /> },
    // { path: '/:catigory/:title', element: <AboutUs /> },
    // { path: '/contact', element: <ContactUs /> },
    // { path: '/VideoIframe', element: <Video_Screen /> },
    // { path: '/VideoIframe:id', element: <Video_Screen /> },
    // { path: '/portfolio', element: <Portofolio /> },
    // { path: '/ourservices', element: <OurServices /> },
]

const routes = createBrowserRouter(appRoutes)

export { routes };