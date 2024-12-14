export const Review = ({ id, text, userName }) => {
  return (
    <div key={id}>
      <strong>{userName}</strong>: {text}
    </div>
  );
};
