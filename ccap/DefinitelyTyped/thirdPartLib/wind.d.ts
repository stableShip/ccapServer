/**
 * Created with WebStorm.
 * User: tylere
 * Date: 14-1-15
 * Time: 上午7:56
 */

//声明$await全局函数
declare function $await(arg:any):any;

declare module "wind" {

    export function compile(ctype:string, callback:Function):string

	export var Async: AsyncDef;
	export var Logging: LoggingDef;
	export var logger: loggerDef;

    export interface loggerDef{
        level:any;
    }

    export interface LoggingDef{
        Level:LevelDef;
    }

    export interface LevelDef{
        INFO:string;
    }
//Wind.logger.level = Wind.Logging.Level.INFO;
    export interface AsyncDef{
        //Task(arg:any):WindTask;
        Task:Task;
        Binding:BindingDef;
        sleep(delayInMs:number):Function;
    }

    /**
     * 任务模型数据结构
     */
    export interface Task{
        create(fn:any):any;
        start():void;
        addEventListener(ev:string, listener:Function):void;
        removeEventListener(ev:string, listener:Function):void;
        complete(type:string, value:any):void;
        whenAll(tsk:any[]):any;
    }

    interface BindingDef{
        fromStandard(fn:any, ...args: any[]):any;
        //fromStandard(fn:any):any;
        //emit(event: string, ...args: any[]): boolean;
        fromCallback(fn:any, ...args: any[]):any;
        //fromCallback(fn:any, arg1:any, arg2:any, arg3:any):any;
    }
}

