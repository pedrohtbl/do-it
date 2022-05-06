import { CustomInput, CustomLabel } from "./style"


const Input = ({children, label, ...rest}) =>{
    return(
        <>
        <CustomLabel>
            <p>{label}</p>
            {children}
            <CustomInput {...rest}/>
        </CustomLabel>
        </>
    )
}

export default Input