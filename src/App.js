import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(true);

  const getData = () => {
    fetch("https://api.tmxnx.com/api/prototion/getSubscribers", {
      method: "POST",
      body: JSON.stringify({ securityKey: "3uBOTnoYei" }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setSuccess(data.success);
      });
  };

  return (
    <div className="App">
      <button onClick={getData}>get Data</button>
      {success ? <div></div> : <div className="wrong">wrong key</div>}
      <table class="fixed_headers">
        <thead>
          <tr>
            <th>no.</th>
            <th>_id</th>
            <th>email</th>
            <th>gotTemplate?</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((oneData, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{oneData._id}</td>
              <td>{oneData.email}</td>
              <td>{oneData.gotTemplate ? "true" : "false"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
