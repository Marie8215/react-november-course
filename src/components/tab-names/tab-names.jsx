export const TabNames = ({ tabNames, onClick }) => {
  return (
    <>
      <ul>
        {tabNames.map((name, index) => (
          <li key={index}>
            <button onClick={() => onClick(index)}>{name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
