import React, { ReactNode } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from './ui/label'
import CustomRequired from './CustomRequired';
import InputError from './input-error';
interface CustomSelectInput {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    errors: { [key: string]: string };
    defaultValue?: string
    children:ReactNode
}
const CustomSelectInput = ({
    label,
    name,
    placeholder,
    required = true,
    errors,
    defaultValue,
    children

}: CustomSelectInput) => {

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
            <div className="my-2"></div>
            <Select name={name} defaultValue={defaultValue}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {children}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <InputError message={errors[name]} />
        </div >
    )
}

export default CustomSelectInput
