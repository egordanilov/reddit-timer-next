'use client'
import { useSearchParams, useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { SearchInputButton, FormTitle, SearchInputSectionWrapper, SearchPageFormWrapper, SearchInput } from "./styled/SearchPage.styled";

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

    }, [search]);

   const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        router.push(`/search?query=${subreddit}`);
        console.log(inputRef.current?.value);
   }

    return(
        <SearchInputSectionWrapper>
            <FormTitle>Find the best time for a subreddit</FormTitle>
            <SearchPageFormWrapper onSubmit={submitHandler}>
                <div>
                    r /
                    <SearchInput
                        type="text"
                        name="subreddit"
                        ref={inputRef}
                        value={subreddit}
                        onChange={(event) => {setSubreddit(event.target.value)}}
                    />
                    <SearchInputButton type="submit">SEARCH</SearchInputButton>
                </div>
            </SearchPageFormWrapper>
        </SearchInputSectionWrapper>
        
    )
}

export default SearchInputSection;
