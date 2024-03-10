import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import Error from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employeeList" element={<EmployeeList />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
