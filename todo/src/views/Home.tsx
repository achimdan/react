
import React, { useEffect } from 'react';

const Home: React.FunctionComponent<any> = (props) => {

    useEffect(() => {
		const fetchData = () => {
			console.log('Home')
		}
	}, [])

    return (
        <div className="home">
            <h1>Home</h1>
        </div>
    )
}
 
export default Home