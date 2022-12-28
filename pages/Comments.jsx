import React from "react";

const Comments = () => {
  return (
    <div className="w-full mt-6">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-12/12 lg:w-1/12 px-3 mb-6 md:mb-0">
          <figure>
            <img
              src="https://placeimg.com/400/400/arch"
              alt="Album"
              className="rounded-full w-14"
            />
          </figure>
        </div>
        <div class="w-8/12 lg:w-10/12">
          <div className="form-control">
            <input
              id="message"
              className=" bg-black input w-full"
              placeholder="Your message..."
            />
          </div>
          <div className="flex justify-end mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
