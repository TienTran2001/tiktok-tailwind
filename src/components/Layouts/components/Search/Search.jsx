import { useEffect, useState, useRef } from "react";

import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { SearchIcon } from "~/components/Icons/Icons";
import Image from "~/components/Image/Image";
import { HiCheckCircle } from "react-icons/hi";
import { CloseIcon } from "~/components/Icons/Icons";
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      setSearchResult(() => [1, 2, 3]);
    }, 0);
  }, []);

  const handleClearInput = () => {
    setSearchValue("");
    setSearchResult(() => []);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className=" w-headerSearch" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className="pt-[8px]">
              <div className="py-[5px] px-[12px] text-14 text-gray  font-semibold ">
                Accounts
              </div>
              <div>
                {/* item */}
                <div className="cursor-pointer flex items-center gap-x-[10px] py-[9px] px-[16px] hover:bg-[#16182308] ">
                  <div>
                    <Image
                      className="w-[40px] h-[40px] rounded-full  "
                      src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/21b0f8dcde7c0a2c3e612f7d9278d1b8~c5_720x720.jpeg?x-expires=1662454800&x-signature=WifGW6BVsZenM5MFQu3eRgT6ljI%3D"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-16 font-semibold flex items-center gap-x-[5px] ">
                      <span>roses_are_rosie</span>
                      <span className="text-[#20d5ec] text-[20px]">
                        <HiCheckCircle />
                      </span>
                    </h3>
                    <div className="text-14 text-gray font-normal ">ROSÉ</div>
                  </div>
                </div>
              </div>
            </div>
          </PopperWrapper>
        </div>
      )}
    >
      <div className="header__search  w-headerSearch h-[46px] text-16 text-[#161823] rounded-full bg-[#1618230f] overflow-hidden flex items-center justify-between py-[12px] pl-[16px] border-[1.5px] border-solid border-transparent  focus-within:border-[1.5px] focus-within:border-solid focus-within:border-[#16182333] ">
        <input
          ref={inputRef}
          className="flex-1 bg-transparent "
          value={searchValue}
          type="text"
          placeholder="Search accounts and videos"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        <div
          className="absolute right-[60px] cursor-pointer  "
          onClick={() => handleClearInput()}
        >
          {searchValue && <CloseIcon />}
        </div>

        <div className=" cursor-pointer py-[11px] pl-[12px] pr-[16px] hover:bg-[#16182308] active:bg-[#1618230f] ">
          <SearchIcon className="search-icon-header" />
        </div>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
