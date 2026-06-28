// src\components\BlogSearch.tsx

import useSWR from "swr";
import type { MyKobashiNewsType } from "../library/micro";

const BlogSearch = () => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");

    const { data, error, isLoading } = useSWR<{
        contents: MyKobashiNewsType[]
    }>(
        q ? `/api/search?q=${q}` : null,
        (url: string) => fetch(url).then(res => res.json())
    );

    if (error) return <div>エラーが発生しました</div>;

    if (isLoading) return <div>読み込み中...</div>;

    console.log(data);

    return (
        <div>
            {/* {data?.contents.length !== 0 ? ( */}
            {data?.contents && data.contents.length > 0 ? (
                <ul>
                    {data?.contents.map((item) => (
                        <li key={item.id}>
                            <a href={`/news/detail/${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <div><br />検索結果はありません</div>
            )}
        </div>
    );
};

export default BlogSearch;