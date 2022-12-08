function Currency({ currency, data }) {
  const { Name, Value, Previous } = data;
  return (
    <div className="valuteBlock">
      <div>
        {Name} Курс на данный момент: {Value}
      </div>
    </div>
  );
}

export default Currency;
