import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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






const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  {
    field: 'extra',
    headerName: ' ',
    width: 90,
  },


];

const rows = [
  { id: 1, title: 'Snow'},
  { id: 2, title: 'Lannister'},
  { id: 3, title: 'Lannister' },
  { id: 4, title: 'Stark'},
  { id: 5, title: 'Targaryen' },
  { id: 6, title: 'Melisandre' },
  { id: 7, title: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, title: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, title: 'Roxie', firstName: 'Harvey', age: 65 },
];





 function AdminMain() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 7]}
        checkboxSelection
      />
    </div>
  );
}

export default AdminMain;