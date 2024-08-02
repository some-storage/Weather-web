import { createBrowserRouter } from "react-router-dom";
import WeatherSelect from "./pages/weatherSelect/WeatherSelect";
import WeatherInfo from "./pages/weatherInfo/WeatherInfo";
import NotFound from "./pages/notFound/NotFound";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <WeatherSelect />,
        errorElement: <NotFound />,
    },
    {
        path: "/detail/:location",
        element: <WeatherInfo />,
    },
]);

export default Router;
