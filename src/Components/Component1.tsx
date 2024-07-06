import { useEffect, useState } from "react";
import { DataGrid, GridColDef  } from '@mui/x-data-grid';
import { Post } from "../interfaces";

function Component1() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={posts} 
        columns={columns}
        checkboxSelection
      />
    </div>
  );
}

export default Component1;
