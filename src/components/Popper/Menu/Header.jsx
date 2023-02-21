import { MdArrowBackIos } from "react-icons/md";
function Header({ title, onBack }) {
  return (
    <header className="flex h-[50px] items-center relative  ">
      <button
        className="cursor-pointer ml-[28px] w-[20px] text-[18px]"
        onClick={onBack}
      >
        <MdArrowBackIos />
      </button>
      <p className="text-16 font-semibold absolute right-1/2 translate-x-1/2">
        {title}
      </p>
    </header>
  );
}

export default Header;
