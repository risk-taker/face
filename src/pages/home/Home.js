import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './Home.module.css';
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
    const [items, setItems] = useState([]);

    const [hasMore, sethasMore] = useState(true);

    const [page, setpage] = useState(2);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                `https://randomuser.me/api/?page=1&results=16`
            );
            const data = await res.json();
            setItems(data.results);
        };

        getData();
    }, []);

    const getData = async () => {
        const res = await fetch(
            `https://randomuser.me/api/?page=${page}&results=16`
        );
        const data = await res.json();
        return data.results;
    };

    const fetchData = async () => {
        const dataFromServer = await getData();

        setItems([...items, ...dataFromServer]);
        if (dataFromServer.length === 0 || dataFromServer.length < 16) {
            sethasMore(false);
        }
        setpage(page + 1);
    };
    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h1>loading...</h1>}
            endMessage={<p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
            </p>}
        >

            {items.map((item) => {
                return <div className='container' key={item.login.username} >
                    <div className={styles.wrapper}>
                        <h1>{`${item.name.title} ${item.name.first} ${item.name.last}`}</h1>
                        <img className={styles.imgCircle} src={item.picture.medium} alt="item" />
                    </div>
                    <hr />
                </div>
            })}

        </InfiniteScroll>
    );
}

export default Home