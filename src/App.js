import styles from './Styles/App.module.css';
import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Phones from './pages/Phones';
import MacBook from './pages/MacBook';
import AppleWatch from './pages/AppleWatch';
import AirPods from './pages/AirPods';
import Pads  from './pages/Pads';
import Item_page from './pages/Item_page';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import useFetch from './hooks/useFetch'



function App() {

  const {loading, error, data} = useFetch('http://localhost:1337/api/phones?populate=*')


  console.log(data);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: </p>
  return (
    <div className={styles.body}>
      <Header></Header>
      <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="iPhone" element={<Phones Data={data.data} />}></Route>
        <Route path="MacBook" element={<MacBook Data={data.data} />}></Route>
        <Route path="AppleWatch" element={<AppleWatch Data={data.data} />}></Route>
        <Route path="iPad" element={<Pads Data={data.data} />}></Route>
        <Route path="Airpods" element={<AirPods Data={data.data} />}></Route>



        {data.data.map((data1) => (
          <Route
            exact
            path={(data1?.attributes?.title)}
            element={
              <Item_page
                id={data1.id}
                title={data1?.attributes?.title}
                img={'http://localhost:1337' + data1?.attributes?.img?.data?.attributes?.url}
                category={data1?.attributes?.category}
                firstParam={'http://localhost:1337' + data1?.attributes?.firstParam?.data?.attributes?.url}
                secondParam={'http://localhost:1337' + data1?.attributes?.secondParam?.data?.attributes?.url}
                thirdParam={'http://localhost:1337' + data1?.attributes?.thirdParam?.data?.attributes?.url}
                fourthParam={'http://localhost:1337' + data1?.attributes?.fourthParam?.data?.attributes?.url}
                fifthParam={'http://localhost:1337' + data1?.attributes?.fifthParam?.data?.attributes?.url}
                sixthParam={'http://localhost:1337' + data1?.attributes?.sixthParam?.data?.attributes?.url}
                seventhParam={'http://localhost:1337' + data1?.attributes?.seventhParam?.data?.attributes?.url}
                eighthParam={'http://localhost:1337' + data1?.attributes?.eighthParam?.data?.attributes?.url}
                shrtInfoView={data1?.attributes?.shrtInfoView}
                itemsize={data1?.attributes?.itemsize}
                ></Item_page>
            }
          ></Route>
        ))}
      </Routes>
      </>
      <Footer></Footer>
    </div>
  )
}

export default App;
