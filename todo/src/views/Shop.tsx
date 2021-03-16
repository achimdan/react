import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import AddItem from '../Components/AddItem'

//  const List = ({ list, deleteHandler }:{list: Array<{}>, deleteHandler: Function}) => {
 const Shop: React.FunctionComponent<any & RouteComponentProps<any>> = (props: any) => {

    const [message, setMessage] = useState<string>('')
    
    const [list, setList] = useState([
        { Id: Math.random(), Name: `ToDo ${Math.random()}` },
        { Id: Math.random(), Name: `ToDo ${Math.random()}` },
        { Id: Math.random(), Name: `ToDo ${Math.random()}` },
    ])
    
    useEffect(() => {
        let id = props.match.params.id

        if(id) {
            setMessage(`Number is ${id}`)
        } else {
            setMessage(`No number`)
        }
		const fetchData = () => {
			console.log('Shop')
		}
        fetchData()
	}, [list])


    const addItem = () => {
		const newList = list.concat({ Id: Math.random(), Name: `ToDo ${Math.random()}` })
		setList(newList)
		console.log('add', newList)
	}

    const deleteHandler = (Id: number) => {
		const newList = list.filter((item: { Id: number }) => item.Id !== Id)
		setList(newList)
	}

    return (
        <div className="list">
            <h1>
                Shop {message}
            </h1>

            <AddItem />
<br/>
<br/>
            <button onClick={ addItem }>Push</button>
<br/>       
            {list.map((item: any) => (
                <div className="item" key={item.Id}>
                    <p>{ item.Name }</p>
                    <button onClick={() => deleteHandler(item.Id)}>delete</button>
                </div>
            ))}
        </div>
    )
}
 
export default withRouter(Shop)
