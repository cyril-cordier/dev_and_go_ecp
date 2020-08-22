<?php

namespace App\Http\Controllers;
use App\Events;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
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
            'details' => 'required', 
            'place' => 'required', 
            'date' => 'required', 
            'hour' => 'required', 
            'price' => 'required',
             
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        /* import image */

        if ($request->hasFile('image')){
            $imagename=$request->image_name;
            $path = $request->file('image')->storeAs('public/images/event', $imagename);
            }
        $input = $request->all(); 
       
        Events::create($input);
        
        return response()->json(['success'=>'Evènement/animation créé avec succès'], $this-> successStatus); 
    }

    public function update(Request $request, Events $event){

        if ($request->hasFile('image')){
            $imagename=$request->image_name;
            $path = $request->file('image')->storeAs('public/images/event', $imagename);
            }
        $event->update($request->all());
            

        return response()->json([
            'id' => $event->id,
            'title' => $event->title,
            'details' => $event->details,
            'place' => $event->place,
            'date' => $event->date,
            'hour' => $event->hour,
            'price' => $event->price,
            'image' => $event->image,
            'image_name' => $office->image_name,
            'success' => 'Evènement/animation créé avec succès !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $event = Events::findOrFail($id);

        return response()->json([
            'id' => $event->id,
            'title' => $event->title,
            'details' => $event->details,
            'place' => $event->place,
            'date' => $event->date,
            'hour' => $event->hour,
            'price' => $event->price,
            'image' => $event->image,
            'image_name' => $event->image_name,
        ]);
    }

    public function destroy($id){
        $event = Events::find($id);
        $event->delete();

        return response()->json([
            'success' => 'Evènement/animation supprimé'
        
        ], $this-> successStatus); 

    }
}
