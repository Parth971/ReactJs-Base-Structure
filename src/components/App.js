import 'assets/css/base.css';
import { HomePage } from "pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" Component={HomePage} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;