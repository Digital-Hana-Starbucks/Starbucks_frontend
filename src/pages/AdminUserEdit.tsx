import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditForm from "../components/organisms/EditForm";
import UserType from "../types/user";
import { useMutation, useQuery } from "react-query";
import { ApiClient } from "../apis/apiClient";

const AdminUserEdit: React.FC = () => {
  const index = location.pathname.split("/").pop();

  const { isLoading, data } = useQuery<UserType>({
    queryKey: ["user", Number(index)],
    queryFn: () => ApiClient.getInstance().getUser(Number(index)),
  });

  const updateUserMutation = useMutation(
    (updatedUser: UserType) =>
      ApiClient.getInstance().updateUser(Number(index), updatedUser),
    {
      onSuccess: () => {
        alert("수정 완료");
        history.back();
      },
    },
  );

  const handleSave = (updatedUser: UserType) => {
    updateUserMutation.mutate(updatedUser);
  };

  const labels = [
    { key: "userId", label: "아이디", editable: true, type: "text" },
    { key: "userPw", label: "암호", editable: true, type: "text" },
    { key: "userNickname", label: "이름", editable: true, type: "text" },
    { key: "userRole", label: "권한", editable: true, type: "select" },
    { key: "userJoinDate", label: "가입일", editable: false, type: "text" },
    { key: "userPoint", label: "적립금", editable: true, type: "number" },
  ];

  const options = [
    { value: "ADMIN", label: "관리자" },
    { value: "USER", label: "사용자" },
  ];

  return (
    <div className="bg-starbucksBeige min-h-screen overflow-y-auto">
      <h1 className="text-2xl m-5">회원 정보 수정</h1>
      <EditForm
        data={data}
        onSave={handleSave}
        labels={labels}
        options={options}
      />
    </div>
  );
};

export default AdminUserEdit;
