import Button from "~/components/Button/Button";

function MenuItem({ data, onClick }) {
  const styleSeparate = data.separate ? "buttonSeparate" : "";
  const style =
    "justify-start w-full px-[16px] py-[10px] hover:bg-grayLight " +
    styleSeparate;
  return (
    <Button
      className={style}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
