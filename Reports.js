import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const res = await axios.get('http://localhost:5000/reports');
    setReports(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Reports Module</h2>

      <table border='1' cellPadding='10'>
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Issued To</th>
            <th>Issue Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((item) => (
            <tr key={item.id}>
              <td>{item.reg_no}</td>
              <td>{item.issued_to}</td>
              <td>{item.issue_date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;
