import {DetailedHTMLProps, HTMLAttributes} from "react";
import {ICatsData} from "../../interface/ICats";

export interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    cardItem: ICatsData
}