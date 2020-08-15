<?php

Namespace App\Http\Controllers;
use App\Championnats;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use Validator;

class ChampionnatController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $matchs = Championnats::all();
       
       return $matchs;

    }

    public function show(Matchs $match){
        return $match;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'date' => 'required',
            'competition' => 'required',
            'match' => 'required',  
            'score' => 'required',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Championnats::create($input);
        
        return response()->json(['success'=>'match successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, Championnats $championnat){

        $championnat->update($request->all());
        
        

        return response()->json([
            'id' => $championnat->id,
            'date' => $championnat->date,
            'competition' => $championnat->competition,
            'match' => $championnat->match,
            'score' => $championnat->score,
            'success' => 'match updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $match = Championnats::findOrFail($id);

        return response()->json([
            'id' => $match->id,
            'date' => $match->date,
            'competition' => $match->competition,
            'match' => $match->match,
            'score' => $match->score,
        ]);
    }

    public function destroy($id){
        $match = Championnats::find($id);
        $match->delete();

        return response()->json([
            'success' => 'match successfully deleted'
        
        ], $this-> successStatus); 

    }
}
