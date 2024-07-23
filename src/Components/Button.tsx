import { ButtonHTMLAttributes, FC } from "react";

type buttonTheme = {
    theme? : "primary" | "secondary" | "Rounded" | undefined,
} & ButtonHTMLAttributes<HTMLButtonElement> ;

const Button: FC<buttonTheme> = ({theme,className,children,...rest}) => {

    let themeClass = "bg-yellow-500 text-white rounded-md"

    if(theme === "secondary"){
        themeClass = "bg-white text-black border border-slate-300 rounded-md"
    }
    else if(theme === "Rounded"){
        themeClass = "bg-yellow-500 text-white rounded-full"
    }

  return  <button 
            type="button"
            className={"py-2 px-6  font-semibold "+className+ " " + themeClass}
            {...rest}
            >{children}</button>

}

export default Button;