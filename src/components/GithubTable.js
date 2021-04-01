import React from 'react';

const GithubTable = ({data, repositories}) => {
    return (

        <table className="striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
            {repositories.map(repo => (

                <tr key={repo.name}>
                    <td>{repo.name}</td>
                    <td>
                        <a href={repo.html_url} className="header" target="_blank">
                        {repo.name}
                        </a>
                        {repo.viewerHasStarred}
                    </td>
                </tr>
        
            ))}
            </tbody>
        </table>
    )
}
export default GithubTable;