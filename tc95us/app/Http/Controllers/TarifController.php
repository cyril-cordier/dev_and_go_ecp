<?php

namespace App\Http\Controllers;
use App\Tarifs;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use Validator;

class TarifController extends Controller
{
    public $successStatus = 200;

    public function index(){
        $tarifs = Tarifs::all();
       
       return $tarifs;

    }

    public function show(tarifs $tarif){
        return $tarif;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [ 
            'type' => 'required',
            'category' => 'required' 
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
       
        Tarifs::create($input);
        
        return response()->json(['success'=>'Tarif ajouté'], $this-> successStatus); 
    }

    public function update(Request $request, Tarifs $tarif){

        $tarif->update($request->all());
            

        return response()->json([
            'id' => $tarif->id,
            'type' => $tarif->type,
            'category' => $tarif->category,
            'price1' => $tarif->price1,
            'price2' => $tarif->price2,
            'price3' => $tarif->price3,
            'details' => $tarif->details,
            'success' => 'Tarif mis à jour avec succès !'
        
        ], $this-> successStatus); 

    } 

    public function edit($id)
    {
        $tarif = Tarifs::findOrFail($id);

        return response()->json([
            'id' => $tarif->id,
            'type' => $tarif->type,
            'category' => $tarif->category,
            'price1' => $tarif->price1,
            'price2' => $tarif->price2,
            'price3' => $tarif->price3,
            'details' => $tarif->details,
        ]);
    }

    public function destroy($id){
        $tarif = Tarifs::find($id);
        $tarif->delete();

        return response()->json([
            'success' => 'Tarif supprimé'
        
        ], $this-> successStatus); 

    }
}
