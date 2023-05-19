import { createSlice } from "@reduxjs/toolkit";
import { clinicians, patients } from "../../../data";

const initialState = {
  user: null,
  clinicians: clinicians,
  patients: patients,
  selectedPatient: null,
  selectedClinician: null,
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addClinician: (state, action) => {},
    deleteClinician: (state, action) => {},
    updateClinician: (state, action) => {},
    updatePatient: (state, action) => {},
    setSelectedClinician: (state, action) => {
      state.selectedClinician = action.payload;
    },
    setSelectedPatient: (state, action) => {
      state.selectedPatient = action.payload;
    },
  },
});

export default AuthSlice.reducer;
export const { logout, setUser, setSelectedPatient, setSelectedClinician } =
  AuthSlice.actions;
