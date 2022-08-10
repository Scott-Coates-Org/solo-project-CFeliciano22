
import logo from './logo.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Swap from './components/Swap/Swap'
import Transactions from './components/Transaction/transaction'
import Resources from './components/Resources/Resources'

function App() {
	return (
		<div className="App">
			<Nav/>
			<Home/>
			<Swap/>
			<Transactions/>
			<Resources/>
		</div>
	)
}

export default App
