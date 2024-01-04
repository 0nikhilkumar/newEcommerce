import React from "react";

const Filter = ({setDropdownValue}) => {
//   const [dropdownValue, setDropdownValue] = useState();

const sorting = ()=> {
    let userSortValue = document.getElementById('sort');
    let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
    setDropdownValue(sort_value);
}

  return (
    <>
      <div className="dropdown text-center my-3">
        <select name="sort" id="sort" onClick={sorting}>
            <option>Sort By</option>
            <option value="lowest">price(lowest)</option>
            <option value="highest">price(highest)</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
