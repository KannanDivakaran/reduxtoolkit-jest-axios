import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EmployeeDataState {
  id : number,
  name: string, 
  logInTime: string , 
  logOutTime: string
}

interface EmployeeState {
  employees: EmployeeDataState[]
}

const initialState : EmployeeState = {
  employees : [{id : 1, name : "Kannan",logInTime: "10:00am" , logOutTime: "06:00pm"}]
};


const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
     recordAttendance: (state,  {payload}  : PayloadAction<EmployeeDataState>)  => {
      state.employees.push(payload);
    },
    editAttendance: (state,  {payload}  : PayloadAction<EmployeeDataState>)  => {
      //let employee = state.employees.filter(emp => emp.id == payload.id);
      state.employees.splice(payload.id -1, 1, payload)
      console.log(state.employees)
    },
  },
});

export const { recordAttendance,editAttendance} = employeeSlice.actions;

export default employeeSlice.reducer;