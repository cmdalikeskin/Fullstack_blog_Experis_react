import { Link } from "react-router-dom";
import "../../css/AdminTable.css"
import "../../css/index.css"
import { blogContextData } from "../BlogContext"
import AdminTableItem from "./AdminTableItem";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminTable() {
    //Data retrieved using axios.get inside the CreateContext component
    const dataContext = blogContextData();
    const [selectedValues, setSelectedValues] = useState([])

    const deleteAllItems = (id) => {
        if (selectedValues.includes(id)) {
            setSelectedValues(selectedValues.filter(item => item !== id));
        } else {
            setSelectedValues([...selectedValues, id]);
        }
    }

    const deleteAllBlogs = async () => {
        axios.delete('http://localhost:4000/admin/edit', { data: selectedValues })
            .then(response => {
                console.log('Blogs deleted successfully');
                // Reload the page after deletion
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting blogs:', error);
            });

    }

    const deleteSingleItem = async (deleteID) => {
        axios.delete('http://localhost:4000/admin/edit', { data: [deleteID] })
            .then(response => {
                console.log('Blogs deleted successfully');
                // Reload the page after deletion
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting blogs:', error);
            });

    }

    return (
        <>
            <div className="main-header container">
                <h1>
                    Database
                </h1>
            </div>

            <div className="admin-table-container">

                <div className="grid-container">
                    {/* TABLE HEADER START*/}
                    <div className="admin-table-header row">
                        <div className="grid-item"> </div>
                        <div className="grid-item">ID</div>
                        <div className="grid-item">Title</div>
                        <div className="grid-item">Actions</div>
                    </div>
                    {/* TABLE HEADER END*/}

                    {dataContext
                        .sort((a, b) => a.id > b.id ? 1 : -1)
                        .map(data => (

                            < AdminTableItem
                                key={data.id}
                                blogData={data}
                                id={data.id}
                                title={data.title}
                                deleteAllItems={deleteAllItems}
                                deleteSingleItem={deleteSingleItem}
                            />



                        ))}

                    {/* Start of ROW */}
                    {/* <div className="table-body row">
                        <div className="grid-item checkbox-container">
                            <input type="checkbox" />
                        </div>
                        <div className="grid-item test">1</div>
                        <div className="grid-item">This is a title TXT</div>
                        <div className="grid-item action-button-container">
                            <Link to='admin/'
                            <button className="action-button edit" onClick={() => handleIdClicked(4)}>
                                Edit
                            </button>

                            <button className="action-button delete">
                                Delete
                            </button>
                        </div>
                    </div> */}
                    {/* End of ROW */}
                    <div className="delete-text-counter">
                        {selectedValues.length > 0 ? (
                            <div style={{ marginTop: "2rem" }}>
                                Items to be deleted: {selectedValues.length}
                            </div>
                        ) :
                            (
                                <div style={{ marginTop: "2rem" }}>
                                    <p>No items selected</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="admin-table-bottom-container">
                        {!selectedValues.length > 0 ?
                            <button className=
                                {`action-button-delete-all `}>
                                Delete all
                            </button>
                            :
                            <button className=
                                {`action-button-delete-all active`}
                                onClick={deleteAllBlogs}>
                                Delete all
                            </button>


                        }

                        <Link to='/admin/new-blog'>
                            <button className="action-button-new-post">
                                New post
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}
export default AdminTable