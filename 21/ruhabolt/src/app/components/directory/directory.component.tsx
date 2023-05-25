import Category from 'src/app/module/Category';
import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';
type Props = {
  categories: Category[];
};
const Directory = (props: Props) => {
  return (
    <div className="directory-container">
      {props.categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
