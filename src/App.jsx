

import "./app.css";
import { useEffect, useState } from "react";



function App() {
  const [products, setProducts] = useState([]);
  useEffect(function(){
    fetch('https://fakestoreapi.com/products')
      .then(function(response){
        const data = response.json();
        return data;
      })
      .then(function(data){
        console.log(data);
        setProducts(data);
      })
  },[]);
  return(
    <div className="" id="">
      <h2 className="Title" id="">

      </h2>
      <div className="container" id="">
        {products.map(function(product){
          console.log(product)
          return(
            <div className="card" id="">
          <img src={product.image} alt="" className="prodImg" id="" />
          <p className="" id="">
            {product.title}
          </p>
          <p className="" id="">
            $1
          </p>
        </div>
          );
        })}
        
        <div className="card" id="">
          <img src="" alt="" className="prodImg" id="" />
          <p className="" id="">
            2
          </p>
          <p className="" id="">
            $2
          </p>
        </div>
        <div className="card" id="">
          <img src="" alt="" className="prodImg" id="" />
          <p className="" id="">
            3
          </p>
          <p className="" id="">
            $3
          </p>
        </div>
        <div className="card" id="">
          <img src="" alt="" className="prodImg" id="" />
          <p className="" id="">
            4
          </p>
          <p className="" id="">
            $4
          </p>
        </div>
      </div>





      <div className="++" id="">
        <div className="" id="">
          <h2 className="" id=""></h2>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
        </div>
        <div className="" id="">
          <h2 className="" id=""></h2>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
        </div>
        <div className="" id="">
          <h2 className="" id=""></h2>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
          <div className="" id="">
            <img src="" alt="" className="" id="" />
            <div className="">
              <div className="" id=""></div>
              <div className="" id=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;