import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout'
import { BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect } from 'react';
import { toast } from 'react-toastify';
interface ProductProps {
    id: number,
    name: string,
    cost_price: number,
    selling_price: number,
    created_at: string,
    description: string,
    status:string
}
const Index = ({ products }: any) => {
const{delete:destroy, processing}= useForm()
    const { flash } = usePage<{ flash: { message?: string } }>().props;
    useEffect(() => {
        toast.success(flash.message);
    }, [flash.message]);
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Products',
            href: route('products.create'),
        }
    ];
    const handleDelete = (product: ProductProps) => {
        if (confirm(`Are you sure you want to delete ${product.name}`)) {
            // alert(`Deleted ${product.id}`)
    destroy(route('products.destroy',product.id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto ">
                <Link href={route('products.create')} prefetch className='flex justify-end'>
                    <Button >Add Product</Button>
                </Link>
                <Table>
                    <TableCaption>A list of your recent products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead >id</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Cost price</TableHead>
                            <TableHead>Selling price</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Created Date</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.data.map((product: ProductProps, index: number) =>
                            <TableRow key={index}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.cost_price}</TableCell>
                                <TableCell>{product.selling_price}</TableCell>
                                <TableCell>{'-----'}</TableCell>
                                <TableCell>{product.status}</TableCell>
                                <TableCell>{product.description}</TableCell>
                                <TableCell>{product.created_at}</TableCell>
                                <TableCell>
                                    <Button >
                                    <Link prefetch href={route('products.edit', product.id)}> Edit </Link>
                                    </Button>


                                    <Button disabled={processing}  variant={'destructive'} className='mx-1' onClick={() => handleDelete(product)}>Delete</Button>
                                </TableCell>

                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </AppLayout >
    )
}

export default Index
