import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointments: [],
    userLogged: {},
};

export const rootSlices = createSlice({
    name: "root",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userLogged = action.payload;
        },
        addAppointment: (state, action) => {
            state.appointments = action.payload;
        },
        cancelAppointment: (state, action) =>{
            state.appointments = state.appointments.map(appoint=> {
                if(appoint.id === action.payload){
                    return {...appoint, status: "cancelado"}
                }
                return appoint
            })
        }
    },
});

export const { addAppointment, addUser, cancelAppointment} = rootSlices.actions;
