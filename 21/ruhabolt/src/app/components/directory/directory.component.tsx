import CategoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';
import { CategoryType } from 'src/app/routes/home/home.component';
type Props = {
  categories: CategoryType[];
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
