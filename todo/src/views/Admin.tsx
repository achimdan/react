
import React, { useEffect } from 'react';

const Admin: React.FunctionComponent<any> = (props) => {

    useEffect(() => {
		const fetchData = () => {
            console.log('admin', props)
        }
        fetchData()
	}, [])

    return (
        <div className="admin">
            <h1>Admin</h1>
        </div>
    )
}
 
export default Admin