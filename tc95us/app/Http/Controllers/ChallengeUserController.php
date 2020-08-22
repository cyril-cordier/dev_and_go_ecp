<?php

namespace App\Http\Controllers;
use App\ChallengeUsers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
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
        
        return response()->json(['success'=>'Joueur créé avec succès'], $this-> successStatus); 
    }

    public function update(Request $request, ChallengeUsers $challengeuser){

        $challengeuser->update($request->all());
        
        

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
            'visible' => $challengeuser->visible,
            'success' => 'Joueur mis à jour avec succès !'
        
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
            'visible' => $challengeuser->visible,
        ]);
    }

    public function destroy($id){
        $challengeuser = ChallengeUsers::find($id);
        $challengeuser->delete();

        return response()->json([
            'success' => 'Joueur supprimé'
        
        ], $this-> successStatus); 

    }
}
