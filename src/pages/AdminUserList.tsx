import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListTable from "../components/organisms/ListTable";

const columnsForUser = ["번호", "아이디", "암호", "이름", "권한", "가입일"];

const AdminUserList: React.FC = () => {
  const navigate = useNavigate();

  const users = [
    {
      user_idx: 1,
      user_id: "hong1",
      user_pw: "dfkajd216dfafa3faef",
      user_nickname: "닉네임",
      user_role: "USER",
      user_point: 0,
      user_join_date: "2023-08-30",
    },
    {
      user_idx: 2,
      user_id: "hong2",
      user_pw: "dfkajd216dfafa3faef",
      user_nickname: "닉네임",
      user_role: "USER",
      user_point: 0,
      user_join_date: "2023-08-30",
    },
    {
      user_idx: 3,
      user_id: "hong3",
      user_pw: "dfkajd216dfafa3faef",
      user_nickname: "닉네임",
      user_role: "USER",
      user_point: 0,
      user_join_date: "2023-08-30",
    },
  ];
  const handleDelete = (index: number) => {
    console.log(`Delete item at index ${index}`);
  };

  const handleEdit = (index: number) => {
    const userIndex = users[index]?.user_idx;
    if (userIndex !== undefined) {
      navigate(`/adminUserEdit/${userIndex}`);
      console.log(`Edit item at index ${userIndex}`);
    } else {
      console.error(`User index not found for index ${index}`);
    }
  };

  return (
    <div>
      <h1 className="text-2xl m-2">상품 목록</h1>
      {users.length === 0 || users == null ? (
        <p>회원목록이 없습니다</p>
      ) : (
        <div className="mx-auto p-4 max-w-screen-lg flex flex-col items-start">
          <h2 className="m-2 text-sm">
            총 <p className="text-red-500 inline-block">{users.length}</p>명의
            회원이 있습니다.
          </h2>
          <ListTable
            tableData={users.map((users, index) => [
              index + 1,
              users.user_id,
              users.user_pw.replace(/./g, "*"), // 비밀번호를 길이만큼 *로 대체합니다.
              users.user_nickname,
              users.user_role,
              users.user_join_date,
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
