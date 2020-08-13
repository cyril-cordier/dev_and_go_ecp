<?php

namespace App\Http\Controllers;
use App\Products;
use Illuminate\Http\Request;
use Validator;

class ProductController extends Controller
{

    public $successStatus = 200;

    public function index(){
        $products = Products::all();
       
       return $products;

    }

    public function show(Products $product){
        return $product;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'details' => 'required', 
            'price' => 'required',
            //'image' => 'required', 
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Products::create($input);
        
        return response()->json(['success'=>'Product successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, $id){
        $product = Products::find($id);

        $product->name = $request->input('name');
        $product->details = $request->input('details');
        $product->price = $request->input('price');
        $product->image = $request->input('image');
        
       
        $product->save();
        
        

        return response()->json([
            'id' => $product->id,
            'name' => $product->name,
            'details' => $product->details,
            'price' => $product->price,
            'image' => $product->image,
            'success' => 'Product updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $product = Products::findOrFail($id);

        return response()->json([
            'id' => $product->id,
            'name' => $product->name,
            'details' => $product->details,
            'price' => $product->price,
            'image' => $product->image
        ]);
    }

    public function destroy($id){
        $product = Products::find($id);
        $product->delete();

        return response()->json([
            'success' => 'Product successfully deleted'
        
        ], $this-> successStatus); 

    }

}
