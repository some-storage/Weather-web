import { Route, Routes } from "react-router-dom";
import WeatherInfo from "./pages/weatherInfo/WeatherInfo";
import WeatherSelect from "./pages/weatherSelect/WeatherSelect";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                exact={true}
                element={<WeatherSelect />}
            />
            <Route
                path="/detail/:location"
                element={<WeatherInfo />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
}

export default App;
