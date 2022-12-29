import Link from "next/link";
import React from "react";

const index = ({ video }) => {
  return (    
    <div className=" grid lg:grid-cols-4 gap-10 p-5">
      <title>Vs-Tube</title>
      {video.map((item) => (
        <div key={item._id}>
          <Link href={`./ViewPage-${item.video_url}`}>
            <div className="card card-compact w-full bg-base-100 xl:overflow-hidden">
              <figure>
                <img src={item.img_url} alt={item.title} className="rounded-xl w-full" />
              </figure>
              <div className="card-body w-full">
              <h2 className="card-title lg:text-sm xl:text-lg">{item.title}</h2>               
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default index;
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/video-info");
  const data = await res.json();
  return {
    props: {
      video: data,
    },
  };
};
