import { createUseStyles } from "react-jss";

export const useLoaderStyles = createUseStyles({
    "@keyframes spin": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
    },
    loader: ({ loaderColor, loaderSize }) => ({
        width: `${loaderSize}`,
        height: `${loaderSize}`,
        border: "2px solid",
        borderColor: `${loaderColor} transparent transparent`,
        borderRadius: "500rem",
        animation: `$spin 0.5s linear infinite`
    }),
})
