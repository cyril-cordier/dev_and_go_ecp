<?php

namespace App\Http\Controllers;
use App\Office;
use Illuminate\Http\Request;
use Validator;

class OfficeController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $officeusers = Office::all();
       
       return $officeusers;

    }

    public function show(Office $officeusers){
        return $officeusers;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'username' => 'required',
            'ranking' => 'required',
            'contact' => 'required',  
            'points' => 'required',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Office::create($input);
        
        return response()->json(['success'=>'challenge user successfully added'], $this-> successStatus); 
    }

    public function update(OfficeRequest $request, $id){
        $officeuser = Office::find($id);

        $officeuser->username = $request->input('username');
        $officeuser->ranking = $request->input('ranking');
        $officeuser->contact = $request->input('contact');
        $officeuser->points = $request->input('points');
        $challengofficeuseruser->nbmatchs = $request->input('nbmatchs');
        $officeuser->matchaverage = $request->input('matchaverage');
        $officeuser->setaverage = $request->input('setaverage');
        $officeuser->gameaverage = $request->input('gameaverage');
        
       
        $challengeuser->save();
        
        

        return response()->json([
            'id' => $officeuser->id,
            'username' => $officeuser->username,
            'ranking' => $officeuser->ranking,
            'contact' => $officeuser->contact,
            'points' => $officeuser->points,
            'nbmatchs' => $officeuser->nbmatchs,
            'matchaverage' => $officeuser->matchaverage,
            'setaverage' => $officeuser->setaverage,
            'gameaverage' => $officeuser->gameaverage,
            'success' => 'challenge user updated with success !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $challengeuser = Office::findOrFail($id);

        return response()->json([
            'id' => $officeuser->id,
            'username' => $officeuser->username,
            'ranking' => $officeuser->ranking,
            'contact' => $officeuser->contact,
            'points' => $officeuser->points,
            'nbmatchs' => $officeuser->nbmatchs,
            'matchaverage' => $officeuser->matchaverage,
            'setaverage' => $officeuser->setaverage,
            'gameaverage' => $officeuser->gameaverage,
        ]);
    }

    public function destroy($id){
        $officeuser = Office::find($id);
        $officeuser->delete();

        return response()->json([
            'success' => 'challenge user successfully deleted'
        
        ], $this-> successStatus); 

    }
}
