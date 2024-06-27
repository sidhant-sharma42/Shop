import React from 'react';

const CategoryItem = ({ category }) => {
  return (
    <div className="relative group">
      <div className="w-full text-left p-2 bg-gray-200 rounded hover:bg-gray-300">
        {category.name}
      </div>
      {category.subcategories && (
        <div className="ml-4 mt-2 space-y-2 hidden group-hover:block">
          {category.subcategories.map((subcategory, index) => (
            <CategoryItem key={index} category={subcategory} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
