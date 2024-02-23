import React from "react";
import "./table.css";


const TableItem = ({ item, index}) => {

  return (
    <tr  >
      <td>{index + 1}</td>
      <td>{item["Platform"]}</td>
      <td>{item["Last Traded Price"]}</td>
      <td>{item["Buy Sell Price"]}</td>

      <td>{item["Difference"]}</td>
      <td>{item["Saving"]}</td>

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
 

  const headers = [
    "#",
    "Platform",
    "Last Traded Price",
    "Buy / Sell Price",
    "Difference",
    "Saving",
  
  ];
  const data=[
    {
        "Platform":"saurav",
        "Last Traded Price":"345",
        "Buy Sell Price":"45",
        "Difference":"3",
        "Saving":6

    }


  ];

  return (
    <div>
     
      <Table headers={headers} data={data} />
    </div>
  );
};

export default AppTable;
