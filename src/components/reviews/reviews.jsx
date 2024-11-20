export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map(({ user, text, id }) => (
          <li key={id}>
            <strong>{user}</strong>: {text}
          </li>
        ))}
      </ul>
    </>
  );
};
