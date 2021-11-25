import SearchResultCard from "./SearchResultCard";
import styles from './searchResult.module.css';

function SearchResults({results}) {

    return (
        <div className = {styles.search}>
           {results.length > 0 ? 

           <div className = {styles.searchResults}>
               {results.map(item => {
                   return <SearchResultCard key = {item.id} data = {item} />
               })}
           </div>

           :
           null
        }
        </div>
    )
}

export default SearchResults;