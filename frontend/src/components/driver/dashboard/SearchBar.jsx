import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useUserLocation from "../../../features/getLocation/UserLocation";

export const SearchWrapper = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 20px;
  /* box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06) */
  .filterIcon{
    position: relative;
    top: 0;
    left: 20px;
  }
`;

export const FilterChip = styled.button`
  border: none;
  background: #f1f3f5;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  margin-right: 8px;
  cursor: pointer;

  &:hover {
    background: #e6e8eb;
  }
  
`;

const SearchBar = () => {
    const [filter, setFilter] = useState();
    const { location, error, loading, getLocation } = useUserLocation();

    useEffect(() => {
        console.log(filter);
        console.log(loading);
        getLocation();
        console.log(location);
        console.log(error);
    }, [location, filter])

    return (
        <SearchWrapper className="mb-4">
            <div className="row align-items-center">
                <div className="col-12 col-md-9 fs-6">
                    <input
                        type="text"
                        className="form-control fs-6 form-control-lg"
                        placeholder="Search by Location"
                    />
                </div>


                <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
                    <ion-icon name="options-outline" id="filter" className="filterIcon"></ion-icon>
                    <select
                        className="form-select form-select-lg fs-6"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="" className="px-4">Filter by</option>
                        <option value="price">Price (Low → High)</option>
                        <option value="location" onClick={getLocation}>Nearest Location</option>
                        <option value="available">Available Now</option>
                    </select>
                </div>
            </div>


        </SearchWrapper>
    );
};


export default SearchBar;