import React, {FormEvent} from "react";
import css from "./search.styles.css";

interface Props {
    onSearch: (organizationName: string) => void;
    organizationName : string;
}

export const Search: React.FC<Props> = props => {
    const { onSearch, organizationName } = props;

    const [query, setQuery] = React.useState<string>(organizationName);
    const handleSearch = (e :FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={handleSearch} className={css.container}>
            <input
                name="query"
                value={query}
                onChange={handleChange}
                placeholder="Organization name"
                type="text"
            />
            <button>Search</button>
        </form>
    )
}
