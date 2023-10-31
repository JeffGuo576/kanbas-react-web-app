import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    assignment: { assignment: "New Assignment 123", title:"Assignment"},
  };
  
  
  const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        state.assignments = [
          { ...action.payload, _id: new Date().getTime().toString() },
            ...state.assignments,
        ];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },

      //Update Assignment
      updateAssignment: (state, action) => {
        state.modules = state.modules.map((module) => {
          if (module._id === action.payload._id) {
            return action.payload;
          } else {
            return module;
          }
        });
      },
      selectAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });

  export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment } = assignmentsSlice.actions;
  export default assignmentsSlice.reducer;