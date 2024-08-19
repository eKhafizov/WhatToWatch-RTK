
export function FilmReviews() : JSX.Element {
  return (
    <>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years.</p>

              <footer className="review__details">
                <cite className="review__author">Kate Muir</cite>
                <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,9</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">Andersons films are too precious htmlFor some, but htmlFor those of us willing to lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>
              <footer className="review__details">
                <cite className="review__author">Bill Goodykoontz</cite>
                <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,0</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">I didnt find it amusing, and while I can appreciate the creativity, its an hour and 40 minutes I wish I could take back.</p>

              <footer className="review__details">
                <cite className="review__author">Amanda Greever</cite>
                <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
              </footer>
            </blockquote>

            <div className="review__rating">8,0</div>
          </div>
        </div>
        <div className="film-card__reviews-col">
          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

              <footer className="review__details">
                <cite className="review__author">Matthew Lickona</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,2</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

              <footer className="review__details">
                <cite className="review__author">Paula Fleri-Soler</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,6</div>
          </div>

          <div className="review">
            <blockquote className="review__quote">
              <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

              <footer className="review__details">
                <cite className="review__author">Paula Fleri-Soler</cite>
                <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
              </footer>
            </blockquote>

            <div className="review__rating">7,0</div>
          </div>
        </div>
      </div>
      <div className="add-review">
        <form action="#" className="add-review__htmlForm">
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" checked />
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
