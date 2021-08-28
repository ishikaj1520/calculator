import { useState } from "react";
import {BsBackspace} from "react-icons/bs"

const Create = () => {
    const [result,setResult]=useState("");
    const calculate=()=>{
        try{
            const data=eval(result);
            setResult(data);
        }
        catch(e){
            setResult('error')
        }
    }
    const handleclick=(e)=>{
        const value=e.target.value;
        switch(value){
           case 'equal':calculate(); break;
           default: setResult(result + value);
    //   setResult(result.concat(e.target.value));
        }
    }
    // const handleclear=()=>{

    // }
    const handleAllclear =()=>setResult("");
    // const backspace=()  =>{
      
    // }  
    return (  
        <div className='container'>
            <form>
                <input type="text" value={result}></input>
            </form>
            <div className="keyboard" >
                <button value='null'style={{backgroundColor:'#696969'}} >CE</button>
                <button onClick={handleAllclear} style={{backgroundColor:'#696969',color:'#ff007f'}} >C</button>
                <button  style={{backgroundColor:'#696969'}}><BsBackspace/></button>
                <button onClick={handleclick} value="/" style={{backgroundColor:'#696969'}}>&divide;</button>
                <button onClick={handleclick} value="7">7</button>
                <button onClick={handleclick} value="8">8</button>
                <button onClick={handleclick} value="9" >9</button>
                <button onClick={handleclick} value="*" style={{backgroundColor:'#696969'}}>&times;</button>
                <button onClick={handleclick} value="4">4</button>
                <button onClick={handleclick} value="5">5</button>
                <button onClick={handleclick} value="6">6</button>
                <button onClick={handleclick} value="-" style={{backgroundColor:'#696969'}}>&ndash;</button>
                <button onClick={handleclick} value="1">1</button>
                <button onClick={handleclick} value="2">2</button>
                <button onClick={handleclick} value="3">3</button>
                <button onClick={handleclick} value="+" style={{backgroundColor:'#696969'}}>+</button>
                <button onClick={handleclick} value="."  id="dot" style={{backgroundColor:'#696969'}}>.</button>
                <button onClick={handleclick} value="0" id="zero">0</button>
                <button onClick={handleclick} value="equal" id="equal">=</button>
            </div>

        </div>
    );
}
 
export default Create;