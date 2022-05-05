import {FC} from 'react';
import {Outlet} from 'react-router-dom';


import {CarForm, Cars} from '../../components';
import css from './CarPage.module.css'

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <div className={css.wrap}>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarPage};