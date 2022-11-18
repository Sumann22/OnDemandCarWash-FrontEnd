import React from 'react'
import '../components/styles/FormInput.css';

export default function FormInput({
    error,
    label,
    subLabel,
    placeholder,
    value,
    onChange,
    inputType = 'text' }) {
    function changeHandler(e) {
        if (!e.target.value) {
            onChange('');
            return;
        }
        let value = e.target.value.replace(/\s\s+/g, ' ');
        onChange(value.trimStart());
    }
    return (
        <div className='inputWrapper'>
            <div className='label'>{label}</div>
            {subLabel && <div className='subLabel'>({subLabel})</div>}
            <input
                className={`${error ? 'invalidInput' : ''}`}
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
            />
            {error && (
                <div className='errorWrapper'>
                    {error}
                </div>
            )}
        </div>
    )
}
