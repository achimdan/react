import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@atlaskit/avatar';


const Menu = ({ deleteHandler }:{ deleteHandler: Function }) => {
    const [menu, setNav] = useState([
        { Id: Math.random(), Name: `Home`, To: '/' },
		{ Id: Math.random(), Name: `Shop`, To: '/shop/1' },
		{ Id: Math.random(), Name: `Admin`, To: '/admin' },
	])
    
    return (
        <div className="menu">
            <Avatar />
            {menu.map((item: any) => (
                <Link to={ item.To } className="item" key={item.Id}>
                    <p>{ item.Name }</p>
                </Link>
            ))}
        </div>
    )
}
 
export default Menu