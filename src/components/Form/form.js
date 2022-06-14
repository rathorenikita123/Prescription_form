import React from 'react';
import './form.css';

const Prescription_form = () => {
  return (
    <div className='prescription'>
      <h1 className='text'>NAME OF THE HOSPITAL</h1>
      <div className='deatils'>
        <div className='doctor'>
          <h3 className='d_name'>Dr. John Killer</h3>
          <p className='d_degree'>M.B.B.S., M.S.(Ortho)</p>
        </div>
        <p className='d_address'>
          751 Victoria 123 Street, South Statue 204
          <br/>
          Hometown, US 1234
          <br/>
          PH: (207) 808 2014 2014
          <br/>
          FAX: (207) 808 2015 2202
        </p>
        <hr/>
      </div>
      <div className='p_form'>
        <form action="/action_page.php">
          <div className='p_form_1'>
            <label for="number">S.No:</label>
            <input type="number" id="number" placeholder='27'></input>
          </div>
          <div className='p_form_2'>
            <label for="name">Patient Name:</label>
            <input type="text" id="name" placeholder='Abc Xyz'></input>
            <label for="number">Age:</label>
            <input type="number" id="number" placeholder='20'></input>
            <label for="gender">Gender:</label>
            <input type="text" id="gender" placeholder='Female'></input>
          </div>
          <div className='p_form_3'>
            <label for="address">Address:</label>
            <input type="text" id="address" placeholder='India'></input> 
            <label for="date">Date:</label>
            <input type="date" id="date" placeholder='14-06-2022'  ></input>
          </div>
        </form>
        <div className='RX'>
          <h1 className='R'>R</h1>
          <p className='X'>X</p>
        </div>
        <textarea type="text" id="medicines" placeholder='Medicines Prescription'></textarea>
        <div className='footer'>
          <div className='sign'>
            <label for="sign">Doctor's Signature:</label>
            <input type="text" id="sign" placeholder='Dr. John'></input>
          </div>
          <hr/>
          <p className='d_address'>www.hospitalmail@mail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Prescription_form;

