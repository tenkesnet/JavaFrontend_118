import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

import { CategoryType } from '../directory/directory.component';
import { useNavigate } from 'react-router-dom';

type Props = {
  category: CategoryType;
};

const CategoryItem = (props: Props) => {
  const { imageUrl, title, route } = props.category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
