import Home from "../pages/home";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";
import Sigin from "../pages/Admin/Signin/Signin";
import GeneralLayout from "../layouts/GeneralLayout";



const routesAdmin = [
  { path: "/admin/login/*", layout: GeneralLayout, component: Sigin },
  { path: "/admin/contact", layout: GeneralLayout, component: Contact },
  { path: "/admin" , layout:GeneralLayout, component: AdminHome }
];

const routesGeneral = [
  { path: "/", layout: GeneralLayout, component: Home },
  { path: "*", layout: GeneralLayout, component: NotFound },
];

const projectRoutes = [...routesAdmin, ...routesGeneral];
export default projectRoutes;