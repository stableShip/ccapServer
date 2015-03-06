/**
 * Created with WebStorm.
 * User: tylere
 * Date: 14-1-15
 * Time: 上午10:29
 */


declare module "node-curl"{
    export function create():any

    export interface curlOpt{
        POST:number
        TIMEOUT:number
        RAW:Number
        POSTFIELDS:string
        VERBOSE:number
    }
}
