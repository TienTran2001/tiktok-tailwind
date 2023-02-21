function Wrapper({ children }) {
  return (
    <div className="w-full  bg-white shadow-popper rounded-[8px] min-h-[100px]">
      {children}
    </div>
  );
}

export default Wrapper;
