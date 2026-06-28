import { useState } from "react";

const SearchButton = () => {
    const [value, setValue] = useState(
        typeof window !== "undefined"
            ? new URLSearchParams(window.location.search).get("q") ?? ""
            : ""
    );
    
    // 追加

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