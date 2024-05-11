import { useEffect, useState } from "react";
import "./home.css";
import {} from 'react-icons';
import {Circles} from 'react-loader-spinner';
import ProductTile from "../components/product-tile/product-tile";

export default function Home() {

  // fetch 받아온 데이터를 보관할 state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // https://fakestoreapi.com/products
  // 서버에서 데이터를 받기 위해서 useEffect와 fetxh를 사용
  async function fetchListProducts() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    console.log(data);
    if(data) {
      setLoading(false); // 로딩 OFF
      setProducts(data);
    }
  }

  // 리액트에서 화면과는 별개로 좀 오래 걸리는 작업은
  // useEffect
  useEffect(() => {
    fetchListProducts();
  }, []) // , []를 하면 update에 대해서는 발동안함(처음만 발동)

  return (
    <div>
      {
        loading ? (
          <div className="my-loading">
            <Circles height={'120'} width={'120'} color='rgb(127,29,29)' visible={true}/> 
          </div>
        ) : (
          <div className="my-product-grid">
            {
              // 반복문 map (배열에 대해서 사용)
              products.map((product, idx) => {
                return (
                  <ProductTile product={product} key={idx}/>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}