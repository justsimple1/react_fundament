import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import Post from "./components/Post";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Javascript  - язык программирования'},
        {id: 2, title: 'Javascript 2', body: 'Javascript  - язык программирования'},
        {id: 3, title: 'Javascript 3', body: 'Javascript  - язык программирования'}
    ])




    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="Название поста"/>
                <MyInput type="text" placeholder="Описание поста"/>
                <MyButton disabled>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
