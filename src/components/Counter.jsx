import { useState } from "react";


const Counter = (props) =>
{
	console.log(props);
	
	//let countState = 77;
	const [countState, setCountState] = useState(0);
	
	function incCount()
	{
		//countState++;
		setCountState(countState + props.incBy); // ++countState?
	}
	
	return(
		<div>
			<div style={{fontSize: '2em'}}>{countState}</div>
			<button onClick={incCount}>+{props.incBy}</button>
		</div>
	);
};
export default Counter;