<?php

namespace App\Http\Controllers;
use App\ChallengeUsers;
use Illuminate\Http\Request;
use Validator;

class ChallengeUserController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $challengeusers = ChallengeUsers::all();
       
       return $challengeusers;

    }

    public function show(ChallengeUsers $challengeuser){
        return $challengeuser;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'challengename' => 'required',
            'ranking' => 'required',
            'contact' => 'required',  
            'points' => 'required',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        ChallengeUsers::create($input);
        
        return response()->json(['success'=>'challenge user successfully added'], $this-> successStatus); 
    }

    public function update(Request $request, $id){
        $challengeuser = ChallengeUsers::find($id);

        $challengeuser->challengename = $request->input('challengename');
        $challengeuser->ranking = $request->input('ranking');
        $challengeuser->contact = $request->input('contact');
        $challengeuser->points = $request->input('points');
        $challengeuser->nbmatchs = $request->input('nbmatchs');
        $challengeuser->matchaverage = $request->input('matchaverage');
        $challengeuser->setaverage = $request->input('setaverage');
        $challengeuser->gameaverage = $request->input('gameaverage');
        
       
        $challengeuser->save();
        
        

        return response()->json([
            'id' => $challengeuser->id,
            'challengename' => $challengeuser->challengename,
            'ranking' => $challengeuser->ranking,
            'contact' => $challengeuser->contact,
            'points' => $challengeuser->points,
            'nbmatchs' => $challengeuser->nbmatchs,
            'matchaverage' => $challengeuser->matchaverage,
            'setaverage' => $challengeuser->setaverage,
            'gameaverage' => $challengeuser->gameaverage,
            'success' => 'challenge user updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $challengeuser = ChallengeUsers::findOrFail($id);

        return response()->json([
            'id' => $challengeuser->id,
            'challengename' => $challengeuser->challengename,
            'ranking' => $challengeuser->ranking,
            'contact' => $challengeuser->contact,
            'points' => $challengeuser->points,
            'nbmatchs' => $challengeuser->nbmatchs,
            'matchaverage' => $challengeuser->matchaverage,
            'setaverage' => $challengeuser->setaverage,
            'gameaverage' => $challengeuser->gameaverage,
        ]);
    }

    public function destroy($id){
        $challengeuser = ChallengeUsers::find($id);
        $challengeuser->delete();

        return response()->json([
            'success' => 'challenge user successfully deleted'
        
        ], $this-> successStatus); 

    }
}
