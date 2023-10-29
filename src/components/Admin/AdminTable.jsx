import { useState } from "react";
import "../../css/AdminTable.css"
import "../../css/index.css"
import { blogContextData } from "../BlogContext"
import AdminTableItem from "./AdminTableItem";

function AdminTable() {

    //Data retrieved using axios.get inside the CreateContext component
    const dataContext = blogContextData();

    const deleteSingleItem = () => {
        console.log("tedst")
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

                    {dataContext.map(data => (

                        < AdminTableItem
                            key={data.id}
                            blogData={data}
                            id={data.id}
                            title={data.title}
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
                            <button className="action-button edit">
                                Edit
                            </button>

                            <button className="action-button delete">
                                Delete
                            </button>
                        </div>
                    </div> */}
                    {/* End of ROW */}

                    {5 > 9 ? (
                        <div style={{ marginTop: "2rem" }}>
                            Items to be deleted: {0}
                        </div>
                    ) :
                        (
                            <div style={{ marginTop: "2rem" }}>
                                <p>No items selected</p>
                            </div>
                        )
                    }

                    <div className="admin-table-bottom-container">
                        <button className=
                            {`action-button-delete-all 
                            ${5 > 7 ? "active" : ""}`
                            }>
                            Delete all
                        </button>
                        <button className="action-button-new-post">
                            New post
                        </button>
                    </div>

                </div>
            </div>

        </>
    )
}
export default AdminTable