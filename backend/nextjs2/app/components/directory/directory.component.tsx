import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.css";

export type CategoryType = {
    id: number;
    title: string;
    imageUrl: string;
    route: string;
};
const Directory = () => {
    const categories = [
        {
            id: 1,
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            route: "shop/Hats",
        },
        {
            id: 2,
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            route: "shop/Jackets",
        },
        {
            id: 3,
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            route: "shop/Sneakers",
        },
        {
            id: 4,
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            route: "shop/Womens",
        },
        {
            id: 5,
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            route: "shop/Mens",
        },
    ] as CategoryType[];
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    );
};

export default Directory;
