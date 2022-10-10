import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import { useConfigContext } from "context/config.context";

const CompanyLogo = React.forwardRef((props: SvgIconProps, ref: any) => {
  const {
    state: { themeMode },
  } = useConfigContext();
  return (
    <SvgIcon
      ref={ref}
      // sx - use this to add common style to the icon
      viewBox="0 0 50 42"
      color={themeMode === "light" ? "primary" : "secondary"}
      sx={{
        cursor: "pointer",
        width: props.width ? props.width : 50,
        height: props.height ? props.height : 42,
        mr: 2,
        transform: "translateY(-4px)",
      }}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M48.4384 7.53295C48.5876 7.7994 48.7022 8.04187 48.7981 8.28701H48.8061C49.4163 9.85375 49.3763 11.5617 48.6915 13.0991C48.0068 14.6339 46.7624 15.8063 45.1877 16.4005C44.4763 16.6696 43.7382 16.7975 43.0108 16.7975C40.7912 16.7975 38.6463 15.6118 37.5219 13.5894C37.2901 13.1764 37.1062 12.7341 36.9757 12.2758C36.9597 12.2412 36.9437 12.2065 36.9304 12.1665C36.1363 9.90437 36.3735 5.58519 36.9304 2.53165C37.1222 1.46851 37.8416 0.599874 38.8488 0.210854C39.864 -0.18083 40.9858 -0.0209594 41.8517 0.642506C45.7073 3.59213 47.671 6.32859 48.18 7.09863C48.1889 7.1126 48.1983 7.12657 48.2077 7.14067C48.2235 7.16424 48.2396 7.18821 48.2546 7.21321C48.3478 7.35709 48.3931 7.43969 48.3931 7.43969C48.3972 7.44777 48.4012 7.45568 48.4052 7.4635C48.417 7.48664 48.4285 7.50905 48.4384 7.53295ZM21.865 33.2881L12.1236 4.12496C12.1129 4.09565 12.1022 4.06634 12.0889 4.03969C11.175 1.62031 8.83554 0.00028523 6.24563 0.00028523C2.80307 0.00028523 0 2.80336 0 6.24592C0 6.968 0.122568 7.6741 0.365039 8.35089C0.370368 8.3722 0.375697 8.39085 0.383691 8.41217L9.94665 37.0184C10.7247 39.6563 13.184 41.4975 15.9365 41.4975C19.379 41.4975 22.1821 38.6971 22.1821 35.2519C22.1821 34.6017 22.0809 33.9596 21.8837 33.3414C21.8784 33.3228 21.873 33.3041 21.8677 33.2881H21.865ZM39.4856 33.2882L33.6929 15.9182C33.6822 15.8889 33.6716 15.8622 33.6609 15.8356C32.747 13.4162 30.4075 11.7935 27.815 11.7935C24.3724 11.7935 21.5693 14.5966 21.5693 18.0391C21.5693 18.7612 21.6919 19.4673 21.9344 20.1441C21.9397 20.1654 21.945 20.1867 21.953 20.2054L27.5672 37.0212C28.3452 39.659 30.8046 41.5002 33.557 41.5002C37.0022 41.5002 39.8026 38.6971 39.8026 35.2546C39.8026 34.6044 39.7014 33.9623 39.5042 33.3441L39.5042 33.344C39.4989 33.3254 39.4935 33.3068 39.4882 33.2908L39.4856 33.2882Z"
        fill="currentColor"
      ></path>
    </SvgIcon>
  );
});

export default CompanyLogo;

CompanyLogo.displayName = "CompanyLogo";
