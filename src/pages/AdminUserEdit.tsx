import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import UserType from "../types/user";
import { useQuery } from "react-query";
import { ApiClient } from "../apis/apiClient";

const AdminUserEdit: React.FC = () => {
  const navigate = useNavigate();

  const index = useLocation().pathname.split("/").pop();

  const { isLoading, data, refetch } = useQuery<UserType>({
    queryKey: ["user", Number(index)],
    queryFn: () => {
      return ApiClient.getInstance().getUser(Number(index));
    },
  });

  const handleSave = (updatedUser: UserType) => {
    navigate(`/admin`);
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
      <EditForm data={data} onSave={handleSave} labels={labels} />
    </div>
  );
};

export default AdminUserEdit;
