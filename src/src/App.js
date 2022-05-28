import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
    {
        id: 1,
        author: "추성준",
        content: "하이1",
        emotion: 5,
        created_date: new Date().getTime(),
    },
    {
        id: 2,
        author: "누구쉐",
        content: "하이2",
        emotion: 5,
        created_date: new Date().getTime(),
    },
    {
        id: 3,
        author: "마루쉐",
        content: "하이3",
        emotion: 5,
        created_date: new Date().getTime(),
    },
];

const App = () => {
    return (
        <div className="App">
            <DiaryEditor />
            <DiaryList diaryList={dummyList} />
        </div>
    );
};
export default App;
