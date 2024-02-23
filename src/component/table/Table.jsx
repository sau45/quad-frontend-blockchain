import React, { useEffect, useState } from "react";
import "./table.css";
import fetchApi from "../../utility/fetchapi";


const TableItem = ({ item, index}) => {

  return (
    <tr style={{ backgroundColor: index % 2 === 0 ? "#CBD5E01A" : "#E2E8F01A" }} >
      <td>{index + 1}</td>
      <td>{item["name"]}</td>
      <td>{"₹" + item["last"]}</td>
      <td>{ "₹" + item["buy"] + " - " + "₹" + item["sell"]}</td>

      <td>{"₹" + (item["sell"] - item["buy"])}</td>
      <td>{ "₹" + (item["sell"] - - item["low"])}</td>

    </tr>
  );
};

const Table = ({ headers, data }) => {


  return (
    <table className="table">
    <thead>
  <tr >
    {headers.map((header, index) => (
      <th key={index}>
        {header}
      </th>
    ))}
  </tr>
</thead>

      <tbody>
        {data ?
          data?.map((item, index) => (
            <TableItem
              key={index}
              item={item}
              index={index}
          
             
            />
          )) :(<div className="text-white text-[40px]">Loading....</div>)}
      </tbody>
    </table>
  );
};

const AppTable = () => {
    const [apidata,setApiData]=useState(null);

   useEffect(()=>{
    const fetchdata= async()=>{
        const response = await fetchApi();
        setApiData(response);
    }
    fetchdata();
   },[]);
 

  const headers = [
    "#",
    "Platform",
    "Last Traded Price",
    "Buy / Sell Price",
    "Difference",
    "Saving",
  
  ];


  return (
    <div>
     
      <Table headers={headers} data={apidata} />
    </div>
  );
};

export default AppTable;
