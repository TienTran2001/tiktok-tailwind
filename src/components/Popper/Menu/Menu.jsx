import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Header from "./Header";
import MenuItem from "./MenuItem";

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      //   visible
      delay={[0, 600]}
      placement="bottom-end"
      render={(attrs) => (
        <div
          className="min-w-[223px] translate-y-[-5px] translate-x-[20px] "
          tabIndex="-1"
          {...attrs}
        >
          <PopperWrapper>
            <div className=" pb-[8px]">
              {history.length > 1 && (
                <Header
                  title="Language"
                  onBack={() => {
                    setHistory((prev) => {
                      const newItems = [...prev];
                      newItems.pop();
                      return newItems;
                    });
                  }}
                />
              )}

              {/* item */}
              {renderItem()}
              {/* <Button leftIcon={<GrLanguage />}>English</Button> */}
            </div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => {
          const newItems = [...prev];
          return [newItems.shift()];
        });
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
