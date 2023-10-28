import { useState } from 'react';
import '../../css/admin-mainOLDDDD.css'
import { Link } from 'react-router-dom';


function AdminMain() {

  const [data, setData] = useState([
    {
      "id": 1,
      "slug": "book-one-slug",
      "bannerURL": "https://images.unsplash.com/photo-1588590560438-5e27fe3f6b71?auto=format&fit=crop&q=80&w=2628&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Title One",
      "summary": "Summary One",
      "blogIntroduction": "blogIntro One",
      "blogBody": "blogBody One",
      "blogConclusion": "blogConc One",
      "createdAt": "2023-5-24T19:16:26.472+02:00",
      "updatedAt": "2023-10-24T19:16:26.472+02:00",
      "author": {
        "id": 4,
        "firstName": "Herman",
        "lastName": "Finkerst",
        "email": "hFinkerst@gmail.com",
        "createdAt": "2023-10-23T04:21:19.155+02:00",
        "updatedAt": "2023-10-23T04:21:19.155+02:00"
      }
    },
    {
      "id": 2,
      "slug": "book-two-slug",
      "bannerURL": "https://plus.unsplash.com/premium_photo-1668472170724-8b544ca3c86e?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "title": "Title Two",
      "summary": "Summary Two",
      "blogIntroduction": "blogIntro Two",
      "blogBody": "blogBody Two",
      "blogConclusion": "blogConc Two",
      "createdAt": "2023-10-24T19:16:51.876+02:00",
      "updatedAt": "2023-10-24T19:16:51.876+02:00",
      "author": {
        "id": 4,
        "firstName": "Herman",
        "lastName": "Finkerst",
        "email": "hFinkerst@gmail.com",
        "createdAt": "2023-10-23T04:21:19.155+02:00",
        "updatedAt": "2023-10-23T04:21:19.155+02:00"
      }
    }
  ])



  return (
    <>
      <table className='admin-table-container'>
        <thead className='admin-page-table-head-container'>

          
          <tr >
            <th></th>
            <th className='company'>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='admin-tbody-container'>

        <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>1</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>










          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>2</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>3</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>4</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>5</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>6</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>7</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>8</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>9</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>10</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
          <tr className='table-data-row'>
            <td className='admin-tbody-checkbox'>
              <input type="checkbox" value={1} onChange={(e) => console.log(e.target.value)} />
            </td>
            <td>11</td>
            <td>Maria Anders</td>
            <td className='table-data-actions'>
              <div>
                <Link>Edit</Link>
                <Link>Delete</Link>
              </div>
            </td>
          </tr>
      

        </tbody>
      </table>

    </>
  );
}

export default AdminMain;