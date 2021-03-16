import './App.css';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	RouteComponentProps
} from "react-router-dom";
import routes from './routes';


const App = () => {

	const someAction = (Id: number) => {
		console.log('some action')
	}

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		console.log('use effect maybe for fetch')
	// 		console.log('list', list)
	// 	}
	// 	fetchData()
	// }, [list])

	return (
		<Router>
			<div className="App">
				<Nav deleteHandler={someAction} />
				<h1>App</h1>
				<Switch>
					{routes.map((route: any, index: number) => {
						return (
							<Route 
								key={index}
								path={route.path} 
								exact={route.exact}
								render={(props: RouteComponentProps<any>) => (
									<route.component
										name={route.name}
										{...props}
										{...route.props}
									/>
								)} />
						)
					})}
				</Switch>
			</div>
		</Router>
	);
}

export default App