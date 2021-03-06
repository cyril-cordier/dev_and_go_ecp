<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
class UserController extends Controller 

{
public $successStatus = 200;
/** 
     * LOG SUR L'API 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            return response()->json(['success' => $success], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Email ou mot de passe'], 401); 
        } 
    }
/** 
     * S'INSCRIRE SUR L'API
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'challengename' => ['unique:users'],
            'firstname' => 'required', 
            'lastname' => 'required',
            'email' => ['unique:users', 'required', 'email'], 
            'password' => 'required', 
            'c_password' => 'required|same:password',
        ]);


        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        User::create($input);
        
/*         $success['token'] =  $user->createToken('MyApp')-> accessToken; 
        $success['name'] =  $user->name; */
        return response()->json(['success'=>'Vous pouvez maintenant vous connecter '], $this-> successStatus); 
    }

     public function updateUser(Request $request){
        $user = User::find(auth::User()->id);

        $validator = Validator::make($request->all(),[ 
            'challengename' => ['unique:users,challengename,'.$user->id],
            'email' => ['unique:users,email,'.$user->id],
            
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $data = $request->all();
        $user->update($data);

        return response()->json([
            'id' => $user->id,
            'challengename' => $user->challengename,
            'firstname' => $user->firstname,
            'lastname' => $user->lastname,
            'email' => $user->email,
            'admin' => $user->admin,
            'success' => 'Utilisateur mis à jour avec succès !'
        
        ], $this-> successStatus); 

    } 
// fonction update
    public function update(Request $request, User $user){
       
        $validator = Validator::make($request->all(),[ 
            'challengename' => ['unique:users,challengename,'.$user->id],
            'email' => ['unique:users,email,'.$user->id],
            
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
       
        $user->update($request->all());
     
        

        return response()->json([
            'id' => $user->id,
            'challengename' => $user->challengename,
            'firstname' => $user->firstname,
            'lastname' => $user->lastname,
            'email' => $user->email,
            'admin' => $user->admin,
            'success' => 'Utilisateur mis à jour avec succès !'
        
        ], $this-> successStatus); 

    } 

    public function destroy($id){
        $user = User::find($id);
        $user->delete();

        return response()->json([
            'success' => 'Utilisateur supprimé'
        
        ], $this-> successStatus); 

    } 
    
    

/** 
     * FONCTION USER POUR RECUPERER AUTH 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function details() 
    { 
        $user = Auth::user();
       
        return response()->json(['challengename' => $user], $this-> successStatus); 
    } 

    public function index(){
        $users = User::all(); 
        /* $resultat = [];
        

       foreach($users as $user){

           $data = array_merge($result,array("id"=>$user->id,"challengename"=>$user->challengename,"email"=> $user->email, "admin" => $user->admin));
           array_push($resultat,$data);
       } */
       
       return $users;

    }
    

    public function show(User $user){
        return $user;
    }

    
}