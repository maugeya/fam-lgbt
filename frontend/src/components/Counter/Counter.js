import { useDispatch, useSelector } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
} from '../../redux/Counter/counter.actions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    </div>
  );
};

export default Counter;
