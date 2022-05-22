import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        {/* Header */}
        <img
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold"> {username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <div>
        {/* img */}
        <img src={img} alt="Loading..." className="w-full object-cover" />
      </div>
      {session && (
        <div className="flex justify-between px-4 pt-4">
          {/* Buttons */}
          <div className="flex space-x-4">
            <HeartIcon className="btn text-red-500" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <div>
            <BookmarkIcon className="btn" />
          </div>
        </div>
      )}

      <div>
        {/* caption */}
        <p className="truncate p-5">
          <span className="mr-1 font-bold">{username}</span>
          {caption}
        </p>
      </div>

      <div>{/* comments */}</div>

      {session && (
        <form className="flex items-center p-4">
          {/* input box */}
          {/* Emoji icon on the left and Post button on the right */}
          <EmojiHappyIcon className="h-7" />
          <input
            className="flex-1 border-none outline-none focus:ring-0"
            //   focus:ring-0 또는 outline-none
            placeholder="Add a comment..."
            type="text"
          />
          <button
            type="submit"
            // disabled={!comment.trim()}
            // onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
