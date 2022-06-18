import React, {FC} from 'react';
import * as Styled from './Content.styled';
import {IContentProps} from "./Content.props";

const Content:FC<IContentProps> = ({children, ...props}) => {
    return (
        <Styled.Content>
                {children}
        </Styled.Content>
    );
};

export default Content;
