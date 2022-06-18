import React, {FC} from 'react';
import * as Styled from './Sidebar.styled';
import {ISidebarProps} from "./Sidebar.props";
import {Link} from "react-router-dom";
import {useGetCategoriesQuery} from "../../redux/apiSlice";
import {ICategories} from "../../interface/ICategories";

const Sidebar: FC<ISidebarProps> = ({...props}: ISidebarProps) => {

    const {data = [], isLoading, isError} = useGetCategoriesQuery();

    return (
        <Styled.Sidebar>
            <nav {...props}>
                <ul>
                    {data.map((category: ICategories) => (
                        <li key={category.id}>
                            <Link to={`${category.id}`}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Styled.Sidebar>
    );
};

export default Sidebar;
