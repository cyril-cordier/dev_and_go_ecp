<?php

namespace App\Http\Controllers;
use App\Contents;
use Illuminate\Http\Request;
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
            'function' => 'required',
            'image' => 'required', 
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Contents::create($input);
        
        return response()->json(['success'=>'content successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, $id){
        $content = Contents::find($id);

        $content->title = $request->input('title');
        $content->content = $request->input('content');
        $content->name = $request->input('name');
        $content->function = $request->input('function');
        $content->image = $request->input('image');
        
       
        $content->save();
        
        

        return response()->json([
            'id' => $content->id,
            'title' => $content->title,
            'content' => $content->content,
            'name' => $content->name,
            'function' => $content->function,
            'image' => $content->image,
            'success' => 'content updated with success !'
        
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
            'function' => $content->function,
            'image' => $content->image,
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
