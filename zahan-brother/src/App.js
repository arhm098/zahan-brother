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
  const optionsAPIChange = {
    'ec2': 'ipaddress',
    's3': 'bucketname',
    'rds': 'rdsname',
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`https://lg51kak54k.execute-api.us-east-1.amazonaws.com/prod/${selectedOption}?${optionsAPIChange[selectedOption]}=${ipAddress}`);
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
      <nav>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row">
          <div className='pe-2'>
          <input
              type="text"
              placeholder={optionsAPIChange[selectedOption]}
              value={ipAddress}
              onChange={handleIpAddressChange}
              />
          </div>
          <div className='form-group d-flex flex-row'>
                  <div className="form-check pe-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioButtonGroup"
                      id='ec2'
                      value='ec2'
                      checked={selectedOption === 'ec2'}
                      onChange={handleOptionChange}
                    />
                    <label className="form-check-label">
                      ec2
                    </label>
                  </div>
                  <div className="form-check pe-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioButtonGroup"
                      id='s3'
                      value='s3'
                      checked={selectedOption === 's3'}
                      onChange={handleOptionChange}
                    />
                    <label className="form-check-label">
                      s3
                    </label>
                  </div>
                  <div className="form-check pe-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioButtonGroup"
                      id='rds'
                      value='rds'
                      checked={selectedOption === 'rds'}
                      onChange={handleOptionChange}
                    />
                    <label className="form-check-label">
                      rds
                    </label>
                  </div>
              </div>
            </div>
            <div className='p-1'>
              <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
        </form>
        <ErrorHandle data={data} />
      </nav>
      <div className='bg-light'>
        <table className='table'>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </>
  );
}
function ErrorHandle(props) {
  if (props.data['error message'] === '') {
    return (<>user found</>)
  }
  else {
    return (<>
      <h2>
        {props.data['error message']}
      </h2>
    </>)
  }
}
export default App;
