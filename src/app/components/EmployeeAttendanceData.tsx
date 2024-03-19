
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Table } from 'react-bootstrap';
import { editAttendance } from '../features/EmployeeSlice';


function EmployeeAttendanceCard() {
    const employees = useSelector((state: RootState) => state.employees.employees);
    const [edit, setEdit] = useState(false)
    const [editEmpId, setEditEmpId] = useState(0)
    const [empData, setEmployee] = useState({
        id : 0,
        name: "",
        logInTime: "",
        logOutTime: "",
       });
    const dispatch = useDispatch();
    const handleEmpDataEdit = () => {
    if (empData?.name == "") return;
    dispatch(editAttendance(empData));
    setEdit(false)
    setEditEmpId (0)
    };
    const editEmp = (emp : any) => {
       setEdit(true)
       setEditEmpId (emp.id)
       setEmployee(emp)
      };
  return (
    <div className='table-top'>
      <Table striped bordered hover>
      <thead className='table-border'>
        <tr>
          <th>Employee #</th>
          <th>Employee Name</th>
          <th>Swipe In Time</th>
          <th>Swipe Out Time</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index: number) => (
         edit && (editEmpId == emp.id)?
            (<tr>
            <td>{empData.id}</td>
            <td><input
            value= {empData.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmployee({
                  ...empData,
                  name:event.target.value
                 })
              }
            /></td>
            <td><input
            value= {empData.logInTime}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmployee({
                  ...empData,
                  logInTime:event.target.value
                 })
              }
            /></td>
            <td><input
            value= {empData.logOutTime}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmployee({
                  ...empData,
                  logOutTime:event.target.value
                 })
              }
            /></td>
            <td><button onClick={handleEmpDataEdit }>Save</button></td>
          </tr>)

        : (<tr>
          <td>{emp.id}</td>
          <td>{emp.name}</td>
          <td>{emp.logInTime}</td>
          <td>{emp.logOutTime}</td>
          <td><button onClick={() => editEmp(emp)}>Edit</button></td>
        </tr>)
       
        ))}
        
      </tbody>
    </Table>
    </div>
  );
}

export default EmployeeAttendanceCard;

