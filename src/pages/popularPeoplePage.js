import React, { useState } from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import Grid from "@mui/material/Grid";
import PeopleList from "../components/peopleList";
import { getPopular } from "../api/tmdb-api";
import Pagination from '@mui/material/Pagination';

const PopularPeoplePage = () => {
    const [page, setPage] = useState(1);
    const {data, error, isLoading, isError } = useQuery(
        ["popular", { page: page }],
        getPopular
      );
    if (isLoading) {
        return <Spinner />
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }
    const peoples = data.results;

    const handlePageChange = (event, value) => {
        setPage(value);
        //我搞不懂为什么这里能传进去参数？
        //完了这玩意直接魔幻了，它怎么就传进参数的？
        //我还有一点搞不懂，就是这个功能有时候会崩溃，就是取不到数据，白屏，刷新一下就好了，这样崩溃的情况仅仅出现在第三和第八页
    };

    return (
        // 为了让下面的分页框对准，我往它父级元素加了居中要求才实现的
        <Grid container sx={{ paddingLeft: 10, paddingRight: 10, justifyContent: 'center', alignItems: 'center' }} rowSpacing={5} columnSpacing={{ xs: 2, sm: 3, md: 4 }} columns={60} >
            <PeopleList peoples={peoples}></PeopleList>
            <Pagination count={10} page={page} onChange={handlePageChange} />
        </Grid>

    );
}

export default PopularPeoplePage;
