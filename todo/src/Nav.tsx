import { useState, useEffect } from 'react';

const Menu = ({ deleteHandler }:{ deleteHandler: Function }) => {

    const [menu, setNav] = useState([
		{ Id: Math.random(), Name: `Home` },
		{ Id: Math.random(), Name: `Shop` },
	])

    return (
        <div className="menu">
            {menu.map((item: any) => (
                <div className="item" key={item.Id}>
                    <p>{ item.Name }</p>
                </div>
            ))}
        </div>
    )
}
 
export default Menu