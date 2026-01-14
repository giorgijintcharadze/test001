import { useState } from "react";

const LikeButton = () => {
  const [like, setlike] = useState(false);

  const handlelike = () => {
    setlike(true);
  };
  const handledislike = () => {
    setlike(false);
  };
  return (
    <div>
      <button className="btn" onClick={handlelike}>
        like
      </button>
      <button className="btn" onClick={handledislike}>
        dislike
      </button>
      {like ? "👍 like" : "👎 dislike"}
    </div>
  );
};

export default LikeButton;
