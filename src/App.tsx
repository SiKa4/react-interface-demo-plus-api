import './styles/global.scss';
import {MainScreen} from "./screens/MainScreen.tsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsMobile, setIsOpenLeftSidebar} from "./data/stores/actions/actions.ts";
import {RootState} from "./data/stores/app.store.ts";

function App() {
    const dispatch = useDispatch();
    const isMobile = useSelector((state : RootState) => state.store.isMobile);

    function updateIsMobile() {
        const isMobileValue = self.innerWidth <= 1125;
        if (isMobileValue != isMobile) {
            dispatch(setIsMobile(isMobileValue));
            dispatch(setIsOpenLeftSidebar(false));
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
