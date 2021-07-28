import { PATHS } from "../config";
import LandingPage from "../containers/LandingPage";
import Signup from "../containers/Signup";

const routes = [
    { exact: true, path: PATHS.LANDING, component: LandingPage },
    { exact: true, path: PATHS.SIGNUP, component: Signup }
]

export default routes