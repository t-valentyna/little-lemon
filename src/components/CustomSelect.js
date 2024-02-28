import { useState } from "react";

function CustomSelect(props) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="custom-select-container" >
      <div
        className={`custom-select ${props.state ? "selected" : ""}`}
        id={props.id}
        onClick={() => setShowOptions(!showOptions)}
        tabindex="0"
        required={true}
        aria-required="true"
      >
        {props.state || props.name}
      </div>
      <div className={`dropdown-content ${showOptions ? "show" : ""}`}>
        {props.option.map((item) => (
          <div
            onClick={() => {
              props.setter(item);
              setShowOptions(!showOptions);
            }}
            value={item}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomSelect;
