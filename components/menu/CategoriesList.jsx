const CategoriesList = ({ categories }) => {
  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        {categories.map((categorie) => (
          <li key={categorie.id} className="my-2 cursor-pointer">
            {categorie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
