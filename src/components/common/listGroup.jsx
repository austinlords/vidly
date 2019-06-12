import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
  currentSelection,
  items,
  onSelect,
  valueProperty,
  textProperty
}) => {
  let allItemsClasses = "list-group-item ";
  if (currentSelection === null) allItemsClasses += "active";

  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      <li className={allItemsClasses} onClick={() => onSelect(null)}>
        All Genres
      </li>
      {items.map(item => (
        <li
          className={
            item === currentSelection
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item[valueProperty]}
          onClick={() => onSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

ListGroup.propTypes = {
  onSelect: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  currentSelection: PropTypes.any
};

export default ListGroup;
