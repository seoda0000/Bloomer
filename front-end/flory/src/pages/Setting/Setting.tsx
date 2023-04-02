import React, { useState } from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "../../components/common/Accordion/Accordion";
import { useNavigate } from "react-router-dom";
import { logoutAction, userDeleteAction } from "../../redux/modules/user";
import { localData } from "../../redux/modules/user/token";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import BackButton from "../../components/common/BackButton/BackButton";
import { resetUser, userAction } from "../../redux/modules/user/user-slice";
import AlertModal from "../../components/common/Modal/AlertModal/AlertModal";

const Setting = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector((state) => state.user.userData.email);

  // 모달 상태 관리
  const [open, setOpen] = React.useState(false);
  const [errorInfo, setErrorInfo] = useState(
    "회원 탈퇴 후에는 복구할 수 없습니다. \n 탈퇴를 원하시면 확인을 눌러주세요."
  );
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    const accessToken = localData.getAccessToken();
    dispatch(logoutAction(accessToken)).then(() => {
      dispatch(resetUser());
      localData.clear();
    });
    navigate("/");
  };

  const contents = (
    <div>
      <ul>
        <li>
          <a href="#">Photoshop</a>
        </li>
        <li>
          <a href="#">HTML</a>
        </li>
        <li>
          <a href="#">CSS</a>
        </li>
        <li>
          <a href="#">Maquetacion web</a>
        </li>
      </ul>
    </div>
  );

  const handleOpenModal = () => {
    handleOpen();
  };

  const handleUserDelete = () => {
    dispatch(userDeleteAction(userEmail));
  };

  return (
    <SMain>
      <div className="header">
        {/* 뒤로 가기 아이콘 */}

        <BackButton color="black" />

        <div className="inner-header flex">환경 설정</div>
      </div>

      <div className="box-Accordion">
        <Accordion title="계정" contents={contents} icon={faUser} />
        <Accordion title="알림" contents={contents} icon={faBell} />
        <Accordion title="정보" contents={contents} icon={faCircleInfo} />
      </div>
      <div>
        <button onClick={handleLogout}>로그아웃</button>
        <button onClick={handleOpenModal}>회원탈퇴</button>
      </div>
      <div>
        <AlertModal
          open={open}
          handleClose={handleClose}
          content={errorInfo}
          action={handleUserDelete}
        />
      </div>
    </SMain>
  );
};

export default Setting;
