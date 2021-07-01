
import React from 'react';
import Dashboard from "./components";
import { ToastProvider} from 'react-toast-notifications';

const DashboardPage = (props) => {
    return (<ToastProvider>
            <Dashboard  {...props}/>
    </ToastProvider>);
}


export default (DashboardPage);
