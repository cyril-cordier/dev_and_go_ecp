<?php

namespace App\Http\Controllers;
use App\Challenge;
use Illuminate\Http\Request;
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
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Challenge::create($input);
        
        return response()->json(['success'=>'challenge result successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, $id){
        $challengeresult = Challenge::find($id);

        $challengeresult->winner = $request->input('winner');
        $challengeresult->looser = $request->input('looser');
        $challengeresult->S1W = $request->input('S1W');
        $challengeresult->S1L = $request->input('S1L');
        $challengeresult->S2W = $request->input('S2W');
        $challengeresult->S2L = $request->input('S2L');
        $challengeresult->S3W = $request->input('S3W');
        $challengeresult->points = $request->input('points');
        $challengeresult->details = $request->input('details');
       
        $challengeresult->save();
        
        

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
            'points' => $challengeresult->points,
            'details' => $challengeresult->details,
            'success' => 'challenge result updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $challengeuser = ChallengeUsers::findOrFail($id);

        return response()->json([
            'id' => $challengeresult->id,
            'username' => $challengeresult->username,
            'ranking' => $challengeresult->ranking,
            'contact' => $challengeresult->contact,
            'points' => $challengeresult->points,
            'nbmatchs' => $challengeresult->nbmatchs,
            'matchaverage' => $challengeresult->matchaverage,
            'setaverage' => $challengeresult->setaverage,
            'gameaverage' => $challengeresult->gameaverage,
        ]);
    }

    public function destroy($id){
        $challengeresult = ChallengeUsers::find($id);
        $challengeresult->delete();

        return response()->json([
            'success' => 'challenge result successfully deleted'
        
        ], $this-> successStatus); 

    }
}
