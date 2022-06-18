import React, {FC, useEffect, useMemo, useState} from 'react';
import * as Styled from './Cats.slyled';
import {useGetCatsQuery} from "../../redux/apiSlice";
import {useParams} from "react-router-dom";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const Cats: FC = () => {
    let {categoryId} = useParams()

    useEffect(() => {
        setLimit(10)
    }, [categoryId])

    const [page, setPage] = useState<number>(1)
    let [limit, setLimit] = useState<number>(10)

    const model = useMemo(() => ({
        limit,
        page,
        categoryId,
    }), [limit, page, categoryId])

    const {data = [], isLoading, isError} = useGetCatsQuery(model);

    return (
        <Styled.CardWrap>
            {isLoading && (
                <Styled.CatsWrap>
                    Loading...
                </Styled.CatsWrap>
            )}
            {!isLoading && (
                <>
                    <Styled.CatsWrap>
                        {
                            data.map(cats => (
                                <Card cardItem={cats} key={cats.id}/>
                            ))
                        }
                    </Styled.CatsWrap>
                    <Button onClick={() => setLimit(limit += 10)}>
                        show more
                    </Button>
                </>
            )}
        </Styled.CardWrap>
    );
};

export default Cats;