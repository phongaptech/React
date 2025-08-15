function UserInfo(props) {
    return (
        <div>
            <h1>Bài 1 - Props: Truyền dữ liệu từ cha sang con</h1>
            <h2>Thông tin người dùng</h2>
            <p>Tên: <strong>{props.name}</strong></p>
            <p>Tuổi: {props.age}</p>
        </div>
    );
}
export default UserInfo;