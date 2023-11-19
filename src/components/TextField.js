import React,{useState} from "react";

const TextFieldcomponent = () => {
    // useStateを使用して、テキストの状態を管理します
    const [text, setText] = useState("文字を入力してください");
    
    const [isFocused, setIsFocused] = useState(false);

    // テキストが変更されたときのハンドラー
    const handleChange = (event) => {
        setText(event.target.value);
    };
    
    // フォーカスが当たったときのハンドラー
    const handleFocus = () => {
        setIsFocused(true);
    };

    // フォーカスが外れたときのハンドラー
    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div>
        {/* フォーカスの状態によって、テキストを変更する */}
        <p>{isFocused ? "フォーカスされています" : "フォーカスされていません"}</p>
        {/* テキストフィールド */}
        <input
            type="text"
            value={text}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        {/* 入力されたテキスト表示 */}
        <p>入力されたテキスト : {text}</p>
        </div>
    );
}; 

export default TextFieldcomponent;