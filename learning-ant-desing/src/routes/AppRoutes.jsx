import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Playground from "../pages/Playground/Playground";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/playground" element={<Playground />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="*" element={<Navigate to="/playground" />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;
