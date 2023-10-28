import "../../css/AdminTable.css"
import "../../css/index.css"


function AdminTable() {




    return (
        <>
            {/* <div class="divTable">
                <div class="divTableBody">
                    <div class="divTableRow">
                        <div class="divRowOne">Head1 </div>
                        <div class="divRowTwo">Head2</div>
                        <div class="divRowThree">Head3</div>
                        <div class="divRowFour">Head4</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divRowOne">a</div>
                        <div class="divRowTwo">b</div>
                        <div class="divRowThree">c</div>
                        <div class="divRowFour">d</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divRowOne">a</div>
                        <div class="divRowTwo">b</div>
                        <div class="divRowThree">c</div>
                        <div class="divRowFour">d</div>
                    </div>
                    <div class="divTableRow">
                        <div class="divRowOne">a</div>
                        <div class="divRowTwo">b</div>
                        <div class="divRowThree">c</div>
                        <div class="divRowFour">d</div>
                    </div>

                </div>
            </div> */}

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


                    {/* Start of ROW */}
                    <div className="table-body row">
                        <div className="grid-item checkbox-container">
                            <input type="checkbox" />
                        </div>
                        <div className="grid-item test">1</div>
                        <div className="grid-item">This is a title</div>
                        <div className="grid-item action-button-container">
                            <button className="action-button edit">
                                Edit
                            </button>

                            <button className="action-button delete">
                                Delete
                            </button>
                        </div>
                    </div>
                    {/* End of ROW */}

                    <div className="table-body row">
                        <div className="grid-item checkbox-container">
                            <input type="checkbox" />
                        </div>
                        <div className="grid-item test">1</div>
                        <div className="grid-item">This is a title</div>
                        <div className="grid-item action-button-container">
                            <button className="action-button edit">
                                Edit
                            </button>

                            <button className="action-button delete">
                                Delete
                            </button>
                        </div>
                    </div>

                    <div className="admin-table-bottom-container">
                        <button className="action-button-delete-all">
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