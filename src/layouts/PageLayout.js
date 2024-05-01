import * as React from "react";
import { Helmet } from "react-helmet";
import { BasicLayout } from './Basic';
import './PageLayout.css';

export const PageLayout = ({ children }) => {
    return <BasicLayout>
        <Helmet>
            <title>Karios Church</title>
        </Helmet>
        <div className={'content--page'}>
            {children}
        </div>
    </BasicLayout>
}
