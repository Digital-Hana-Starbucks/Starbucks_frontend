import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import UserType from "../types/user";

const AdminUserEdit: React.FC = () => {
  const navigate = useNavigate();
  const { index } = useParams<{ index: string }>();

  const userToEdit = {
    userIdx: 1,
    userId: "hong1",
    userPw: "dfkajd216dfafa3faef",
    userNickname: "닉네임",
    userRole: "USER",
    userPoint: 0,
    userJoinDate: "2023-08-30",
  };

  const handleSave = (updatedUser: UserType) => {
    navigate(`/AdminUserList`);
    // TODO: 수정 api연결
  };

  const labels = [
    { key: "userId", label: "아이디", editable: true },
    { key: "userPw", label: "암호", editable: true },
    { key: "userNickname", label: "이름", editable: true },
    { key: "userRole", label: "권한", editable: true },
    { key: "userJoinDate", label: "가입일", editable: true },
    { key: "userPoint", label: "적립금", editable: true },
  ];

  return (
    <div>
      <h1 className="text-2xl m-2">회원 정보 수정</h1>
      <EditForm data={userToEdit} onSave={handleSave} labels={labels} />
    </div>
  );
};

export default AdminUserEdit;
