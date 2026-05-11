interface ICard {
    oClassName?: string;
    children?: any;
}

const Card = ({ oClassName, children}: ICard) => {
  return (
    <div className={`flex flex-col justify-evenly items-center p-3 py-5 border border-theme-gray/40 shadow bg-theme-w-alt dark:bg-theme-black-alt gap-4 ${oClassName ? oClassName : ""}`}>
        {children}
    </div>
  )
}

export default Card