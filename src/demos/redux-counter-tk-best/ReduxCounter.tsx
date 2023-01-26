import { increment, decrement } from './counter-slice';
import { useAppDispatch, useAppSelector } from './hooks';

export default function ReduxCounter() {
  let dispatch = useAppDispatch();
  let value = useAppSelector((state) => state);

  return (
    <div className="card">
      <div className="card-header bg-secondary">Redux Toolkit Counter with Hooks (TS)</div>
      <div className="card-body">
        <div className="text-center mb-4">
          <h3>{value}</h3>
        </div>
        <div className="text-center">
          <button className="btn btn-danger" onClick={() => dispatch(decrement())}>
            <span role="img" aria-label="heavy minus sign">
              ➖
            </span>
            <br />
            <span>Decrement</span>
          </button>
          &nbsp;
          <button className="btn btn-success" onClick={() => dispatch(increment())}>
            <span role="img" aria-label="heavy plus sign">
              ➕
            </span>
            <br />
            <span>Increment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
