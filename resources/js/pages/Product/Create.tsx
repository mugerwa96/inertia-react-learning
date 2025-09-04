
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Form, Head, usePage } from '@inertiajs/react'
import { LoaderCircle } from 'lucide-react'
import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import CustomInput from '@/components/CustomInput'

import CustomTextArea from '@/components/CustomTextArea'
import CustomSubmitButton from '@/components/CustomSubmitButton'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import CustomSelectInput from '@/components/CustomSelectInput'
import { SelectItem } from '@/components/ui/select'


const Create = () => {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Products',
            href: '/products',
        }
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Managment" />
            <div className="p-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Create Product </CardTitle>
                    </CardHeader>
                    <CardContent>

                        <Form
                            method="post" action={route('products.store')} resetOnSuccess >
                            {({ processing, errors, reset }) => (
                                <div className='space-y-4 '>
                                    <CustomInput errors={errors} label={'Product'} name={'name'} placeholder={'Enter product'} />
                                    <CustomInput errors={errors} label={'Cost price'} name={'cost_price'} placeholder={'Cost Price'} />
                                    <CustomInput errors={errors} label={'Selling price'} name={'selling_price'} placeholder={'Selling Price'} />
                                    <CustomTextArea label={'Description'} name={'description'} errors={errors} placeholder='Enter product description' />
                                    <div className="md:grid grid-cols-2 space-y-2 md:space-y-0 space-x-2">
                                        <CustomSelectInput label={'Status'} name={'status'} errors={errors} placeholder='Select status'>
                                            <SelectItem value="active">Active</SelectItem>
                                            <SelectItem value="inactive">In Active</SelectItem>
                                        </CustomSelectInput>
                                        <CustomInput type='file' errors={errors} label={'Product Image'} name={'feature_image'} required={false} />
                                    </div>

                                    <div className="flex items-center space-x-2 justify-end">
                                        <CustomSubmitButton processing={processing}  >Add Product</CustomSubmitButton>
                                        <Button type='button' variant={'destructive'} onClick={() => reset()}>Cancel</Button>
                                    </div>
                                </div>
                            )}
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout >
    )
}

export default Create
