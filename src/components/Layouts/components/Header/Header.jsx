import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import { HiCheckCircle, HiOutlineDotsVertical } from 'react-icons/hi';
import { RiAddLine, RiKeyboardBoxLine, RiSettings2Line } from 'react-icons/ri';

import { CgLogOut } from 'react-icons/cg';
import { ImCoinDollar } from 'react-icons/im';
import { BiUser } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';
import { MdHelpOutline } from 'react-icons/md';

import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { Messages } from '~/components/Icons/Icons';
import { Inbox } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';

function Header({ className }) {
  const [currentUser, setCurrentUser] = useState(true);

  //handle
  const handleMenuChange = (item) => {
    switch (item.type) {
      case 'language':
        //handle
        break;
      case 'logout':
        setCurrentUser(false);
        break;
      default:
    }
  };
  const MENU_ITEMS = [
    {
      icon: <GrLanguage className="text-[18px] w-[22px]" />,
      title: 'English',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'en',
            title: 'English',
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tiếng Việt',
          },
        ],
      },
    },
    {
      icon: <MdHelpOutline className="text-[22px] w-[22px]" />,
      title: 'Feedback and help',
      to: 'feedback',
    },
    {
      icon: <RiKeyboardBoxLine className="text-[22px] w-[22px]" />,
      title: 'Keyboard shortcuts',
    },
  ];

  const userMenu = [
    {
      icon: <BiUser className="text-[22px] w-[22px]" />,
      title: 'View profile',
      to: 'profile',
    },
    {
      icon: <ImCoinDollar className="text-[22px] w-[22px]" />,
      title: 'Get coins',
      to: 'coins',
    },
    {
      icon: <RiSettings2Line className="text-[22px] w-[22px]" />,
      title: 'Settings',
      to: 'settings',
    },
    ...MENU_ITEMS,
    {
      icon: <CgLogOut className="text-[22px] w-[22px] rotate-[1/2]" />,
      title: 'Log out',
      separate: true,
      type: 'logout',
    },
  ];

  return (
    <header className="shadow-header w-full flex justify-center">
      <div
        className={`${className} px-[20px] h-[60px] flex items-center justify-between `}
      >
        {/* logo */}
        <div>
          <img src={images.logo} alt="" />
        </div>
        {/* end logo */}
        {/* header-search */}
        <Search />
        {/* end search */}
        {/* action */}
        <div className="flex gap-x-[20px] ">
          {currentUser ? (
            <>
              <Button
                outline
                to="upload"
                leftIcon={<RiAddLine className="text-[22px]" />}
              >
                Upload
              </Button>
              <Tippy delay={[0, 250]} content="Messages" placement="bottom">
                <div className="flex items-center">
                  <Messages className="w-[26px] h-[26px] " />
                </div>
              </Tippy>
              <Tippy delay={[0, 250]} content="Inbox" placement="bottom">
                <div className="relative flex items-center">
                  <Inbox />
                  <span className="absolute h-[20px] px-[2px] top-[-5px] right-[-4px] text-white text-14 rounded-[10px] bg-primary font-semibold ">
                    26
                  </span>
                </div>
              </Tippy>
            </>
          ) : (
            <>
              <Button
                outline
                to="upload"
                leftIcon={<RiAddLine className="text-[22px]" />}
              >
                Upload
              </Button>
              <Button primary to="logi n">
                Log in
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <div className="flex items-center">
                <Image
                  className="w-[32px] h-[32px] rounded-full cursor-pointer object-cover "
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/21b0f8dcde7c0a2c3e612f7d9278d1b8~c5_720x720.jpeg?x-expires=1662346800&x-signature=ed3nPr2IaWNteQmWQTRipYlDpsg%3D"
                  alt="Hàn Lão Ma"
                />
              </div>
            ) : (
              <div className="flex items-center">
                <HiOutlineDotsVertical className="text-[22px] cursor-pointer" />
              </div>
            )}
          </Menu>
        </div>

        {/* end action */}
      </div>
    </header>
  );
}

export default Header;
