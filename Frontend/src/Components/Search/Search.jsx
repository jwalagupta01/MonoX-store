import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import { ShopContext } from "../../Context/ShopContextProvider";
import { IoMdSearch } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Search = () => {
  const { search, setSearch, showSearch, SetShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const onSearchHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="d-flex align-items-center justify-content-center py-2 border rounded bg-light">
      <div className="d-flex">
        <div>
          <form
            className="search_form border border-dark border-top-0 rounded-pill px-4 "
            onSubmit={onSearchHandler}
          >
            <input
              type="search"
              placeholder="Search Here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
            <button className="fs-4" onSubmit={(e) => e.preventDefault()} type="submit">
              <IoMdSearch />
            </button>
          </form>
        </div>
        <button
          className="border-0 bg-transparent fs-3 ms-4 rounded"
          onClick={() => SetShowSearch(!showSearch)}
          type="button"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  ) : null;
};

export default Search;
