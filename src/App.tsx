import './styles/global.scss';
import {MainScreen} from "./screens/MainScreen.tsx";
import {useEffect} from "react";
import {appStore} from "./data/stores/app.store.ts";

function App() {
    function updateIsMobile() {
        const isMobile = self.innerWidth <= 1125;
        if (isMobile != appStore.getIsMobile) {
            appStore.setIsMobile(isMobile);
            appStore.setIsOpenLeftSidebar(false);
        }
    }

    useEffect(() => {
        updateIsMobile();
        self.addEventListener('resize', updateIsMobile);

        return () => {
            self.removeEventListener('resize', updateIsMobile);
        };
    });

    return <MainScreen/>;

}

export default App
