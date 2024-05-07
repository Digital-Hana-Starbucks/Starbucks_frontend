import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListTable from "../components/organisms/ListTable";
import { useMutation, useQuery } from "react-query";
import UserType from "../types/user";
import { ApiClient } from "../apis/apiClient";

const columnsForUser = ["번호", "아이디", "암호", "이름", "권한", "가입일"];

const AdminUserList: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, data, error, refetch } = useQuery<UserType[]>({
    queryKey: ["users"],
    queryFn: () => ApiClient.getInstance().getUserList(),
  });

  const deleteUserMutation = useMutation((index: number) =>
    ApiClient.getInstance().deleteUser(index),
  );

  useEffect(() => {
    if (deleteUserMutation.isSuccess) {
      alert("삭제 완료");
      refetch();
    }
  }, [deleteUserMutation.isSuccess, refetch]);

  const handleDelete = (index: number) => {
    const userIndex = data?.[index]?.userIdx;
    if (userIndex !== undefined) {
      deleteUserMutation.mutate(userIndex);
    } else {
      console.error(`User index not found for index ${index}`);
    }
  };

  const handleEdit = (index: number) => {
    const userIndex = data?.[index]?.userIdx;
    if (userIndex !== undefined) {
      navigate(`/adminUserEdit/${userIndex}`);
      console.log(`Edit item at index ${userIndex}`);
    } else {
      console.error(`User index not found for index ${index}`);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {data && data.length === 0 && <p>회원목록이 없습니다</p>}
      {data && data.length > 0 && (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2 text-sm">
            총 <span className="text-red-500 inline-block">{data.length}</span>
            명의 회원이 있습니다.
          </h2>
          <ListTable
            tableData={data.map((user, index) => [
              index + 1,
              user.userId,
              user.userPw.replace(/./g, "*").slice(0, 10),
              user.userNickname,
              user.userRole,
              user.userJoinDate,
            ])}
            columns={columnsForUser}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      )}
    </div>
  );
};

export default AdminUserList;
