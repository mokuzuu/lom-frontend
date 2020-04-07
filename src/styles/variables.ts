const $spaceUnit = 0.8; // rem
export default {
  color: {
    primary: "#3F51B5",
  },
  app: {
    height: "calc(100vh - 0px)",
    marginTop: "0px",
  },
  header: {
    width: "100%",
    height: "52px",
    color: "black",
    bgColor: "white",
  },
  footer: {
    height: "50px",
  },
  zIndex: {
    dialog: 9999,
    sideBar: 2,
    header: 1,
    main: 1,
    footer: 1,
  },
  fontSize: {
    default: "1.6rem",
  },
  space: {
    "2": `${$spaceUnit * 0.25}rem`, //   2px
    "4": `${$spaceUnit * 0.5}rem`, //    4px
    "8": `${$spaceUnit}rem`, //          8px
    "12": `${$spaceUnit * 1.5}rem`, //  12px
    "16": `${$spaceUnit * 2}rem`, //    16px
    "20": `${$spaceUnit * 2.5}rem`, //  20px
    "24": `${$spaceUnit * 3}rem`, //    24px
    "32": `${$spaceUnit * 4}rem`, //    32px
    "40": `${$spaceUnit * 5}rem`, //    40px
    "48": `${$spaceUnit * 6}rem`, //    48px
    "52": `${$spaceUnit * 6.5}rem`, //  52px
    "84": `${$spaceUnit * 10.5}rem`, // 84px
  },
  fontWeight: {
    light: "200",
    regular: "400",
    bold: "600",
  },
};
