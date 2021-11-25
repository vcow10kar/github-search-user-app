import styles from './searchResult.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function SearchResultCard({ data }) {
    const [user, setUser] = useState(null);

    const fetchUser = () => {
        axios.get(`${data.url}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log("Error:", err);
            });
            
    }


    useEffect(() => {
        fetchUser();
        console.log(user);
    }, []);

    return (
        <div className={styles.resultCard}>
            <img src={data.avatar_url} alt="avatar" />
            <a href={data.html_url} target="_blank" rel="noreferrer"><h2>@{data.login}</h2></a>

            {user ?
                <div>
                    {user.name ? <h1>{user.name}</h1> : null}
                    <div className={styles.userPresence}>
                        <p><span style={{ color: '#58A5FE' }}>Followers:</span> {user.followers}</p>
                        <p><span style={{ color: '#58A5FE' }}>Following:</span> {user.following}</p>
                    </div>

                    {user.location ? <h3> <LocationOnIcon color="primary" /> {user.location}</h3> : null}
                </div>
                : null}
        </div>
    )
}


export default SearchResultCard;