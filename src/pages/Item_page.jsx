import React, { Component, useEffect } from 'react';
import styles from '../Styles/Item_page.module.css'


const Item_page = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top when the component mounts
  }, []);

 
  if (props.category == "iPhone") {


    const infoString = props.shrtInfoView;
    const infoArray = infoString.split(";");
  
    const el1 = infoArray[1].split('/')
    const el2 = infoArray[2].split('/')
  
   
  
    const itemsizeinfo = props.itemsize;
    const itemsizeinfoArray = itemsizeinfo.split(";");
   
    console.log(props.category);

    return (
      <body className={styles.body}>
        <div className={styles.item_name}>{props.title}
        </div>
        <div className={styles.main_view}>
          <div className={styles.item_igm}>
            <img src={props.img}></img>
          </div>
          <div className={styles.item_short_info} >
            <div className={styles.item_container} index={0} >
              <div className={styles.item_container_img} >  
                <img src={props.firstParam}></img>  
              </div>
              <b>{infoArray[0]}</b>
            </div>
            <div className={styles.item_container} index={1}>
              <div className={styles.item_container_img} >
                <img src={props.secondParam}></img>
              </div>
              {el1.map((piece, index) => (
                <b>{piece}<br /></b>
              ))}
            </div>
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >
                <img src={props.thirdParam}></img>
              </div>
              {el2.map((piece, index) => (
                <b>{piece}<br /></b>
              ))}
            </div>
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >
                <img src={props.fourthParam}></img>
              </div>
              <b>{infoArray[3]}</b>
            </div>
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >
                <img src={props.fifthParam}></img>
              </div>
              <b>{infoArray[4]}</b>
            </div>
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >
                <img src={props.sixthParam}></img>
              </div>
              <b>{infoArray[5]}</b>
            </div>
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >
                <img src={ props.seventhParam}></img>
              </div>
              <b>{infoArray[6]}</b>
            </div>
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >
                <img src={ props.eighthParam}></img>
              </div>
              <b>{infoArray[7]}</b>
            </div>
          </div>

          <div className={styles.item_add_info}>

            <a>{itemsizeinfoArray[0]}</a><br />
            <b>{itemsizeinfoArray[1]}</b><br />
            <a>{itemsizeinfoArray[2]}</a><br />
            <b>{itemsizeinfoArray[3]}</b><br />
            <a>{itemsizeinfoArray[4]}</a><br />
            <b>{itemsizeinfoArray[5]}</b><br />
            <a>{itemsizeinfoArray[6]}</a><br />
            <b>{itemsizeinfoArray[7]}</b>

          </div>
        </div>
      </body>
    )
  }
  else if (props.category == "MacBook") {

    const infoString = props.shrtInfoView;
    const infoArray = infoString.split(";");
  
    const el0 = infoArray[0].split('/')
    const el1 = infoArray[1].split('/')
    const el2 = infoArray[2].split('/')
    const el3 = infoArray[3].split('/')
    const el4 = infoArray[4].split('/')
    const el5 = infoArray[5].split('/')
  
    // const imageString = props.icons;
    // const imageArray = imageString.split("|")
  
    const itemsizeinfo = props.itemsize;
    const itemsizeinfoArray = itemsizeinfo.split(";");
    
    return (
      <body className={styles.body}>
        <div className={styles.item_name}>{props.title}
        </div>
        <div className={styles.main_view}>
          <div className={styles.item_igm}>
            <img src={props.img}></img>
          </div>
          <div className={styles.item_short_info} >
            <div className={styles.item_container} index={0} >
              <div className={styles.item_container_img} >
                <img src={ props.firstParam}></img>
              </div>
            </div>
            <div className={styles.item_container} index={1}>
             
                <c className={styles.mainText}>{el0[0]}<br /></c>
                <c className={styles.belowMainText}>{el0[1]}<br /></c>

            </div>
            <div className={styles.item_container}>
              
            <c className={styles.mainText}>{el1[0]}<br /></c>
                <c className={styles.belowMainText}>{el1[1]}<br /></c>

            </div>
            <div className={styles.item_container}>

            <c className={styles.mainText}>{el2[0]}<br /></c>
                <c className={styles.belowMainText}>{el2[1]}<br /></c>
                <c className={styles.belowMainText}>{el2[2]}<br /></c>

            </div>
            <div className={styles.item_container}>
            <c className={styles.belowMainText}>{el3[0]}<br /></c>
                <c className={styles.mainText}>{el3[1]}<br /></c>
                <c className={styles.belowMainText}>{el3[2]}<br /></c>
            </div>
            <div className={styles.item_container}>
            <c className={styles.belowMainText}>{el4[0]}<br /></c>
                <c className={styles.mainText}>{el4[1]}<br /></c>
                <c className={styles.belowMainText}>{el4[2]}<br /></c>
            </div>
            <div className={styles.item_container}>
            <c className={styles.belowMainText}>{el5[0]}<br /></c>
                <c className={styles.mainText}>{el5[1]}<br /></c>
                <c className={styles.belowMainText}>{el5[2]}<br /></c>
            </div>
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >
                <img src={ props.eighthParam}></img>
              </div>
              
              <b>{infoArray[6]}</b>
            
            </div>
          </div>

          <div className={styles.item_add_info}>

            <a>{itemsizeinfoArray[0]}</a><br />
            <b>{itemsizeinfoArray[1]}</b><br />
            <a>{itemsizeinfoArray[2]}</a><br />
            <b>{itemsizeinfoArray[3]}</b><br />
            <a>{itemsizeinfoArray[4]}</a><br />
            <b>{itemsizeinfoArray[5]}</b><br />
            <a>{itemsizeinfoArray[6]}</a><br />
            <b>{itemsizeinfoArray[7]}</b>

          </div>
        </div>
      </body>
    )
  }
  else if (props.category == "AppleWatch") {

    
    const infoString = props.shrtInfoView;
    const infoArray = infoString.split(";");
  
    const el0 = infoArray[0].split('/')
    const el1 = infoArray[1].split('/')
    const el2 = infoArray[2].split('/')
    const el3 = infoArray[3].split('/')
    const el4 = infoArray[4].split('/')
    const el5 = infoArray[5].split('/')
    const el6 = infoArray[6].split('/')
    const el7 = infoArray[7].split('/')

  
    const itemsizeinfo = props.itemsize;
    const itemsizeinfoArray = itemsizeinfo.split(";");
   
    // console.log({ infoArray });

    return (
      <body className={styles.body}>
        <div className={styles.item_name}>{props.title}
        </div>
        <div className={styles.main_view}>
          <div className={styles.item_igm}>
            <img src={props.img}></img>
          </div>
          <div className={styles.item_short_info} >
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.firstParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el0[0]}<br /></c>
              <c className={styles.belowMainText}>{el0[1]}<br /></c>


            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.secondParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el1[0]}<br /></c>
              <c className={styles.belowMainText}>{el1[1]}<br /></c>
              <c className={styles.belowMainText}>{el1[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.thirdParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el2[0]}<br /></c>
            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.fourthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el3[0]}<br /></c>
              <c className={styles.belowMainText}>{el3[1]}<br /></c>
            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.fifthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el4[0]}<br /></c>
              <c className={styles.belowMainText}>{el4[1]}<br /></c>
            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.sixthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el5[0]}<br /></c>
              <c className={styles.belowMainText}>{el5[1]}<br /></c>
            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.seventhParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el6[0]}<br /></c>
              <c className={styles.belowMainText}>{el6[1]}<br /></c>
            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.eighthParam}></img>  
              </div>
              
              <c className={styles.belowMainText}>{el7[0]}<br /></c>
              <c className={styles.belowMainText}>{el7[1]}<br /></c>
            </div>

          </div>

          <div className={styles.item_add_info}>

            <a>{itemsizeinfoArray[0]}</a><br />
            <b>{itemsizeinfoArray[1]}</b><br />
            <a>{itemsizeinfoArray[2]}</a><br />
            <b>{itemsizeinfoArray[3]}</b><br />
            <a>{itemsizeinfoArray[4]}</a><br />
            <b>{itemsizeinfoArray[5]}</b><br />
            <a>{itemsizeinfoArray[6]}</a><br />
            <b>{itemsizeinfoArray[7]}</b>

          </div>
        </div>
      </body>
    )
  }
  else if (props.category == "iPad") {
    const infoString = props.shrtInfoView;
    const infoArray = infoString.split(";");
  
    const el0 = infoArray[0].split('/')
    const el1 = infoArray[1].split('/')
    const el2 = infoArray[2].split('/')
    const el3 = infoArray[3].split('/')
    const el4 = infoArray[4].split('/')
    const el5 = infoArray[5].split('/')
    const el6 = infoArray[6].split('/')
    const el7 = infoArray[7].split('/')

  
    const itemsizeinfo = props.itemsize;
    const itemsizeinfoArray = itemsizeinfo.split(";");
   
    // console.log({ infoArray });

    return (
      <body className={styles.body}>
        <div className={styles.item_name}>{props.title}
        </div>
        <div className={styles.main_view}>
          <div className={styles.item_igm}>
            <img src={props.img}></img>
          </div>
          <div className={styles.item_short_info} >
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                {/* <img src={ props.firstParam}></img>   */}
              </div>
              <c className={styles.mainText}>{el0[0]}<br /></c>
              <c className={styles.belowMainText}>{el0[1]}<br /></c>
              <c className={styles.belowMainText}>{el0[2]}<br /></c>


            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.secondParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el1[0]}<br /></c>
              <c className={styles.belowMainText}>{el1[1]}<br /></c>
              <c className={styles.belowMainText}>{el1[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.thirdParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el2[0]}<br /></c>
              <c className={styles.belowMainText}>{el2[1]}<br /></c>
              <c className={styles.belowMainText}>{el2[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.fourthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el3[0]}<br /></c>
              <c className={styles.belowMainText}>{el3[1]}<br /></c>
              <c className={styles.belowMainText}>{el3[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.fifthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el4[0]}<br /></c>
              <c className={styles.belowMainText}>{el4[1]}<br /></c>
              <c className={styles.belowMainText}>{el4[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.sixthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el5[0]}<br /></c>
              <c className={styles.belowMainText}>{el5[1]}<br /></c>
              <c className={styles.belowMainText}>{el5[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.seventhParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el6[0]}<br /></c>
              <c className={styles.belowMainText}>{el6[1]}<br /></c>
              <c className={styles.belowMainText}>{el6[2]}<br /></c>


            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.eighthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el7[0]}<br /></c>
              <c className={styles.belowMainText}>{el7[1]}<br /></c>
              <c className={styles.belowMainText}>{el7[2]}<br /></c>


              
            </div>

          </div>

          <div className={styles.item_add_info}>

            <a>{itemsizeinfoArray[0]}</a><br />
            <b>{itemsizeinfoArray[1]}</b><br />
            <a>{itemsizeinfoArray[2]}</a><br />
            <b>{itemsizeinfoArray[3]}</b><br />
            <a>{itemsizeinfoArray[4]}</a><br />
            <b>{itemsizeinfoArray[5]}</b><br />
            <a>{itemsizeinfoArray[6]}</a><br />
            <b>{itemsizeinfoArray[7]}</b>

          </div>
        </div>
      </body>
    )
  }
  else if (props.category == "AirPods") {
    const infoString = props.shrtInfoView;
    const infoArray = infoString.split(";");
  
    const el0 = infoArray[0].split('/')
    const el1 = infoArray[1].split('/')
    const el2 = infoArray[2].split('/')
    const el3 = infoArray[3].split('/')
    const el4 = infoArray[4].split('/')
    const el5 = infoArray[5].split('/')
    const el6 = infoArray[6].split('/')
    const el7 = infoArray[7].split('/')

  
    const itemsizeinfo = props.itemsize;
    const itemsizeinfoArray = itemsizeinfo.split(";");
   
    // console.log({ infoArray });

    return (
      <body className={styles.body}>
        <div className={styles.item_name}>{props.title}
        </div>
        <div className={styles.main_view}>
          <div className={styles.item_igm}>
            <img src={props.img}></img>
          </div>
          <div className={styles.item_short_info} >
            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.firstParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el0[0]}<br /></c>
              <c className={styles.belowMainText}>{el0[1]}<br /></c>


            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.secondParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el1[0]}<br /></c>
              <c className={styles.belowMainText}>{el1[1]}<br /></c>
              <c className={styles.belowMainText}>{el1[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.thirdParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el2[0]}<br /></c>
            </div>

            <div className={styles.item_container}>
              {/* <div className={styles.item_container_img} >  
                <img src={ props.fourthParam}></img>  
              </div> */}
              <c className={styles.mainText}>{el3[0]}<br /></c>
              <c className={styles.belowMainText}>{el3[1]}<br /></c>
              <c className={styles.belowMainText}>{el3[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.fifthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el4[0]}<br /></c>
              <c className={styles.belowMainText}>{el4[1]}<br /></c>
              <c className={styles.belowMainText}>{el4[2]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.sixthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el5[0]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.seventhParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el6[0]}<br /></c>

            </div>

            <div className={styles.item_container}>
              <div className={styles.item_container_img} >  
                <img src={ props.eighthParam}></img>  
              </div>
              <c className={styles.belowMainText}>{el7[0]}<br /></c>

              
            </div>

          </div>

          <div className={styles.item_add_info}>

            <a>{itemsizeinfoArray[0]}</a><br />
            <b>{itemsizeinfoArray[1]}</b><br />
            <a>{itemsizeinfoArray[2]}</a><br />
            <b>{itemsizeinfoArray[3]}</b><br />
            <a>{itemsizeinfoArray[4]}</a><br />
            <b>{itemsizeinfoArray[5]}</b><br />
            <a>{itemsizeinfoArray[6]}</a><br />
            <b>{itemsizeinfoArray[7]}</b>

          </div>
        </div>
      </body>
    )
  }

}

export default Item_page