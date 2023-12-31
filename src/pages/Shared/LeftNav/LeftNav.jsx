import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftNews from "../../Home/Home/LeftNews/LeftNews";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4>All category</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-decoration-none text-black">{category.name}</Link>
          </p>
        ))}
      </div>
      <LeftNews/>
    </div>
  );
};

export default LeftNav;
