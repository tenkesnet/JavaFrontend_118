class Category {
    id: number
    imageUrl: string
    title: string

    constructor(id: number, imageUrl: string, title: string) {
        this.imageUrl = imageUrl
        this.title = title
        this.id = id
    }
}

export default Category