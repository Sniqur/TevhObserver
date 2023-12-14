import React, { Component } from 'react';
import styles from '../Styles/MacBooks.module.css';



const MacBooks = ({Data}) => {
  
  
  const filtered = Data.filter(Data => {
    return Data?.attributes?.category === "MacBook"
  })

  return (
    
    <body>

        <div className={styles.container}>
          {filtered.map((item) => (
            <div key={item.id}>
              <div className={styles.product_wrap}>
                <div className={styles.product_item}>
                  <div className={styles.product_image}>
                    <img src={'http://localhost:1337' + item?.attributes?.img?.data?.attributes?.url}></img>
                  </div>
                  <div className={styles.product_buttons}>
                    <a href={item?.attributes?.title} className={styles.button}>Переглянути</a>
                  </div>
                </div>
                <div className={styles.product_title}>{item?.attributes?.title}</div>
              </div>
            </div>
          ))}
        </div>
      </body>
  )


}

 export default MacBooks