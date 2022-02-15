import { FC, ReactElement } from 'react'
import { Nav } from './components/Navs/navs'
import './App.css'
import Header from './components/Header/Header'
import Ticket from './components/Ticket/Ticket'

const App: FC = () => {
    return (
        <>
            <Header />
            <div className="Global">
                <Nav />
            </div>
        </>
    )
}

export default App
