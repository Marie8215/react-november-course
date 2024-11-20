import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";

export const Restaurant = ({ restaurant }) => {
  const { menu, reviews, name } = restaurant;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <Menu menu={menu} />
        {reviews.length && <Reviews reviews={reviews} />}
      </div>
    </>
  );
};
