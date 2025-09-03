import { LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button';
const CustomSubmitButton = ({ processing, children }: any) => {
    return (
        <div>
            <Button type="submit"  className=" flex justify-start" tabIndex={5} disabled={processing}>
                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                {children}
            </Button>
        </div>
    )
}

export default CustomSubmitButton
