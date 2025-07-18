import './App.css'
import {useRoutes} from "react-router";
import {routes} from "./router.tsx";

function App() {
    const element = useRoutes(routes);
    return (
        <div className="h-full">
            {element}
        </div>
    )
}

export default App
