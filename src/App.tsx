import React from 'react';
import {useGetCatsQuery} from "./store/apiSlice";

function App() {

    const model = {
        limit: 10,
        page: 1,
        categoryId: 1,
    }
    const {data = [], isLoading, isError} = useGetCatsQuery(model);
console.log(data)
    return (
        <div className="App">
            hi
        </div>
    );
}

export default App;
