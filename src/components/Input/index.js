import { CustomInput, CustomLabel } from "./style"


const Input = ({children,errors, register, name, label, ...rest}) =>{
    return(
        <>
        <CustomLabel >
            <p>{label}</p>
            {children}
            <CustomInput errors={!!errors} {...register(name)} {...rest}/>
            {!!errors&& <span>{errors}</span>}
        </CustomLabel>
        </>
    )
}

export default Input