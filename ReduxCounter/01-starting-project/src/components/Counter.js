import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT } from '../store/storeindex';

const Counter = () => {
	const counter = useSelector(state => state.counter);
	const show = useSelector(state => state.showCounter);
	const dispatchFn = useDispatch();

	const incrementHandler = () => {
		dispatchFn({ type: INCREMENT });
	};

	const increaseHandler = () => {
		dispatchFn({ type: 'INCREASE', amount: 5 });
	};

	const decrementHandler = () => {
		dispatchFn({ type: 'DECREMENT' });
	};

	const toggleCounterHandler = () => {
		dispatchFn({ type: 'TOGGLE' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{show && counter}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
