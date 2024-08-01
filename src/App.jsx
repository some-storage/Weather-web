import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherInfo from "./pages/weatherInfo/WeatherInfo";
import WeatherSelect from "./pages/weatherSelect/WeatherSelect";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
