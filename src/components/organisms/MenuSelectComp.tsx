const MenuSelectComp = () => {
  return (
    <div className="flex flex-row grid grid-cols-4 gap-2 bg-starbucksBeige h-[55vh] ">
      {/* 메뉴 버튼 영역 */}
      <div>1공간차지</div>
      {/* 메뉴 선택 영역 */}
      <div className="col-span-3">3공간차지</div>
    </div>
  );
};

export default MenuSelectComp;
