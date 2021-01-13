import * as React from "react"
import { BasicLayout } from './Basic';
import './PageLayout.css';

export const PageLayout = ( { children }) => {
    return <BasicLayout>
        <div className = { 'content--page'}>
            {children}
        </div>
    </BasicLayout>
}
