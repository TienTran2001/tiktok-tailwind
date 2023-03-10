import { useEffect, useState, useRef } from 'react';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { BiLoaderAlt } from 'react-icons/bi';
import { CloseIcon, SearchIcon } from '~/components/Icons/Icons';
import AccountItem from '../AccountItem/AccountItem';
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  useEffect(() => {
    if (!searchValue.trim()) return;
    setLoading(true);
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        searchValue
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [searchValue]);

  const handleClearInput = () => {
    setSearchValue('');
    setSearchResult(() => []);
    inputRef.current.focus();
  };

  const handleSearchValue = (e) => {
    const value = e.target.value;
    value == false ? setSearchValue(value.trim()) : setSearchValue(value);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0 && searchValue.length > 0}
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className=" w-headerSearch" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className="pt-[8px]">
              <div className="py-[5px] px-[12px] text-14 text-gray  font-semibold ">
                Accounts
              </div>
              <div>
                {searchResult.map((item) => (
                  <AccountItem key={item.id} data={item} />
                ))}
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
          onChange={(e) => handleSearchValue(e)}
          onFocus={() => setShowResult(true)}
        />
        <div
          className="absolute right-[60px] cursor-pointer  "
          onClick={() => handleClearInput()}
        >
          {!loading && searchValue && <CloseIcon />}
          {loading && <BiLoaderAlt className="loading" />}
        </div>

        <div className=" cursor-pointer py-[11px] pl-[12px] pr-[16px] hover:bg-[#16182308] active:bg-[#1618230f] ">
          <SearchIcon className="search-icon-header" />
        </div>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
