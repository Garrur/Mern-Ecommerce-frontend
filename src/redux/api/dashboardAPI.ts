import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { 
    BarRespone, 
    LineRespone, 
    PieRespone, 
    StatsRespone
 } from "../../types/api-types";

export const dashboardAPI = createApi({
    reducerPath: "dashboardAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/dashboard/`,
    }),
    
    endpoints: (builder) => ({

        stats:builder.query<StatsRespone,string>({
            query:(id) => `stats?id=${id}`,
            keepUnusedDataFor:0,
        }),
        pie:builder.query<PieRespone,string>({
            query:(id) => `pie?id=${id}`,
            keepUnusedDataFor:0,

        }),
        bar:builder.query<BarRespone,string>({
            query:(id) => `bar?id=${id}`,
            keepUnusedDataFor:0,

        }),
        line:builder.query<LineRespone,string>({
            query:(id) => `line?id=${id}`,
            keepUnusedDataFor:0,

        }),

    }),
});

export const { 
    useStatsQuery,
    useBarQuery,
    useLineQuery,
    usePieQuery,

} = dashboardAPI;