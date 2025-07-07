function InputField({id,type,placeholder,label,required,style}) {
    return (
        <>
            <label htmlFor={id} className={`label ${id}`} style={style}>{label}{required && <sup className="red">*</sup>}</label>
            <input type={type} placeholder={placeholder} id={id} className="input"/>
        </>
    );
} 
export default InputField;