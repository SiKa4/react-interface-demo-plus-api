import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {api, store} from "./api_request/api-request.ts";
import {ApiProvider} from "@reduxjs/toolkit/dist/query/react";
import { Provider as ReduxProvider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <ApiProvider api={api}>
                <App/>
            </ApiProvider>
        </ReduxProvider>
    </React.StrictMode>,
)
