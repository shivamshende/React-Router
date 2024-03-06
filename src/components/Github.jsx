import React, { useState } from 'react';

//In react, components recieve props as an object. The 'onSearch' property we are extracting from the prop object.
//'onSearch' prop was passed from the parent component(Github) to the GithubSearch component.
function GithubSearch({ onSearch }) {
    const [username, setUsername] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch(username);
        }
    };

    const handleClick = () => {
        onSearch(username);
    }

    return (
        <div className="mt-4 mb-4 flex justify-center">
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleSearch} 
                className="border p-1 mr-2 rounded-md text-center"
                style={{ borderColor: 'rgba(59, 130, 246, 1)' }}
            />
            <button onClick={handleClick} className="text-black bg-blue-300 hover:bg-blue-600 px-2 hover:text-white py-1 rounded">
                Search
            </button>
        </div>
    );
}

//Parent component
function Github() {
    const [data, setData] = useState({});

    const fetchData = (username) => {
        console.log('Fetching data for username:', username);
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((userData) => {
                console.log('Received data:', userData);
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