import './directory-item.styles.scss';
import { CategoryType } from 'src/app/routes/home/home.component';

type Props = {
  category: CategoryType;
};

const CategoryItem = (props: Props) => {
  const { imageUrl, title } = props.category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
