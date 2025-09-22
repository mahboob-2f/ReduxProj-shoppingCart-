import React, { use, useEffect, useState } from 'react'
import {BaseUrl} from '../BaseUrl';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

  const url = BaseUrl;
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      // console.log(data);
      setPosts(data);
    } catch (e) {
      console.log("something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='w-[73%] mx-auto min-h-[100vh]    grid grid-cols-4 pt-12'>
      { 
        loading ? (<Spinner/>):(
          posts.length > 0 ?(
            posts.map((post)=>{
              return <Product key={post.id}  post={post}/>
            })
          ):(
            <div> no data found </div>
          )
        )
      }
    </div>
  )
}

export default Home