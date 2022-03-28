import Rating from "./common/Rating";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const UserReview = ({ src, name }) => {
  return (
    <div className="user-review">
      <img className="user-review__image" src={src} alt={src} />
      <div className="user-review__content">
        <div className="content__header">
          <h4 className="header__name">{name}</h4>
          <Rating days={5} />
        </div>
        <div className="content-desc">
          <p className="content-desc__content">
            Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming
            aperiam delicata est.
          </p>
          <div className="content-desc__like">
            <span className="like__like">
              <FaRegThumbsUp />
              <span className="like__count">14</span>
            </span>
            <span className="like__dislike">
              <FaRegThumbsDown />
              <span className="dislike__count">4</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
