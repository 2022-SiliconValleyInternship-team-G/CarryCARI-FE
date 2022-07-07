import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Emotion from "./pages/Emotion";
import Main from "./pages/Main";
import Result from "./pages/Result";
import Upload from "./pages/Upload";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h2>App.js</h2>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Upload" element={<Upload />} />
                    <Route path="/Emotion" element={<Emotion />} />
                    <Route path="/Result" element={<Result />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
