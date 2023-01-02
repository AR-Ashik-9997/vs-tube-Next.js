import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
const ViewComments = ({ video_id }) => {
  const comments = useSelector((state) => state.comment.comments);
  // const { data: comments = [], refetch } = useQuery({
  //   queryKey: ["comments"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/comments/${video_id}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  return (
    <div>
      {comments.length > 0 ? (
        <>
          {comments.map((items) => (
            <div key={items.id}>
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
                    <p>{items.comment}</p>                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ViewComments;
