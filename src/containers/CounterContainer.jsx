import {connect} from "react-redux";
import { decreaseSum, increaseSum } from "../action";
import Counter from "../components/Counter";

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increaseSum()),
        decrease: () => dispatch(decreaseSum())
    }
}

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;