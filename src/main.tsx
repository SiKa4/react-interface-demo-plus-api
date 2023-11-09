import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import { Provider as ReduxProvider } from 'react-redux'
import {AppStoreRedux} from "./data/stores/app.store.ts";
import {api} from "./api_request/api-request.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReduxProvider store={AppStoreRedux}>
            <ApiProvider api={api}>
                <App/>
            </ApiProvider>
        </ReduxProvider>
    </React.StrictMode>,
)
