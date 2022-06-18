import React, {FC, useMemo, useState} from 'react';
import {useGetCatsQuery} from "../../redux/apiSlice";
import {useParams} from "react-router-dom";
import Card from "../../components/Card/Card";

const Cats: FC = () => {
    let {categoryId} = useParams()
    const [page, setPage] = useState<number>(1)
    const [limit, setLimit] = useState<number>(10)

    const model = useMemo(() => ({
        limit,
        page,
        categoryId,
    }), [limit, page, categoryId])

    const {data = [], isLoading, isError} = useGetCatsQuery(model);

    return (
        <>
            {
                data.map(cats => (
                    <Card cardItem={cats} key={cats.id}/>
                ))
            }
        </>
    );
};

export default Cats;