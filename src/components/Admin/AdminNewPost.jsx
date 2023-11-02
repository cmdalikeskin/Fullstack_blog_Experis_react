import { useEffect, useState } from "react"
import "../../css/AdminTable.css"
import "../../css/newBlogPost.css"
import axios from "axios";


const randomNumber = Math.ceil(Math.random() * 10000);

function AdminNewPost() {

    const [updatePUTchecker, setUpdatePUTchecker] = useState(0)

    //USESTATES FOR THE BLOG PART
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [bannerURL, setBannerURL] = useState("");
    const [blogIntro, setBlogIntro] = useState("");
    const [blogBody, setblogBody] = useState("");
    const [blogConclusion, setBlogConclusion] = useState("");
    const [blogSummary, setBlogSummary] = useState("");

    //USESTATES FOR THE AUTHOR PART
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")


    //THE REGULAR EXPRESSIONS I USE FOR BANNER-URL AND AUTHOR-EMAIL
    const regexAuthorEmail = new RegExp("^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\\.[A-Za-z]+$");
    const regexBannerURL = new RegExp("^(https?:\\/\\/|www\\.)[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)");

    //FORM TEMPLATE, FUNCTIONS USE SPREAD OPERATOR TO FILL IN THE OBJECT VALUES
    const [formData, setFormData] = useState({
        slug: "",
        bannerURL: "",
        title: "",
        summary: "",
        blogIntroduction: "",
        blogBody: "",
        blogConclusion: "",
        createdAt: "",
        updatedAt: "",
        author: {
            firstName: "",
            lastName: "",
            email: "",
            createdAt: "",
            updatedAt: ""
        }
    })



    //FORM HANDLER FOR TITLE & CREATION OF SLUG
    const titleChecker = (e) => {
        setTitle(e.target.value)
        const newSlug = e.target.value
        const stringWithDashes = newSlug.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, "-");
        setSlug(stringWithDashes + "-" + randomNumber)
    }

    const titleHandler = (e) => {

        if (title.length > 10) {
            setFormData({ ...formData, title: title, slug: slug })

            e.target.classList.remove("error")
        } else {

            console.log("shorter than 5")
            e.target.classList.add("error")
        }
    }

    //FORM HANDLER FOR THE BANNER URL
    const bannerUrlChecker = (e) => {
        setBannerURL(e.target.value)
    }

    const bannerUrlHandler = (e) => {
        //Regex to check if url starts with www, http or https


        if (regexBannerURL.test(bannerURL)) {
            setFormData({ ...formData, bannerURL: bannerURL })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }



    //FORM HANDLER FOR THE BLOG INTRODUCTION
    const blogIntroChecker = (e) => {
        setBlogIntro(e.target.value)
    }

    const blogIntroHandler = (e) => {
        if (blogIntro.length > 20) {
            setFormData({ ...formData, blogIntroduction: blogIntro })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    //FORM HANDLER FOR THE BLOG BODY
    const blogBodyChecker = (e) => {
        setblogBody(e.target.value)
    }

    const blogBodyHandler = (e) => {
        if (blogBody.length > 20) {
            setFormData({ ...formData, blogBody: blogBody })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    //FORM HANDLER FOR THE BLOG CONCLUSION
    const blogConclusionChecker = (e) => {
        setBlogConclusion(e.target.value)
    }

    const blogConclusionHandler = (e) => {
        if (blogConclusion.length > 20) {
            setFormData({ ...formData, blogConclusion: blogConclusion })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    //FORM HANDLER FOR THE BLOG SUMMARY
    const blogSummaryChecker = (e) => {
        setBlogSummary(e.target.value)
    }

    const blogSummaryHandler = (e) => {
        if (blogSummary.length > 20 && blogSummary.length < 251) {
            setFormData({ ...formData, summary: blogSummary })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    //FORM HANDLER FOR THE AUTHOR NAME
    const authorFirstNameChecker = (e) => {
        setFirstName(e.target.value)
    }

    const authorFirstNameHandler = (e) => {
        if (firstName.length > 1) {
            setFormData({
                ...formData,
                author: {
                    ...formData.author,
                    firstName: firstName
                }
            })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }

    //FORM HANDLER FOR THE AUTHOR NAME
    const authorLastNameChecker = (e) => {
        setLastName(e.target.value)
    }

    const authorLastNameHandler = (e) => {
        if (lastName.length > 1) {
            setFormData({
                ...formData,
                author: {
                    ...formData.author,
                    lastName: lastName
                }
            })
            e.target.classList.remove("error")
        } else {
            e.target.classList.add("error")
        }
    }



    //FORM HANDLER FOR THE AUTHOR EMAIL
    const authorEmailChecker = (e) => {
        setEmail(e.target.value)
    }

    const authorEmailHandler = (e) => {
        //Regex to check if email is valid


        if (regexAuthorEmail.test(email)) {
            setFormData({
                ...formData,
                author: {
                    ...formData.author,
                    email: email
                }
            })
            e.target.classList.remove("error")

        } else {
            e.target.classList.add("error")
        }
    }

    const formSubmit = async (e) => {
        e.preventDefault()
        const validationPassed =
            title.length > 10 &&
            regexBannerURL.test(bannerURL) &&
            blogIntro.length > 20 &&
            blogBody.length > 20 &&
            blogConclusion.length > 20 &&
            blogSummary.length > 20 &&
            blogSummary.length < 251 &&
            firstName.length > 1 &&
            lastName.length > 1 &&
            regexAuthorEmail.test(email);
        console.log(validationPassed)
        if (validationPassed) {
            console.log("passed");
            console.log(formData);
            await axios.post("http://localhost:4000/blogs", formData)
                .then(function (response) {
                    console.log(response);
                    setUpdatePUTchecker(1)
                })
                .catch(function (error) {
                    console.log(error);
                    setUpdatePUTchecker(2)
                });

        } else {
            setUpdatePUTchecker(2)
            console.log("not passed");
        }
    }

    return (
        <>

            <div className="main-header container">
                <h1>
                    New Blog
                </h1>
            </div>

            <div>
                <form className="form-container" >
                    <h3 className="background-line">
                        <span>Blog details</span>
                    </h3>

                    <div className="blog-details-container">

                        <div className="input-container">
                            <label htmlFor="title">Title</label>
                            <input
                                className="input-container-medium "
                                type="text"
                                id="title"
                                name="title"

                                onChange={(e) => titleChecker(e)}
                                onBlur={(e) => titleHandler(e)}
                            />
                            <p>The title needs to be longer than 10 characters</p>
                        </div>
                        <div className="input-container">
                            <label htmlFor="slug">Slug</label>
                            <input
                                className="input-container-medium"
                                type="text"
                                id="slug"
                                name="slug"
                                value={slug}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="banner-url">Banner-URL</label>
                            <input
                                className="input-container-X-large"
                                type="text"
                                id="banner-url"
                                name="banner-url"

                                onChange={(e) => bannerUrlChecker(e)}
                                onBlur={(e) => bannerUrlHandler(e)}
                            />
                            <p>You need to fill in a valid URL input</p>
                        </div>


                        <div className="input-container">
                            <label htmlFor="blog-introduction">Blog introduction</label>
                            <textarea name="blog-introduction"
                                className="input-container-X-large"
                                id="blog-introduction"
                                rows={6}
                                onChange={(e) => blogIntroChecker(e)}
                                onBlur={(e) => blogIntroHandler(e)}

                            />
                            <p>The blog introduction needs to be longer than 20 characters</p>
                        </div>

                        <div className="input-container">
                            <label htmlFor="blog-body">Blog body</label>
                            <textarea name="blog-body"
                                className="input-container-X-large"
                                id="blog-body"
                                rows={12}
                                onChange={(e) => blogBodyChecker(e)}
                                onBlur={(e) => blogBodyHandler(e)}
                            />
                            <p>The blog body needs to be longer than 20 characters</p>
                        </div>

                        <div className="input-container">
                            <label htmlFor="blog-conclusion">Blog conclusion</label>
                            <textarea name="blog-conclusion"
                                className="input-container-X-large"
                                id="blog-conclusion"
                                rows={6}
                                onChange={(e) => blogConclusionChecker(e)}
                                onBlur={(e) => blogConclusionHandler(e)}
                            />
                            <p>The blog conclusion needs to be longer than 20 characters</p>
                        </div>

                        <div className="input-container">
                            <label htmlFor="summary">Summary</label>
                            <textarea name="summary"
                                className="input-container-X-large"
                                id="summary"
                                rows={4}
                                onChange={(e) => blogSummaryChecker(e)}
                                onBlur={(e) => blogSummaryHandler(e)}
                            />
                            <p>The summary needs to be between 20 and 250characters.</p>
                        </div>
                    </div>

                    <h3 className="background-line">
                        <span>Author details</span>
                    </h3>
                    <div className="author-details-container">
                        <div className="author-name-container">
                            <div className="input-container">
                                <label htmlFor="author-first-name">First name</label>
                                <input
                                    className="input-container-medium"
                                    type="text"
                                    id="author-first-name"
                                    name="author-first-name"
                                    onChange={(e) => authorFirstNameChecker(e)}
                                    onBlur={(e) => authorFirstNameHandler(e)}
                                />
                                <p>The author first name needs <br />to be longer than 1 character</p>
                            </div>
                            <div className="input-container">
                                <label htmlFor="author-last-name">Last name</label>
                                <input
                                    className="input-container-medium"
                                    type="text"
                                    id="author-last-name"
                                    name="author-last-name"
                                    onChange={(e) => authorLastNameChecker(e)}
                                    onBlur={(e) => authorLastNameHandler(e)}
                                />
                                <p>The author last name needs <br />to be longer than 1 character</p>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="author-email">Email</label>
                            <input
                                className="input-container-large"
                                type="text"
                                id="author-email"
                                name="author-email"
                                onChange={(e) => authorEmailChecker(e)}
                                onBlur={(e) => authorEmailHandler(e)}
                            />
                            <p>You need to fill in a valid email.</p>
                        </div>
                    </div>


                    <div className="form-button-container">
                        {updatePUTchecker === 0 ? (
                            <div className="update-container">
                                <p></p>
                            </div>
                        ) : updatePUTchecker === 1 ? (
                            <div className="update-container accepted">
                                <p>The blog has been posted.</p>
                            </div>
                        ) : updatePUTchecker === 2 ? (
                            <div className="update-container denied">
                                <p>Something went wrong updating the post.</p>
                            </div>
                        ) : null}

                        <button className="new-blog-form-button"
                            type="submit"
                            onClick={
                                formSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default AdminNewPost