import { Puff } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <Puff
        visible={true}
        height="150"
        width="150"
        color="#e90516"
        ariaLabel="puff-loading"
        wrapperClass="loader"
      />
    </div>
  );
};

export default Loader;
