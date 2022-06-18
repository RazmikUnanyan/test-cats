import {ICategories} from "./ICategories";

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
    categoryId: string | undefined ,
}