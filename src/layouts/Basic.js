import * as React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from '../components';
import favicon from '../images/kairos_favicon.png';
import './Basic.css';


export const BasicLayout = ({ children }) => {
    return <>
        <Helmet>
            <title>Karios Church</title>
            <link rel="icon" href={favicon} />
        </Helmet>
        <Header />
        <div className="site-content content">
            {children}
        </div>
        <Footer />
    </>
}
