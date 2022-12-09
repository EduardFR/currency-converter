function Currency({ data }) {
  const { Name, Value, CharCode } = data;
  return (
    <div className="valuteBlock">
      <div className="valuteName">
        {Name} ({CharCode})
      </div>
      <p>
        Курс на данный момент: <div>{Value}</div>
      </p>
    </div>
  );
}

export default Currency;
