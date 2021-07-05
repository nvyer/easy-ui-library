import { createUseStyles } from "react-jss";
export const useLinkStyles = createUseStyles({
  link: color => ({
    textDecoration: "none",
    width: "fit-content",
    fontSize: "20px",
    padding: "10px",
    color: color === "primary" ? "#1DD4CE" : "#2C3E50",
    "&:link": {
      textDecoration: "none",
      fontSize: "20px"
    },
    "&:visited": {
      color: color === "primary" ? "#1DD4CE" : "#2C3E50"
    },
    "&:hover": {
      textDecoration: "underline",
      paddingBottom: "10px",
      textUnderlineOffset: "2.5px",
      textDecorationThickness: ".125em",
      textDecorationColor: color === "primary" ? "#1DD4CE" : "#2C3E50"
    }
  })
});