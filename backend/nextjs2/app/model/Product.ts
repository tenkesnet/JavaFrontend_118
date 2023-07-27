class Product {
    id?: number;
    name?: string;
    imageUrl?: string;
    price = 0;


    constructor(id?: number, name?: string, imageUrl?: string, price?: number) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl
    }
}

export default Product