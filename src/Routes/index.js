import { DefaultLayout } from "~/components/Layouts";
import Following from "~/pages/Following/Following";
import Home from "~/pages/Home/Home";

// public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
