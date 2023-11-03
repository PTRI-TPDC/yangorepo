import React from "react";

const Dropdown = ({ options, selectedOption, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (option) => {
    onChange(option);
    handleClose();
  };

  return (
    <div className="dropdown-wrapper">
      <label className="dropdown-label">Classification</label>
      <button onClick={handleOpen} className="dropdown-button">
        {selectedOption}
      </button>
      <ul
        className="dropdown-content"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {options.map((option) => (
          <li key={option} onClick={() => handleChange(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
