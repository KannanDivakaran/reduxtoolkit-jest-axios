
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recordAttendance } from '../features/EmployeeSlice';
import { RootState } from '../store';



// interface EmployeeProps {
//   name: string;
//   index: number;
//   //removeReservation(index: number): void;
// }

function EmployeeDataCapture() {

  const [empName, setEmpName] = useState('');
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');
  const employees = useSelector((state: RootState) => state.employees.employees);
  const [empData, setEmployee] = useState({
    name: "",
    logInTime: "",
    logOutTime: "",
   });
  const dispatch = useDispatch();
  const handleEmpDataCapture = () => {
    if (empData?.name == "") return;
    let data : any
    data = empData
    data.id = employees.length + 1
    dispatch(recordAttendance(data));
    setEmpName("");
    setInTime("")
    setOutTime("")
    setEmployee(
      {
        name: "",
        logInTime: "",
        logOutTime: "",
       }
    )
  };

  return (
    <div>
      <div className="card-header">
          Enroll Attendance
      </div>
        <div className='data-header'>
          <div className='data-header'>
            Employee Name:
            <input
            value= {empData.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmployee({
                  ...empData,
                  name:event.target.value
                 })
              }
            />
            </div>
            <div className='data-header'>
            Log In Time:
            <input
              value={empData.logInTime}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmployee({
                  ...empData,
                  logInTime:event.target.value
                 })
              }
            />
            </div>
            <div className='data-header'>         
             Log Out Time:
             <input
              value={empData.logOutTime}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmployee({
                  ...empData,
                  logOutTime:event.target.value
                 })
              }
            />
            </div>
            <div className='button-padding'>
            <button onClick={handleEmpDataCapture}>Add</button>
            </div>
          </div>
      </div>
  );
}

export default EmployeeDataCapture;

