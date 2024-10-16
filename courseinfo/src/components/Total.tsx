interface TotalProps {
  total: number;
}

const Total = (props: TotalProps) => {
  return (
    <footer>
      <h3>Number of exercises {props.total}</h3>
    </footer>
  );
};

export default Total;
