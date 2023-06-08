import Category from 'src/app/model/Category';
import './category-item.styles.scss';

type Props = {
  category: Category;
};

const CategoryItem = (props: Props) => {
  const { imageUrl, title } = props.category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
