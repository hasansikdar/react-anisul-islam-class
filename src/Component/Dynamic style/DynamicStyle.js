import React, { useEffect, useState } from 'react';

const DynamicStyle = () => {
    const [inputValue, setInputValue] = useState('');
    const [border, setBorder] = useState(false);
    const handleText = (e) => {
        setInputValue(e.target.value);
    }
    useEffect(() =>{
        console.log(inputValue);
        if(inputValue.length >= 3){
            setBorder(true);
        }else{
            setBorder(false);
        }
    },[inputValue])
    return ( 
        <div>
            <input className={border ? 'valid':'invalid'} onChange={handleText} type="text" />
        </div>
    );
};

export default DynamicStyle;