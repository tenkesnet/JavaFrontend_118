import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from "./directory-item.styles";

import { CategoryType } from "../directory/directory.component";
import { useRouter } from "next/navigation";

type Props = {
    category: CategoryType;
};

const CategoryItem = (props: Props) => {
    const { imageUrl, title, route } = props.category;
    const router = useRouter();
    const onNavigateHandler = () => router.push(route);

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
