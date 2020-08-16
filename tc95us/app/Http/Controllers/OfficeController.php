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
            //'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        /* import image */

        if ($request->hasFile('image')){
            $imagename=$request->image_name;
            $fonction=$request->fonction;
            $filenameWithExt = $request->file('image')->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            $extension = $request->file('image')->getClientOriginalExtension();
            $fileNameToStore = $imagename;
            $path = $request->file('image')->storeAs('public/images', $fileNameToStore);
    
            /* }else{
                $fileNameToStore = 'noimage.png'; */
            }

       /*  $image = time().'.'.$request->image->getClientOriginalExtension();

        $request->image->move(public_path('images'), $image); */
        /* import image */
        $request->image_name = $fileNameToStore;
        

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
