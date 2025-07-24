import React from 'react';

const AddCategory = () => {
    const handleAddCategory = e => {
        e.preventDefault();
        // console.log( 'Om Namah Shivaya' );
        const category = e.target.category.value; 
       fetch("http://localhost:7777/categories", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify({ category }), 
       })
         .then((res) => res.json())
         .then((data) => {
             if ( data.insertedId )
             {
              
             alert("Category added successfully");
           }
         });
        // console.log( category );
    }
    return (
      <div>
        <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center">Add Category</h1>
            <form className="fieldset" onSubmit={handleAddCategory}>
              <label className="label">Category Name</label>
              <input
                type="text"
                            className="input"
                            name='category'
                placeholder="Category Name"
              />

              <button className="btn btn-neutral mt-4">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddCategory;