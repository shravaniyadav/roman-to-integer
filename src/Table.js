import React from 'react'

const Table = () => {
    return ( 
        <div>
            <table className="center_t1">
              <tr>
                <th style={{fontFamily: "Tahoma, Verdana, sans-serif", padding: "0px 5px 0px 0px"}}>Symbol</th>
                <th style={{fontFamily: "Tahoma, Verdana, sans-serif", padding: "0px px 0px 5px"}}>Value</th>
              </tr>
              <tr>
                <td>I</td>
                <td>1</td>
              </tr>
              <tr>
                <td>V</td>
                <td>5</td>
              </tr>
              <tr>
                <td>X</td>
                <td>10</td>
              </tr>
              <tr>
                <td>L</td>
                <td>50</td>
              </tr>
              <tr>
                <td>C</td>
                <td>100</td>
              </tr>
              <tr>
                <td>D</td>
                <td>500</td>
              </tr>
              <tr>
                <td>M</td>
                <td>1000</td>
              </tr>
            </table>
        </div>
     );
}
 
export default Table;