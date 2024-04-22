type ReviewsSlideItemProps = {
  userPhoto: string;
  userMessage: string;
  userFullname: string;
  userStatus: string;
};

export const ReviewsSlideItem: React.FC<ReviewsSlideItemProps> = ({
  userPhoto,
  userMessage,
  userFullname,
  userStatus,
}) => {
  return (
    <div className="reviews__swiper-item">
      <div className="reviews__user-photo">
        <img src={userPhoto} alt={userFullname} />
      </div>
      <div className="reviews__user-message">
        <p>{userMessage}</p>
      </div>
      <h3 className="reviews__user-name">{userFullname}</h3>
      <span className="reviews__user-status">{userStatus}</span>
    </div>
  );
};
