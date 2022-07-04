import fakeFetch from "../../utils/fakeFetch";
import Pagination from "../common/Pagination";
import Filters from "./Filters";
import { useState,useEffect } from "react";
import UserCard from "./UserCard";

function Users() {
  const [load, setLoad] = useState(false)
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [order, setOrder] = useState("asc")
  


  useEffect(() => {
    setLoad(false)
    fakeFetch({ page: page, limit: limit, orderBy: order })
      .then((res) => {
      
       setData(res.data)
       setLoad(true)
      }
      
    )
      .catch(() => {
        setLoad(err)
        
    })
  
  }, [limit])
  


 

  


  return (
    
    <div>

     
      
      
      
      {
        load ? <div>{data.map((ele) => {
          return <UserCard data={ele} />
        })}</div>: <div data-testid="loading-indicator">...loading</div>
        
      }
      
      
      <Filters setOrder={setOrder} setLimit={setLimit} />
      
      <Pagination  current={page} total={data} onChange={setPage} />
    </div>
  );
}

export default Users;
