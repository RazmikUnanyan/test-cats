import React, {FC} from 'react';
import {ButtonProps} from "./Button.props";
import * as Style from './Button.styled'

const Button: FC<ButtonProps> = ({onClick, children, ...props}: ButtonProps): JSX.Element => {
    return (
        <Style.ButtonWrap >
            <Style.Button onClick={onClick}>
                {children}
            </Style.Button>
        </Style.ButtonWrap>
    )
};

export default Button;
