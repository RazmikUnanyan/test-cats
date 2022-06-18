import React, {FC} from 'react';
import * as Styled from './Card.styled';
import {ICardProps} from "./Card.props";

const Card: FC<ICardProps> = ({cardItem, ...props}) => {
    return (
        <Styled.Card >
           <img src={cardItem.url} alt={cardItem.url}/>
        </Styled.Card>
    );
};

export default Card;