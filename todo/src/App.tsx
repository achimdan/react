import './App.css';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import List from './List';

const App = () => {

	const [list, setList] = useState([
		{ Id: Math.random(), Name: `ToDo ${Math.random()}` },
		{ Id: Math.random(), Name: `ToDo ${Math.random()}` },
		{ Id: Math.random(), Name: `ToDo ${Math.random()}` },
	])

	const addItem = () => {
		const newList = list.concat({ Id: Math.random(), Name: `ToDo ${Math.random()}` })
		setList(newList)
		console.log('add', newList)
	}

	const deleteHandler = (Id: number) => {
		const newList = list.filter((item: { Id: number }) => item.Id !== Id)
		setList(newList)
	}

	useEffect(() => {
		const fetchData = () => {
			console.log('use effect maybe for fetch')
			console.log('list', list)
		}
		fetchData()
	}, [list])

	return (
		<div className="App">
			<Nav deleteHandler={ deleteHandler }/>
			<h1>App</h1>
			<p>
				<button onClick={ addItem }>Push</button>
			</p>
			<List list={ list } deleteHandler={ deleteHandler } />
			{/* <List list={ list.filter(el => el.Id > 1) }/> */}
		</div>
	);
}

export default App
