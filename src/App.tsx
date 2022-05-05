import React, {FC} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarPage} from "./pages";
import {CarDetailsPage} from "./pages/CarDetailsPage/CarDetailsPage";

const App:FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetailsPage/>}/>
                </Route>
            </Route>
        </Routes>

    );
};

export {App};