import React, {useState} from 'react';
import GithubTable from './GithubTable';

const Github = () => {
    const [data, setData] = useState({});
    const [username, setUsername ] = useState("");
    const [repositories, setRepositories ] = useState([]);

    const onChangeHandler = e => {
        setUsername(e.target.value);
    };

    const submitHandler = async e => {
        e.preventDefault();
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        // console.log(profileJson);
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);
        if(profileJson){
            setData(profileJson);
            setRepositories(repoJson);
        }
    }

    return (
        <div className="row">
            <div className="col s12 m6">
            <div className="card">
                <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    <input type="text" value={username} onChange = {onChangeHandler} />

                        <button type="submit" onClick={submitHandler}>Search</button>

                        <GithubTable data = {data} repositories={repositories} />

                </div>
                <div className="card-action">
                <a href="#">Git Hub Repositories</a>
                </div>
            </div>
            </div>
        </div>
        
               
    )
}

export default Github;