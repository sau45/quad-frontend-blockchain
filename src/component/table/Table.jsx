import React, { useEffect, useState } from "react";
import "./table.css";
import fetchApi from "../../utility/fetchapi";


const TableItem = ({ item, index}) => {

  return (
    <tr  >
      <td>{index + 1}</td>
      <td>{item["name"]}</td>
      <td>{"₹" + item["last"]}</td>
      <td>{ "₹" + item["buy"] + " - " + "₹" + item["sell"]}</td>

      <td>{"₹" + (item["sell"] - item["buy"])}</td>
      <td>{ "₹" + (item["sell"] - item["low"])}</td>

    </tr>
  );
};

const Table = ({ headers, data }) => {


  return (
    <table className="table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => (
            <TableItem
              key={index}
              item={item}
              index={index}
          
             
            />
          ))}
      </tbody>
    </table>
  );
};

const AppTable = () => {
    const [apidata,setApiData]=useState([]);

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
//   const data=[
//     {
//         "Platform":"saurav",
//         "Last Traded Price":"345",
//         "Buy Sell Price":"45",
//         "Difference":"3",
//         "Saving":6

//     }


//   ];

  return (
    <div>
     
      <Table headers={headers} data={apidata} />
    </div>
  );
};

export default AppTable;
