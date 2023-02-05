import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://lg51kak54k.execute-api.us-east-1.amazonaws.com/prod/ec2?ipaddress=172.17.17.4')
      .then(response => response.json())
      .then(data => setData(data[0]))
      .catch(error => console.error(error));
  }, []);
  return (
    <>
      <div>
        <table>
          <tr>
            <th>Region</th>
            <td>{data.Region}</td>
          </tr>
          <tr>
            <th>Account Name</th>
            <td>{data["Account Name"]}</td>
          </tr>
          <tr>
            <th>Service Name</th>
            <td>{data["Service Name"]}</td>
          </tr>
          <tr>
            <th>VPC ID</th>
            <td>{data["VPC ID"]}</td>
          </tr>
          <tr>
            <th>Subnet ID</th>
            <td>{data["Subnet ID"]}</td>
          </tr>
          <tr>
            <th>Security Group(s)</th>
            <td>{data["Security Group(s)"]}</td>
          </tr>
          <tr>
            <th>Instance Type</th>
            <td>{data["Instance Type"]}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{data.State}</td>
          </tr>
          <tr>
            <th>Platform</th>
            <td>{data.Platform}</td>
          </tr>
          <tr>
            <th>Private IP</th>
            <td>{data["Private IP"]}</td>
          </tr>
          <tr>
            <th>Instance ID</th>
            <td>{data["Instance ID"]}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{data.Name}</td>
          </tr>
          <tr>
            <th>TSM</th>
            <td>{data.TSM}</td>
          </tr>
          <tr>
            <th>SysOwner</th>
            <td>{data["SysOwner"]}</td>
          </tr>
          <tr>
            <th>SysName</th>
            <td>{data["SysName"]}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
  
export default App;
