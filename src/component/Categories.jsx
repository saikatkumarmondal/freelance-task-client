import React from 'react';
import { useLoaderData } from 'react-router';
import CategoryCard from './CategoryCard';

const Categories = () => {
    
    const categories = useLoaderData();
   
    console.log(categories)
    return (
      <div>
        <h1 className="text-5xl text-center">Categories</h1>
        {categories.map((category) => (
          <CategoryCard category={category} key={category._id}></CategoryCard>
        ))}
      </div>
    );
};

export default Categories;