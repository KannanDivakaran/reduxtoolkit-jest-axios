import React, { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { } from './app/features/EmployeeSlice';
import { RootState } from './app/store';
import EmployeeAttendanceCard from './app/components/EmployeeAttendanceData';
import EmployeeDataCapture from './app/components/EmployeeDataCapture';
import { ArrowRight, Stopwatch } from 'react-bootstrap-icons';

function App() {
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees.employees);


  // const recordAttendance = ({ id, name }: any) => {
  //   dispatch(recordAttendance({ id, name }));
  // };

  return (
    <div className='App'>
      <div className='App-header'><Stopwatch/>Daily Attendance Capture System</div>
      <div>
        <EmployeeDataCapture/>
      </div>
        <EmployeeAttendanceCard/>
        <div className='App-footer'>Thank you</div>
    </div>
  );
}

export default App;