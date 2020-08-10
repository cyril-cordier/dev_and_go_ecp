<?php

Namespace App\Http\Controllers;
use App\Championnats;
use Illuminate\Http\Request;
use Validator;

class ChampionnatController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $matchs = Matchs::all();
       
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
       
        Matchs::create($input);
        
        return response()->json(['success'=>'match successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, $id){
        $match = Matchs::find($id);

        $match->date = $request->input('date');
        $match->competition = $request->input('competition');
        $match->match = $request->input('match');
        $match->score = $request->input('score');
        
       
        $match->save();
        
        

        return response()->json([
            'id' => $match->id,
            'date' => $match->date,
            'competition' => $match->competition,
            'match' => $match->match,
            'score' => $match->score,
            'success' => 'match updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $match = Matchs::findOrFail($id);

        return response()->json([
            'id' => $match->id,
            'date' => $match->date,
            'competition' => $match->competition,
            'match' => $match->match,
            'score' => $match->score,
        ]);
    }

    public function destroy($id){
        $match = Matchs::find($id);
        $match->delete();

        return response()->json([
            'success' => 'match successfully deleted'
        
        ], $this-> successStatus); 

    }
}
