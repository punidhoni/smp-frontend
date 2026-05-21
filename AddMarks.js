import React, { useState } from 'react';
import axios from 'axios';

function AddMarks() {
  const [form, setForm] = useState({
    student_name: '',
    reg_no: '',
    semester: '',
    passed_year: '',
    department: '',
    rack_no: '',
    shelf_no: '',
    status: 'Available'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveData = async () => {
    await axios.post('http://localhost:5000/marks', form);
    alert('Saved Successfully');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add Marks Card</h2>

      <input name='student_name' placeholder='Student Name' onChange={handleChange} />
      <br /><br />

      <input name='reg_no' placeholder='Register Number' onChange={handleChange} />
      <br /><br />

      <input name='semester' placeholder='Semester' onChange={handleChange} />
      <br /><br />

      <input name='passed_year' placeholder='Passed Year' onChange={handleChange} />
      <br /><br />

      <input name='department' placeholder='Department' onChange={handleChange} />
      <br /><br />

      <input name='rack_no' placeholder='Rack Number' onChange={handleChange} />
      <br /><br />

      <input name='shelf_no' placeholder='Shelf Number' onChange={handleChange} />
      <br /><br />

      <button onClick={saveData}>Save</button>
    </div>
  );
}

export default AddMarks;
