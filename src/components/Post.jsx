import React from "react";
import { postData } from "../utils/postdata";
import Icon, {
  HeartFilled,
  MessageOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

function Post() {
  return (
    <div className="bg-white p-6 mb-6">
      {postData.map((data, index) => (
        <div className="border border-gray-100 rounded-md mb-6 p-3 bg-white shadow-md min-h-30">
          <div key={index} className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{data.username}</h2>
            <h3 className="text-gray-500">{data.userHandle}</h3>
          </div>
          <p className="mb-4">
            {data.content}{" "}
            {/* <a href="#" className="text-blue-500">
              Read More
            </a> */}
          </p>
          {data.imageUrl && (
            <img
              src={data.imageUrl}
              alt="Post image"
              className="mb-4 max-w-80 h-auto"
            />
          )}
          <div className="">
            <div className="flex justify-around">
              <span>
                <Icon component={HeartFilled} /> {data.likes}
              </span>
              <span>
                <Icon component={MessageOutlined} /> {data.comments}
              </span>
              <span>
                <Icon component={ShareAltOutlined} /> {data.shares}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
