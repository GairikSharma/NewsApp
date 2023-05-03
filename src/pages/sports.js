import React, { useEffect, useState } from 'react'
import '../styles/newsapi.css'
import Aos from 'aos';
import "aos/dist/aos.css";
function NewsapiSports() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const [news, setNews] = useState([])
    const fetchData = async () => {
        const data = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json')
        const res = await data.json()
        setNews(res.articles)
        console.log(res.articles);
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (


        <section className='container'>
            
            {

                news.map((newdata) => {
                    return <div className='card' data-aos="fade-in" key={newdata.description}>
                        
                        <img src={newdata.urlToImage} alt='NewsHunt' key={newdata.urlToImage} /><br /><br />
                        
                        <h2>{newdata.title}</h2>
                        <p>{newdata.description}</p>
                        <div className="card-footer">
                            <button><a href={newdata.url}>Source</a></button>
                            <p className='publish'>Publish Date</p>
                            <p className='publish'>{newdata.publishedAt}</p>
                        </div>

                    </div>

                })
            }

        </section>

    )
}

export default NewsapiSports