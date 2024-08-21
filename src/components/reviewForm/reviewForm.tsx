import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useFetchAddCommentMutation } from '../../features/apiSlice';

function ReviewForm({id} : {id: number}) : JSX.Element {

  const formRef = useRef(null);

  const listOfNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  const [addComment] = useFetchAddCommentMutation();

  const [form, setForm] = useState({
    comment: '',
    rating: 1,
    id: id,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addComment({...form});
    setForm({comment: '', rating: 0, id: id});
  };

  const changeRating = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setForm((previous) => ({...previous, [name] : Number(value)}));
  };
  const changeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value, name} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };

  return (
    <div className="add-review">
      <form onSubmit={handleSubmit} ref={formRef} action="#" className="add-review__htmlForm">
        <div className="rating">
          <div className="rating__stars">
            {
              listOfNumbers.map((item) => (
                <div key={item}>
                  <input
                    className="rating__input"
                    id={`star-${item}`}
                    type="radio"
                    name="rating"
                    value={item}
                    onChange={changeRating}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${item}`}
                  >Rating{item}
                  </label>
                </div>))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name='comment'
            id="review-text"
            placeholder={form.comment}
            value={form.comment}
            onChange={changeText}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ReviewForm;
