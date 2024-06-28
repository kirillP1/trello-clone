import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { createReduxStore } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={createReduxStore()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
)
