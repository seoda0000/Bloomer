import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

// 코드 스플리팅 (Code Splitting)
const Main = React.lazy(() => import("./pages/Main/Main"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/Signup/Signup"));
const Map = React.lazy(() => import("./pages/Map/Map"));
const MyPage = React.lazy(() => import("./pages/MyPage/MyPage"));
const Diary = React.lazy(() => import("./pages/Diary/Diary"));
const DiaryCreate = React.lazy(() => import("./pages/DiaryCeate/DiaryCreate"));
const DiarySelect = React.lazy(() => import("./pages/DiarySelect/DiarySelect"));
const Garden = React.lazy(() => import("./pages/Garden/Garden"));
const GardenEdit = React.lazy(() => import("./pages/GardenEdit/GardenEdit"));

function App() {
  return (
    <div className="app">
      {/* // fallback 추가하기 */}
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* 로그인 되어있으면 메인페이지로 보내기 */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/map" element={<Map />} />
            <Route path="/diary/" element={<Diary />} />
            <Route path="/diary/create" element={<DiaryCreate />} />
            <Route path="/diary/select" element={<DiarySelect />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/garden/edit" element={<GardenEdit />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
