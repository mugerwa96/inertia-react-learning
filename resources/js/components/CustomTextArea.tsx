import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import CustomRequired from "./CustomRequired";
import InputError from "./input-error";
interface CustomTextAreaProps {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    errors: { [key: string]: string };
defaultValue?:string
}

const CustomTextArea = ({
    label,
    name,
    placeholder,
    required = true,
    errors,
    defaultValue

}: CustomTextAreaProps) => {
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
            <Textarea
            className='my-2'
                id={name}
                required={required}
                autoComplete={name}
                name={name}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
            <InputError message={errors[name]} />
        </div>
    )
}

export default CustomTextArea
