import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [data , setData] = useState("");
const calcBtns =[];
[9,8,7,6,5,4,3,2,1,0,".","%"].forEach(item=>{  // return icindeki sayi bolumu 26 satir
  calcBtns.push(
    <button onClick={e =>{
      setData(data + e.target.value)
    }}
    value={item} key={item}>
    {item}
    </button>
  )
})


  return (
    <div className="wrapper">
      <div className="show-input">
        {data}
      </div>
<div className='digits flex'>  {calcBtns} </div>
<div className='modifiers subgrid'>  
<button  onClick={() => setData(data.substring(0, data.length - 1)) } >
Clear
</button>

<button onClick={() => setData("")} >
AC
</button>
  </div>
<div  className='operations subgrid' >
<button onClick={e => setData (data + e.target.value)} value="+">
+
</button>
<button onClick={e => setData (data + e.target.value)} value="-">
-
</button>

<button onClick={e => setData (data + e.target.value)} value="*">
*
</button>

<button onClick={e => setData (data + e.target.value)} value="/">
/
</button>

<button onClick={ e =>{
  try {
    setData(
      String(eval(data)).length > 3 &&
      String(eval(data)).includes(".")
    ? String(eval(data).toFixed(4))
    : String(eval(data))

    )
    
  } catch (err) {
    console.log(err);
  }

} }  
value="="
>

=
</button>


</div>
   
    </div>
  );
}

export default App;

// 28 satirda setdata yi substring ile parcaya ayirdik ve data uzunlugu -1 ile  eksi islemi halledildi

// buton kisminda silme islemi yaptik 
// 26. satirda sayi sablonu geldi ve classname ile clear kismini bitisik hale getirdik

//32. satirda clear ynina ac ekledik
