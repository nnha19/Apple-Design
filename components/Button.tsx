const Button = ({
  children,
  className,
  ...others
}: {
  children: React.ReactNode;
  className?: string;
  [index: string]: any;
}) => {
  return (
    <button
      className={`bg-[#ffff] min-w-[157px] font-medium text-[#1d1d1f] rounded-full h-[56px] w-max px-[22px] hover:bg-[#ffffffd1] ${className}`}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;

// rgba(29,29,31,0.72)
