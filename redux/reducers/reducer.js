import { createSlice } from "@reduxjs/toolkit";
import COMMENTS from "../../Data/comments";
const commentSlice = createSlice({
    name: "comment",
    initialState: {
        value:0,
      comments:COMMENTS
    },
    reducers:{
        Comment:(state,action)=>{
            if(action.payload.type === "ADD_USER_COMMENT"){
                let comment =action.payload.payload;
                comment.id=state.comments.length;                                                                         
                return{
                    ...state.comments,
                    comments: state.comments.concat(comment)                  
                }                              
            }           
            return state;            
        }
    }
  });
  export const {Comment} = commentSlice.actions;
  export default commentSlice.reducer;
