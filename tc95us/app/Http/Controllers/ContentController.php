<?php

namespace App\Http\Controllers;
use App\Contents;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class ContentController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $contents = Contents::all();
       
       return $contents;

    }

    public function show(Contents $content){
        return $content;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'title' => 'required',
            'content' => 'required', 
            'name' => 'required', 
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        /* import image */

        if ($request->hasFile('image')){
            $imagename=$request->image_name;
            $path = $request->file('image')->storeAs('public/images/content', $imagename);
            }
        $input = $request->all(); 
       
        Contents::create($input);
        
        return response()->json(['success'=>'content successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, Contents $content){

        if ($request->hasFile('image')){
            $imagename=$request->image_name;
            $path = $request->file('image')->storeAs('public/images/content', $imagename);
            }
        $content->update($request->all());
        
        

        return response()->json([
            'id' => $content->id,
            'title' => $content->title,
            'content' => $content->content,
            'name' => $content->name,
            'fonction' => $content->fonction,
            'image' => $content->image,
            'image_name' => $office->image_name,
            'success' => 'Content updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $content = Contents::findOrFail($id);

        return response()->json([
            'id' => $content->id,
            'title' => $content->title,
            'content' => $content->content,
            'name' => $content->name,
            'fonction' => $content->fonction,
            'image' => $content->image,
            'image_name' => $content->image_name,
        ]);
    }

    public function destroy($id){
        $content = Contents::find($id);
        $content->delete();

        return response()->json([
            'success' => 'content successfully deleted'
        
        ], $this-> successStatus); 

    }
}
