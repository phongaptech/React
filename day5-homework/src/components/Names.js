import { useState } from "react";
function Names() {
    const [names, setNames] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const addName = () => {
        setNames(names.push(inputValue));
        setInputValue("");
    };
    const deleteName = (index) => {
        const newNames = names;
        setNames(newNames);
    };
    return (
        <div>
            <h1>Bài 2: Quản lý danh sách tên</h1>
            <h2>Quản lý danh sách</h2>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Nhập tên"/>
            <button onClick={addName}>Thêm</button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>
                        {name}
                        <button onClick={() => deleteName(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Names;