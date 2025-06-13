import GridLayout from './components/GridLayout';
import {Routes,Route} from 'react-router-dom'
import Devweb from "./Pages/Devweb.tsx";
import Data from "./Pages/Data.tsx";
import Education from "./Pages/Education.tsx";
import Competences from "./Pages/Competences.jsx";
const App = () => {
    return (
        <div>
            <main>
                <Routes>
                    <Route path="/" element={ <GridLayout/> } />
                    <Route path="/devweb" element={ <Devweb/> } />
                    <Route path="/data" element={ <Data/> } />
                    <Route path="/education" element={ <Education/> }/>
                    <Route path="/competences" element={ <Competences/> }/>
                </Routes>

            </main>

        </div>
    )
}
export default App;