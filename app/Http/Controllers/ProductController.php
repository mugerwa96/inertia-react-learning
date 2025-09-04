<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductFormRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = ProductResource::collection(Product::latest()->simplePaginate(10));
        return Inertia::render('Product/Index', compact('products'));
    }
    public function create()
    {
        return Inertia::render('Product/Create');
    }
    public function store(ProductFormRequest $request)
    {
        try {
            Product::create($request->validated());
            return to_route('products.index')->with('message', 'Product added successfully');
        } catch (\Exception $th) {
            // throw $th;
        }
    }
    public function edit($id)
    {

        try {
            $product = Product::findOrFail($id);

            return Inertia::render('Product/Edit', compact('product'));
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function update(Request $request)
    {
        dd($request->all());
    }
    public function destroy($product)
    {
        try {
            // dd($product);
            Product::destroy($product);
            return to_route('products.index')->with('message', 'Product deleted successfully');
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
