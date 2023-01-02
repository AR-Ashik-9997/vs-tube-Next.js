import React, { useState } from "react";
import { useDispatch} from "react-redux";
import {Comment} from "../redux/reducers/reducer.js";
import { connect } from "react-redux";

const CommentsForm = ({data}) => {  
  const dispatch = useDispatch(); 
  const [userComment, setuserComment] = useState({
    comment: "",
  });
  const handleComment = (event) => {
    const comment = event.target.value;
    setuserComment({ ...userComment, comment: comment });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(Comment({
      type: 'ADD_USER_COMMENT',
      payload:{
        video_id:data,
        comment:userComment.comment,
      }      
    }));
    setuserComment({ ...userComment, comment: "" });
    event.target.reset();
    
  }; 
  return (
    <div className="w-full mt-6">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-12/12 lg:w-1/12 px-3 mb-6 md:mb-0">
          <figure>
            <img
              src="https://placeimg.com/400/400/arch"
              alt="Album"
              className="rounded-full w-14"
            />
          </figure>
        </div>
        <div className="w-8/12 lg:w-10/12">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                id="message"
                name="comment"
                className=" bg-black input w-full"
                placeholder="Your message..."
                onChange={handleComment}
                required
                autoComplete="off"
              />
            </div>
            <div className="flex justify-end mt-6">
              <button className="btn btn-primary">Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect()(CommentsForm);
