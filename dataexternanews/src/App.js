import logo from './logo.svg';
import './App.css';

import React from 'react';
// import Data from './Data.json';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';


const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      // Part 1, step 1 code goes here
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

function App() {

  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("nodejs");
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPage, setCurrectPage] = useState(1);
  // const pageSize = 8;
  const recordsPerPage = 5;
  const [{ Data, isLoading, isError }, doFetch] = useDataApi(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-04-01&sortBy=publishedAt&apiKey=64a601e615524f79abd2cb4e4c6550bb",
    {
      articles: [],
    }
  );

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.articles.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.articles.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div>
      <table className='table'>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {records.map((d,i) => (
            <tr>
              <td>{d.author}</td>
              <td>{d.title}</td>
              <td>{d.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
            <ul className='pagination'>
              <li className='page-item'>
                <a href='#' className='page-link' onClick={prePage}>Prev</a>
              </li>
              {
                numbers.map((n, i) => (
                  <li className={`page-item ${currectPage === n ? 'active' : ''}`} key={i}>
                    <a href='#' className='page-link' onClick={()=> changeCPage(n)} >{n}</a>
                  </li>
                ))
              }
                <li className='page-item'>
                  <a href='#' className='page-link' onClick={nextPage}>Next</a>
              </li>
            </ul>
      </nav>

    </div>
  );

  function prePage(){
    if(current !==1){
      setCurrectPage(currentPage - 1)
    }
  }
  function changeCPage(id){
    setCurrectPage(id)
  }
  function nextPage(){
    if(currentPage !==npage){
      setCurrectPage(currentPage + 1)
    }
  }

}

export default App;
