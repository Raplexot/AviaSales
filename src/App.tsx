import { Nav } from './components/Navs/navs'
import './App.css'
import Header from './components/Header/Header'
import Ticket from './components/Ticket/Ticket'

const App = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className="Global">
                <Nav />
                <Ticket />
            </div>
        </>
    )
}

export default App
