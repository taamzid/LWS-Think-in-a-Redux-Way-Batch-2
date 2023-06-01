import React, { useState } from "react";

const Sidebar = ({ onSortChange, onFilterChange }) => {
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  const handleFilterChange = (event) => {
    const selectedOption = event.target.value;
    setFilterOption(selectedOption);
    onFilterChange(selectedOption);
  };

  return (
    <>
      <aside>
        <div class="sidebar-items">
          <div class="sidebar-content">
            <h4>Sort</h4>
            <select
              name="sort"
              id="lws-sort"
              class="w-full max-w-[150px] border-2 rounded-md text-gray-500"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div class="sidebar-content">
            <h4>Filter</h4>
            <div class="radio-group">
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  value=""
                  checked={!filterOption}
                  class="radio"
                  onChange={handleFilterChange}
                />
                <label for="lws-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  class="radio"
                  value="saved"
                  checked={filterOption === "saved"}
                  onChange={handleFilterChange}
                />
                <label for="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
