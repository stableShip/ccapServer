/**
 * Created with WebStorm.
 * User: tylere
 * Date: 14-1-20
 * Time: 下午8:13
 */
///<reference path='node.d.ts'/>
//interface ByteBuffer{
//    new (buf?:NodeBuffer):ByteBufferDef;
//}

//interface ByteBufferDef{
//    ushort(val?:any, index?:number):any;
//    short(val?:any, index?:number):any;
//    int32(val?:any, index?:number):any;
//    uint32(val?:any, index?:number):any;
//    string(val?:any, index?:number):any;
//    vstring(val?:any, index?:number):any;
//    int64(val?:any, index?:number):any;
//    float(val?:any, index?:number):any;
//    double(val?:any, index?:number):any;
//    byte(val?:any, index?:number):any;
//    byteArray(val:any, len:number, index?:number):any;
//    unpack():any;
//    pack(ifHead?:boolean):any;
//    readString():string;
//    readShort():number;
//    readInt32():number;
//    readUint32():number;
//    readInt64():number;
//    readVstring(len:number):string;
//    readUshort():number;
//    readInt32():number;
//    readFloat():number;
//    readDouble():number;
//}


declare module "ByteBuffer" {
	class ByteBuffer{
		constructor(buf?: NodeBuffer);
		short(val?: number, index?: number): any;
		ushort(val?: number, index?: number): any;
		int32(val?: number, index?: number): any;
		uint32(val?: number, index?: number): any;
		string(val?: string, index?: number): any;
		vstring(val?: any, index?: number): any;
		int64(val?: number, index?: number): any;
		float(val?: number, index?: number): any;
		double(val?: number, index?: number): any;
		byte(val?: number, index?: number): any;
		byteArray(val: any, len: number, index?: number): any;
		unpack(): any;
		pack(ifHead?: boolean): NodeBuffer;
		readString(): string;
		readShort(): number;
		readUint32(): number;
		readInt64(): number;
		readVstring(len: number): string;
		readUshort(): number;
		readInt32(): number;
		readFloat(): number;
		readDouble(): number;
	}
	export = ByteBuffer;
}
