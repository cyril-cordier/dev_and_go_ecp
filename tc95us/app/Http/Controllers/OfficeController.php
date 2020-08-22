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
            'function' => 'required',
            
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        /* import image */

        if ($request->hasFile('image')){
            $imagename=$request->image_name;
            $path = $request->file('image')->storeAs('public/images/office', $imagename);
            }

        $input = $request->all(); 
       
        Office::create($input);
        
        return response()->json(['success'=>'Membre du bureau créé avec succès'], $this-> successStatus); 
    }

    public function update(Request $request, Office $office){
        
        if ($request->hasFile('image')){
            $imagename=$request->image_name;
            $path = $request->file('image')->storeAs('public/images/office', $imagename);
            }

        $office->update($request->all());
        
        

        return response()->json([
            'id' => $office->id,
            'name' => $office->name,
            'function' => $office->function,
            'image' => $office->image,
            'image_name' => $office->image_name,
            'success' => 'Membre du bureau modifié avec succès !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $office = Office::findOrFail($id);

        return response()->json([
            'id' => $office->id,
            'name' => $office->name,
            'function' => $office->function,
            'image' => $office->image,
            'image_name' => $office->image_name,
        ]);
    }

    public function destroy($id){
        $office = Office::find($id);
        $office->delete();

        return response()->json([
            'success' => 'Membre du bureau supprimé'
        
        ], $this-> successStatus); 

    }
}
