
export interface ICategories {
    id: number,
    name: string
}

export interface ICatsData {
    breeds: [];
    categories: ICategories[]
    height: number
    id: string
    url: string
    width: number
}

export interface ICatsRequestModel {
    limit: number,
    page: number,
    categoryId: number,
}