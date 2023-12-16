import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./Data";


const userReducerData = createSlice({
  name: "users",
  initialState: userData,
  reducers: {
    addUsers: (state, action) => {
      // console.log(action); //{type: users/adduser,payload}
      // console.log(action.payload);
      console.log(state)
      state.push(action.payload)
    },
    updateUsers: (state, action) => {
      // console.log(action); //{type: users/adduser,payload}
      //  console.log(action.payload);  
      const { id, name, email } = action.payload;
      const uid = state.find(users => users.id == id);

      if (uid) {
        uid.name = name;
        uid.email = email;
      }


    },

    deleteUsers: (state, action) => {
      // console.log(action); //{type: users/adduser,payload}
      const { id } = action.payload;
      const uid = state.find(users => users.id == id);

      if (uid) {
        return state.filter(user => user.id !== id)
      }

    }
  }
})

export const { addUsers, updateUsers, deleteUsers } = userReducerData.actions;
export default userReducerData.reducer;