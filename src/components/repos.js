import React, { useEffect, useState } from 'react';
//import repos from "../data/repos";
import Repo from "./repo";





export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);

    useEffect(() => {
        const data =sessionStorage.getItem("repos");
        let myRepos ;
        if(data){
             myRepos = JSON.parse(data);
                setReposCount(myRepos.length);

             myRepos = myRepos.slice(0,13);
            return setRepos(myRepos);
        }
       

        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/kevinddiaz/repos");
             myRepos = await response.json();
             setReposCount(myRepos.length);

            sessionStorage.setItem("repos",JSON.stringify(myRepos));

            setRepos(myRepos);
        }
        fetchRepos();
    })
    return (<div className="max-w-4xl mx-auto mt-12">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
            <p>Colaboracion y contribucion de codigo</p>
        </header>
        <ul className="repos-list pl-4">
            {
                repos.map((repo) => {
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
        <div className="mt-8 text-center m-3">
            <a href="https://github.com/kevinddiaz/" className="bg-purple-500 text-white font-white  rounded  border-purple-700 py-2 px-4 border-b-4"target="_blank" rel="noopener noreferrer">
                Ver mas En GitHub ({reposCount})
            </a>
        </div>
    </div>);

};