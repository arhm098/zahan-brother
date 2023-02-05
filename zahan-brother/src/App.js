import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const testAPI = 'https://lg51kak54k.execute-api.us-east-1.amazonaws.com/prod/ec2?ipaddress=172.17.17.4'
  const [data, setData] = useState([]);
  const [ipAddress, setIpAddress] = useState('');
  const [response, setResponse] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleIpAddressChange = (event) => {
    setIpAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`https://lg51kak54k.execute-api.us-east-1.amazonaws.com/prod/${selectedOption}?ipaddress=${ipAddress}`);
    const data = await res.json();
    setData(data[0]);
  };

  // useEffect(() => {
  //   fetch(testAPI)
  //     .then(response => response.json())
  //     .then(data => setData(data[0]))
  //     .catch(error => console.error(error));
  // }, []);


  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter IP Address"
        value={ipAddress}
        onChange={handleIpAddressChange}
      />
      <div className='container'>

       <label>
        <input
          type="radio"
          value="ec2"
          checked={selectedOption === 'ec2'}
          onChange={handleOptionChange}
          />
        ec2
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
          />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        Option 3
      </label>
      <br />
      <br />
      Selected option: {selectedOption}
          </div>
      <button type="submit">Submit</button>
    </form>
    </div>
      <div className='container t-5'>
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
