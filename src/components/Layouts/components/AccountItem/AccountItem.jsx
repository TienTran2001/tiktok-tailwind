import React from 'react';
import Image from '~/components/Image/Image';
import { HiCheckCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const AccountItem = ({ data }) => {
  const { avatar, nickname, full_name, tick } = data;
  return (
    <Link
      to={`/@${nickname}`}
      className="cursor-pointer flex items-center gap-x-[10px] py-[9px] px-[16px] hover:bg-[#16182308] "
    >
      <div>
        <Image
          className="w-[40px] h-[40px] rounded-full  "
          src={avatar}
          alt="avatar"
        />
      </div>
      <div>
        <h3 className="text-16 font-semibold flex items-center gap-x-[5px] ">
          <span>{nickname}</span>
          <span className="text-[#20d5ec] text-[20px]">
            {tick && <HiCheckCircle />}
          </span>
        </h3>
        <div className="text-14 text-gray font-normal ">{full_name}</div>
      </div>
    </Link>
  );
};

export default AccountItem;
