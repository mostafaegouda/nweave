type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ActionButton = (props: Props) => {
  return (
    <button
      className={classNames(
        "flex items-center justify-center rounded-full border-2 border-zinc-400 bg-zinc-800 aspect-square text-white p-2 transition",
        "hover:bg-white hover:border-white hover:text-black",
        props.className ?? ""
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default ActionButton;
