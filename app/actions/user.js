import * as TYPES from './Types';

// login
export function logIn(opt){
    return {'type': TYPES.LOGGED_IN, user: opt};
}


// logout
export function logOut(){
    return {
        'type': TYPES.LOGGED_OUT
    }
}