function Currency({ data }) {
  const { Name, Value, CharCode } = data;

  return (
    <div className="valuteBlock">
      <div className="valuteName">
        {Name} ({CharCode})
      </div>
      <p>
        Курс на данный момент: <span>{Value}</span>
      </p>
    </div>
  );
}

export default Currency;
