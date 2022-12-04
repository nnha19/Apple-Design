const DivWithBgImg = ({
  url,
  children,
  className,
  height = 60,
  width = 60,
  style,
}: {
  url: string;
  children?: React.ReactNode;
  className?: string;
  height?: number;
  width?: number;
  style?: { [index: string]: string };
}) => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPositionX: "center",
      height,
      width,
      ...(style || {}),
    }}
    className={`${className}`}
  >
    {children}
  </div>
);

export default DivWithBgImg;
