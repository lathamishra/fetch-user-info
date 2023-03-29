import "./newuser.css";
import React, { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await fetch("https://randomuser.me/api")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setData(res);
      });
  }

  const refresh = () => {
    fetchData();
  };

  return (
    <div>
      <h3>Our New Member!</h3>
      <button className="refresh-btn" onClick={refresh}>
        Show New Member
      </button>

      <div className="my_table">
        <table>
          <thead>
            <tr>
              <th>FullName</th>

              <th> You have successfully registered with Us </th>
            </tr>
          </thead>

          {data &&
            data.results.map((item) => {
              return (
                <tbody>
                  <tr key={item}>
                    <td>
                      <h4>
                        {" "}
                        Welcome {item.name.title} {item.name.first}
                        {item.name.last} !
                      </h4>
                    </td>
                    <td>
                      <h4>
                        <i>{item.email}</i>
                      </h4>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default Test;
