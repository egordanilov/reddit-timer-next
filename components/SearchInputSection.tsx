'use client'
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { SearchInputButton } from "./styled/SearchInputSection.styled";

function SearchInputSection() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const search = searchParams.get('query')
    const inputRef = useRef<HTMLInputElement>(null);
    const [subreddit, setSubreddit] = useState('');
    
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        if (search) {
            setSubreddit(search);
        }

    }, []);

   const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        router.push(`/search?query=${subreddit}`);
        console.log(inputRef.current?.value);
   }

    return(
        <form onSubmit={submitHandler}>
            <div>
                r/
                <input
                    type="text"
                    name="subreddit"
                    ref={inputRef}
                    value={subreddit}
                    onChange={(event) => {setSubreddit(event.target.value)}}
                />
                <SearchInputButton type="submit">SEARCH</SearchInputButton>
            </div>
        </form>
    )
}

export default SearchInputSection;
