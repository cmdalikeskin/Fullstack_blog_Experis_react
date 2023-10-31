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

    //container for multiple items deletion
    const [selectedValues, setSelectedValues] = useState([])
    //container for single item deletion
    const [singleItemToDelete, setSingleItemToDelete] = useState([])

    //useState that's needed to show the conditional rendering for deletion of item(s)
    const [singleItemConditional, setSingleItemConditional] = useState(false)
    const [multipleItemsToDelete, setMultipleItemsToDelete] = useState(false)


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

                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting blogs:', error);
            });
    }


    //Functions to show or hide confirmation of deletion
    const deleteSingleConfirm = (id) => {
        setSingleItemToDelete(id)
        setMultipleItemsToDelete(false)
        setSingleItemConditional(true)
    }

    const deleteMultipleDataConfirm = (id) => {
        setSingleItemConditional(false)
        setMultipleItemsToDelete(true)
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
                                deleteSingleConfirm={deleteSingleConfirm}
                            />
                        ))}

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

                    {/* DELETE CONFIRMATIONS BUTTONS */}
                    <div className="delete-items-text">
                        {
                            singleItemConditional &&
                            (
                                <div style={{ marginTop: "2rem" }}>
                                    <p> <strong>Are you sure that you want to delete the item?</strong></p>
                                    <button className="conditional-button-yes"
                                        onClick={() => deleteSingleItem(singleItemToDelete)}
                                    >
                                        Yes
                                    </button>
                                    <button className="conditional-button-cancel">
                                        Cancel
                                    </button>
                                </div>
                            )
                        }

                        {
                            multipleItemsToDelete && (
                                <div style={{ marginTop: "2rem" }}>
                                    <p> <strong>You're about to delete multiple items, are you sure?</strong></p>
                                    <button className="conditional-button-yes"
                                        onClick={
                                            deleteAllBlogs}
                                    >
                                        Yes
                                    </button>
                                    <button className="conditional-button-cancel">
                                        Cancel
                                    </button>
                                </div>
                            )
                        }
                    </div>

                    {/* BOTTOM BUTTONS */}
                    <div className="admin-table-bottom-container">
                        {!selectedValues.length > 0 ?
                            <button className=
                                {`action-button-delete-all `}>
                                Delete all
                            </button>
                            :
                            <button className=
                                {`action-button-delete-all active`}
                                onClick={deleteMultipleDataConfirm}>
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