import React from "react";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <div>
            <HashRouter>
                <AppRoutes />
            </HashRouter>
        </div>
    );
};

export default App;
