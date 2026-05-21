import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [regno, setRegno] = useState('');
  const [data, setData] = useState([]);

  const searchData = async () => {
    const res = await axios.get(`http://localhost:5000/search/${regno}`);
    setData(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Marks Card</h2>

      <input
        placeholder='Enter Register Number'
        onChange={(e) => setRegno(e.target.value)}
      />

      <button onClick={searchData}>Search</button>

      <table border='1' cellPadding='10'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reg No</th>
            <th>Dept</th>
            <th>Rack</th>
            <th>Shelf</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.student_name}</td>
              <td>{item.reg_no}</td>
              <td>{item.department}</td>
              <td>{item.rack_no}</td>
              <td>{item.shelf_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
