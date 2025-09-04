<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return[
            'name' => 'required|unique:products,name',
            'selling_price' => 'required|numeric',
            'cost_price' => 'required|numeric',
            'description' => 'required|string',
            'status' =>'required',
            'featured_image' =>'nullable|image|mimes:jpeg,png|max:2048'
        ];
    }
    /**
     * Messages
     */
    public function messages():array
    {
        return [
            'featured_image.max' =>'Featured image can not be greater than 2mbz'
        ];
    }
}
