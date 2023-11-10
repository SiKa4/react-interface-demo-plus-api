import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider as ReduxProvider} from 'react-redux'
import {AppStoreRedux} from "./data/stores/app.store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ReduxProvider store={AppStoreRedux}>
            <App/>
        </ReduxProvider>
    </React.StrictMode>,
)
