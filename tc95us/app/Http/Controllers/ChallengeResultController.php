<?php

namespace App\Http\Controllers;
use App\Challenge;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use Validator;

class ChallengeResultController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $challengeresults = Challenge::all();
       
       return $challengeresults;

    }

    public function show(Challenge $challengeresult){
        return $challengeresult;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'winner' => 'required',
            'looser' => 'required',
            'pointsW' => 'required',
            'pointsL' => 'required',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Challenge::create($input);
        
        return response()->json(['success'=>'challenge result successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, Challenge $challengeresult){

        $challengeresult->update($request->all());
        
        

        return response()->json([
            'id' => $challengeresult->id,
            'winner' => $challengeresult->winner,
            'looser' => $challengeresult->looser,
            'S1W' => $challengeresult->S1W,
            'S1L' => $challengeresult->S1L,
            'S2W' => $challengeresult->S2W,
            'S2L' => $challengeresult->S2L,
            'S3W' => $challengeresult->S3W,
            'S3L' => $challengeresult->S3L,
            'pointsW' => $challengeresult->pointsW,
            'pointsL' => $challengeresult->pointsL,
            'details' => $challengeresult->details,
            'success' => 'challenge result updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $challengeuser = Challenge::findOrFail($id);

        return response()->json([
            'id' => $challengeresult->id,
            'winner' => $challengeresult->winner,
            'looser' => $challengeresult->looser,
            'S1W' => $challengeresult->S1W,
            'S1L' => $challengeresult->S1L,
            'S2W' => $challengeresult->S2W,
            'S2L' => $challengeresult->S2L,
            'S3W' => $challengeresult->S3W,
            'S3L' => $challengeresult->S3L,
            'pointsW' => $challengeresult->pointsW,
            'pointsL' => $challengeresult->pointsL,
            'details' => $challengeresult->details,
        ]);
    }

    public function destroy($id){
        $challengeresult = Challenge::find($id);
        $challengeresult->delete();

        return response()->json([
            'success' => 'challenge result successfully deleted'
        
        ], $this-> successStatus); 

    }
}
