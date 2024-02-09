import React, { useState } from 'react';

//In react, components recieve props as an onject. The 'onSearch' property we are extracting from the prop object.
//'onSearch' prop was passed from the parent component(Github) to the GithubSearch component.
function GithubSearch({ onSearch }) {
    const [username, setUsername] = useState('');

    const handleSearch = () => {
        if (username.trim() !== '') {
            onSearch(username);
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 mr-2"
            />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2">
                Search
            </button>
        </div>
    );
}

//Parent component
function Github() {
    const [data, setData] = useState({});

    const fetchData = (username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((userData) => {
                console.log(userData);
                setData(userData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setData({});
            });
    };

    const handleSearch = (username) => {
        fetchData(username);
    };

    return (
        <div>

            {/* passing 'handleSearch' as the 'onSearch' prop to the 'GithubSearch' component */}
            <GithubSearch onSearch={handleSearch} />

            {/* checks the length of keys in 'data' object is greater than 0 then the JSX content inside (...) will be rendered */}
            {Object.keys(data).length > 0 && (
                <div className="m-4 bg-orange-300 text-gray-800 text-2xl flex justify-center items-center sm:flex-row p-4">
                    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full mx-10' />
                    <div className='ml-4'>
                        <p><span className='font-bold'>Name:</span> {data.name}</p>
                        <div className='flex flex-row'>
                            <p className='mr-8'><span className='font-bold'>Followers:</span> {data.followers}</p>
                            <p className='mr-8'><span className='font-bold'>Following:</span> {data.following}</p>
                        </div>
                        <p><span className='font-bold'>Total repos:</span> {data.public_repos}</p>
                        <p><span className='font-bold'>Bio:</span> {data.bio}</p>
                        <p><span className='font-bold'>Created at:</span> {data.created_at}</p>
                        <p><span className='font-bold'>Last update:</span> {data.updated_at}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Github;