const StatusButton = (props) => {
  const { eachItem, findByStatusCustom } = props;

  return (
    <button
      className="btn btn-outline-secondary m-2"
      type="button"
      onClick={() => findByStatusCustom(`${eachItem}`)}
    >
      {eachItem} status
    </button>
  );
};

export default StatusButton;
