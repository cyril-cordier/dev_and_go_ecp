<?php

namespace App\Http\Controllers;
use App\Events;
use Illuminate\Http\Request;
use Validator;

class EventController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $events = Events::all();
       
       return $events;

    }

    public function show(events $event){
        return $event;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'title' => 'required',
            'detail' => 'required', 
            'place' => 'required', 
            'price' => 'required',
            'image' => 'required', 
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Events::create($input);
        
        return response()->json(['success'=>'event successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, $id){
        $event = Events::find($id);

        $event->title = $request->input('title');
        $event->detail = $request->input('detail');
        $event->place = $request->input('place');
        $event->price = $request->input('price');
        $event->image = $request->input('image');
        
       
        $event->save();
        
        

        return response()->json([
            'id' => $event->id,
            'title' => $event->title,
            'detail' => $event->detail,
            'place' => $event->place,
            'price' => $event->price,
            'image' => $event->image,
            'success' => 'event updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $event = Events::findOrFail($id);

        return response()->json([
            'id' => $event->id,
            'title' => $event->title,
            'detail' => $event->detail,
            'place' => $event->place,
            'price' => $event->price,
            'image' => $event->image,
        ]);
    }

    public function destroy($id){
        $event = Events::find($id);
        $event->delete();

        return response()->json([
            'success' => 'event successfully deleted'
        
        ], $this-> successStatus); 

    }
}
