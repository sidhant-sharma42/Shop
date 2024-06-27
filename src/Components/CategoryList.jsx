import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories, searchQuery }) => {
  const filterCategories = (categories) => {
    return categories.filter(category => {
      if (category.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return true;
      }
      if (category.subcategories) {
        category.subcategories = filterCategories(category.subcategories);
        return category.subcategories.length > 0;
      }
      return false;
    });
  };

  const filteredCategories = filterCategories(categories);

  return (
    <div className="space-y-2">
      {filteredCategories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
