import React from 'react'
import InputError from './input-error'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import CustomRequired from './CustomRequired';

interface CustomInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?:string
    errors: { [key: string]: string };
}

const CustomInput = ({
    label,
    name,
    type = "text",
    placeholder,
    required = true,
    errors,
    defaultValue

}: CustomInputProps) => {
    return (
        <div>
            <Label htmlFor={name}>
                <div className="flex space-x-1  items-center">
                    <div>{label}</div>
                    {required &&
                        <CustomRequired />
                    }
                </div>
            </Label>
            <Input
            className='my-2'
                id={name}
                type={type}
                required={required}
                autoComplete={name}
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
            <InputError message={errors[name]} />
        </div>
    )
}

export default CustomInput
