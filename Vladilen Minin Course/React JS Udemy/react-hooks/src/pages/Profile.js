import React, {useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Repos } from "../components/Repos";
import { GithubContext } from "../context/github/githubContext";

export const Profile = ({match}) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);

  const urlName = match.params.name

  useEffect(()=> {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  },[])

  if(loading) {
    return <p className='text-center'>Завантаження... </p>
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    publick_repos,
    publick_gists,
    following
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link">
        На головну
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: "150px" }} />
              <h1>{name}</h1>
              {location && <p>Місцезнаходження: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark"
              >
                Відкрити профіль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: {login}</strong>
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Компанія: {company}</strong>
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: {blog}</strong>
                  </li>
                )}
              </ul>
              <div className="badge badge-primary">Підписники: {followers}</div>
              <div className="badge badge-success">Підписаний: {following}</div>
              <div className="badge badge-info">
                Репозиторії: {publick_repos}
              </div>
              <div className="badge badge-dark">Gists: {publick_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  );
};
