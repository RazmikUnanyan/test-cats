import React, {FC, FunctionComponent} from 'react';
import * as Styled from './Layout.styled';
import {LayoutProps} from "./Layout.props";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <Styled.MainWrapper>
            <Sidebar/>
            <Content>
                {children}
            </Content>
        </Styled.MainWrapper>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => (props: T) => (
    <Layout>
        <Component {...props}/>
    </Layout>
);