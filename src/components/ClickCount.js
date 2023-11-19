import React,{useState} from 'react';

export default function ClickCount() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if (count === 10){
            setCount(0);
        }else{
            setCount(count + 1);
        }
    };

    return(
        <div className="count-wrap">
            <p>回数: {count}</p>
            <button onClick ={handleClick}>クリック</button>
        </div>
    );
}

