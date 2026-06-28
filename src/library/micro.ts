// src\library\micro.ts

import type { MicroCMSImage, MicroCMSListContent, MicroCMSQueries } from "microcms-js-sdk"
import { createClient } from "microcms-js-sdk"


// env
const client = createClient ({
    serviceDomain:import.meta.env.MICROCMS_SERVICE_DOMAIN,
    apiKey:import.meta.env.MICROCMS_API_KEY
})


// ニュース型
export type MyKobashiNewsType = {
    title:string
    content:string
    thumbnail?:MicroCMSImage
    category?:MyKobashiCategoryType 
} & MicroCMSListContent

// カテゴリー型
export type MyKobashiCategoryType = {
    name:string
} & MicroCMSListContent



// ニュース一覧・エンドポイント
export const getKobashiNews = async(queries?:MicroCMSQueries)=>{
    const A = await client.getList<MyKobashiNewsType>({
        endpoint:"news",
        queries
    })
    return A
}


// ニュース単一・エンドポイント
export const getKobashiNewsDetail= async(
    contentId:string,
    queries?:MicroCMSQueries
)=>{
    const C = await client.getListDetail<MyKobashiNewsType>({
        endpoint:"news",
        contentId,
        queries
    })
    return C
}



// カテゴリー一覧
export const getKobashiCategories = async()=>{
    const B = await client.getList<MyKobashiCategoryType>({
        endpoint:"categories",
    })
    return B
}


// ニュース全部オール・エンドポイント
export const getKobashiAllNews = async(queries?:MicroCMSQueries)=>{
    const D = await client.getAllContents<MyKobashiNewsType>({
        endpoint:"news",
        queries
    })
    return D
}



