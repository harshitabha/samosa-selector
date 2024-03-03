import "./Option.css"

const Option = (props) => {
    return (
        <div className="option">
            <h3 className="option-name">
                {props.optionName}
            </h3>
            <h3 className="option-descrip">
                {props.optionDescrip}
            </h3>
            <p className="multiplier">{props.multiplier}x per click</p>

            <p className="cost">{props.cost} samosas</p>
            <button onClick = {props.onClick}>Select</button>
        </div>
    );
}

export default Option;