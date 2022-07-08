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
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/emotion" element={<Emotion />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
