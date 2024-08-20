import { useGetCommentsQuery } from '../../features/apiSlice';
import ReviewForm from '../reviewForm/reviewForm';

export function FilmReviews({id} : {id: number}) : JSX.Element {

  const {data} = useGetCommentsQuery(id);

  return (
    <>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {
            data && data.map((comment) => (
              <div key={comment.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime={comment.date} >{comment.date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{comment.rating}</div>
              </div>
            ))
          }
        </div>
      </div>

      <ReviewForm />
    </>
  );
}
