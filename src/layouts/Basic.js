import * as React from "react"
import { Header, Footer } from '../components';
import './Basic.css';

export const BasicLayout = ( { children }) => {
    return <>
        <Header />
        <div className="site-content content">
            {children}
        </div>
        <Footer />
    </>
}
