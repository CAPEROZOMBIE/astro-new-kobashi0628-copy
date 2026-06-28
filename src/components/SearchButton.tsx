import { useState } from "react";
import { useEffect } from "react";

const SearchButton = () => {
    
    // const [value, setValue] = useState(
    //     typeof window !== "undefined"
    //         ? new URLSearchParams(window.location.search).get("q") ?? ""
    //         : ""
    // );
    
    // 検索後の文字残し 0416　▼
    const [value, setValue] = useState("");
    useEffect(() => {
        const q = new URLSearchParams(window.location.search).get("q") ?? "";
        setValue(q);
    }, []);
    // ここまで ▲
    

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValue(event.target.value);
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        window.location.href = `/news/search?q=${value}`;
    };

    return (
        <form role="search" onSubmit={handleSubmit}>
            <label htmlFor="blog_search">
                記事を検索：
            </label>
            <input
                id="blog_search"
                type="search"
                value={value}
                onChange={handleChange}
            />
            ：<button>検索</button>
        </form>
    );
};

export default SearchButton;