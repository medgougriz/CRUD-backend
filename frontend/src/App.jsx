import { useState,useEffect } from "react"
import axios from "axios"
import "./app.css"

import Table from "./componement/Table"
import BtnCreate from "./componement/BtnCreate";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    dataFetch();
  }, [data]);

  return (
    <>
      <BtnCreate />
      <Table data={data} />
    </>
  )
}

export default App
