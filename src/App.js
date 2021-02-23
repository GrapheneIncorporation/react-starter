import './App.css';
import { Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<div className="important">
				<h2>
					Please <span>don't</span> change folder structure.
				</h2>
				<p>
					Make sure your routing goes only here in <span>app.js</span> file. All
					the routing and redux setup is done. You're ready to go....
					{/* <br /> */}
					Store your reusable components inside <span>
						components/common
					</span>{' '}
					folder.
				</p>
				<span>Graphene Inc. Pvt. Ltd.</span>
			</div>
			<Switch>{/* Route */}</Switch>
		</div>
	);
}

export default App;
