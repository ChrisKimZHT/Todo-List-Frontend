import useAlert from "../utils/useAlert";
import './AlertBox.scss';

const AlertBox = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <div className={`div-alert sticky-top alert alert-${type}`}>
        {text}
      </div>
    );
  }
  return <></>;
};

export default AlertBox;