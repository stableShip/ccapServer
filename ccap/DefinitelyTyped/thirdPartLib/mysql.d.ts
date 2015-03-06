/**
 * Created with WebStorm.
 * User: tylere
 * Date: 14-1-15
 * Time: 上午10:05
 */

declare module "mysql" {
    export function createConnection(config:any):any
    export function createPool(config:any):any
    export function createPoolCluster(config:any):any
}



//exports.createConnection = function(config) {
//    return new Connection({config: new ConnectionConfig(config)});
//};
//
//exports.createPool = function(config) {
//    return new Pool({config: new PoolConfig(config)});
//};
//
//exports.createPoolCluster = function(config) {
//    return new PoolCluster(config);
//};
//
//exports.createQuery = Connection.createQuery;
