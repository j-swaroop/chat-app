import { BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./components/Home"
import CreateNewCharacter from './components/CreateNewCharacter'
import EachChat from "./components/EachChat"
import './App.css'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/characternew' component={CreateNewCharacter} />
            <Route exact path="/character-ai-chat/:id" component={EachChat} />
        </Switch>
    </BrowserRouter>
    
)
    

export default App