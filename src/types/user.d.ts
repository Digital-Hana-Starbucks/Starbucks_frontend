export type LoginType = {
  userId: string;
  userPw: string;
};

export type SignupType = {
  userId: string;
  userPw: string;
  userNickname: string;
};
export type UserType = {
  userIdx: number;
  userId: string;
  userPw: string;
  userNickname: string;
  userRole: string;
  userPoint: number;
  userJoinDate: string;
};
