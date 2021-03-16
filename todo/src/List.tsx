 const List = ({ list, deleteHandler }:{list: Array<{}>, deleteHandler: Function}) => {

    return (
        <div className="list">
            {list.map((item: any) => (
                <div className="item" key={item.Id}>
                    <p>{ item.Name }</p>
                    <button onClick={() => deleteHandler(item.Id)}>delete</button>
                </div>
            ))}
        </div>
    )
}
 
export default List