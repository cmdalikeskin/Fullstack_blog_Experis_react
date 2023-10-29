import { Link } from "react-router-dom"

function AdminTableItem({ blogData, id, title, deleteSingleItem }) {
    return (
        <div className="table-body row">
            <div className="grid-item checkbox-container">
                <input type="checkbox" value={id} 
                onChange={() =>console.log(id)}
                />
            </div>
            <div className="grid-item test">{id}</div>
            <div className="grid-item">{title}</div>
            <div className="grid-item action-button-container">
                <Link to='/' state={blogData}>
                    <button className="action-button edit">
                        Edit
                    </button>
                </Link>
                <button className="action-button delete" onClick={deleteSingleItem}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default AdminTableItem