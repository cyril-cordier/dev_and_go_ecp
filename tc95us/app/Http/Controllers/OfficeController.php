<?php

namespace App\Http\Controllers;
use App\Office;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class OfficeController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $office = Office::all();
       
       return $office;

    }

    public function show(Office $office){
        return $office;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'name' => 'required',
            'fonction' => 'required',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Office::create($input);
        
        return response()->json(['success'=>'Office user successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, Office $office){
        
        $office->update($request->all());
        
        

        return response()->json([
            'id' => $office->id,
            'name' => $office->name,
            'fonction' => $office->fonction,
            'image' => $office->image,
            'success' => 'Office user updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $office = Office::findOrFail($id);

        return response()->json([
            'id' => $office->id,
            'name' => $office->name,
            'fonction' => $office->fonction,
            'image' => $office->image
        ]);
    }

    public function destroy($id){
        $office = Office::find($id);
        $office->delete();

        return response()->json([
            'success' => 'challenge user successfully deleted'
        
        ], $this-> successStatus); 

    }
}
