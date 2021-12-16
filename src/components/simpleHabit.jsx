import React, { useCallback, useEffect, useRef, useState } from 'react';


const SimpleHabit = () => {
    const [count,setCount] = useState(0);

    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count+1);
    });

    // 두번째인자에 공백으로두면 업데이트 안됨
    // 아주 안주면 프롭이나 스테이트바뀌면 업데이트
    useEffect(() =>{
        console.log(`mounted & updated!: ${count}`)
    },[]);

    return (
    <li className="habit">
        <span ref={spanRef} className="habit-name">
            Reading
        </span>
        <span className="habit-count">{count}</span>
        <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
        >
        <i className="fas fa-plus-square"></i>
        </button>
    </li>
    );
};

export default SimpleHabit;


