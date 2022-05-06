import { CustomButton } from "./style"

const Button = ({white, children, ...rest}) =>{
    return (
        <>
        <CustomButton white={white} {...rest}>
            {children}
        </CustomButton>
        </>
    )
}

export default Button