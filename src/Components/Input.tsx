import { ChangeEvent, FC, InputHTMLAttributes } from "react";

type input = {
    type: string,
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<input> = ({...rest}) => {
    return <input {...rest} />
}

export default Input;