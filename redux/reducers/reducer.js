import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
  },
  reducers: {
    Comment: (state, action)=> {     
      if (action.payload.type === "ADD_USER_COMMENT") {
        const comment = action.payload.payload;
        comment.id=state.comments.length;        
        axios({
          method: "POST",          
          url: "https://vs-tube-server.vercel.app/AddComments",
          data: comment,
        })
          .then((response)=> {response.data})
          return{
            ...state.comments,
            comments: state.comments.concat(comment)            
          }
      }      
      return state;
    },
  },
});

export const { Comment } = commentSlice.actions;
export default commentSlice.reducer;
