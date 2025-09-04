
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types'
import { Form, Head, Link } from '@inertiajs/react'
import { ArrowLeft, ArrowLeftRight, LoaderCircle } from 'lucide-react'
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
import CustomSelectInput from '@/components/CustomSelectInput'
import { SelectItem } from '@/components/ui/select'

const Edit = ({ product }: any) => {

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Products',
            href: '/products',
        }
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Product" />
            <div className="p-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className='flex items-center '>
                            <Link prefetch href={route('products.index')}><ArrowLeft /></Link>
                            Edit Product </CardTitle>
                    </CardHeader>
                    <CardContent>

                        <Form method="post" action={route('products.update', product.id)} resetOnSuccess >
                            {({ processing, errors, reset }) => (
                                <div className='space-y-4 '>
                                    <CustomInput errors={errors} label={'Product'} name={'name'} placeholder={'Enter product'} defaultValue={product.name} />
                                    <CustomInput errors={errors} label={'Cost price'} name={'cost_price'} placeholder={'Cost Price'} defaultValue={product.cost_price} />
                                    <CustomInput errors={errors} label={'Selling price'} name={'selling_price'} placeholder={'Selling Price'} defaultValue={product.selling_price} />
                                    <CustomTextArea label={'Description'} name={'description'} errors={errors} placeholder='Enter product description' defaultValue={product.description} />
                                    <CustomSelectInput label={'Status'} name={'status'} errors={errors} placeholder='Select status' defaultValue={product.status} >
                                        <SelectItem value="active" >Active</SelectItem>
                                        <SelectItem value="inactive">In Active</SelectItem>
                                    </CustomSelectInput>
                                    <CustomInput type='file' errors={errors} label={'Product Image'} name={'feature_image'} required={false} />
                                    <div className="flex items-center space-x-2 justify-end">
                                        <CustomSubmitButton processing={processing}  >Update Product</CustomSubmitButton>
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

export default Edit
