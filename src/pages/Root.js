import React, {Fragment} from 'react';

import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/UI/MainNavigation';
import FotterNavigation from '../components/UI/FotterNavigation';

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <Outlet />
            <FotterNavigation />
        </Fragment>
    );
};

export default RootLayout;