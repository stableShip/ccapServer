
/**
 * https://github.com/isaacs/node-lru-cache
 * 这是一个缓存器的库，他里面的每个元素都有一个有效时间，如果过了有效时间，
 * 他会自动删除过期的元素
 * 
 */

	interface IlruOpt{
		/**元素的有效期，单位（毫秒）,如果有效期过了，
		 * 缓存不会立刻删除该元素，而是直到等你去get它的
		 * 时候，他就会把它删除，并且返回undefined
		 */
		maxAge:number;
		/**缓存的容量，默认是无限大，当你设置了最大容量时，如果插入的数量超过了最大容量，最少使用的会被自动删除
		 * 如果插入的元素比最大容量都要大，那么就会插不进去
		 */
		max?:number;
		/**一个元素的长度的计算函数，默认是直接返回1的函数，传入的是这个元素的值*/
		length?:(val:any)=>number;
		/**把元素移除前所执行的处理函数，常用于关闭文件描述符等，就是删除前的处理*/
		//dispose?:(key:string, val:any)=>void;
		dispose?:any;
		/**当你去get一个元素时，元素过期了，stale为true时，它会返回这个元素，
		 * 并且马上把它从缓存中删除；如果stale为false时(默认),他会马上把它从
		 * 缓存中删除，并且返回undefined给你
		 */
		stale?:boolean;
	}


	interface Icache{
		/**cache存储器中元素的个数*/
		length:number;
		/**cache的最大容量，新建cache的时候指定的，如果没有指定就是无限大*/
		max:number;
		/**插入value*/
		set(key:string, value:any):void;
		/**获取key所对应的值*/
		get(key:string):any;
		/**获取key所对应的值，但是不更新最近使用的时间，如果你经常使用这个函数，
		 * 那很有可能你不应该使用这个lru数据结构
		 */
		peek(key:string):any;
		/**删除一个key值，值应该也删除了吧？*/
		del(key:string):void;
		/**删除所有的key-value,清空整个缓存*/
		reset():void;
		/**判断一个key值是否存在于缓存，同时不会更新最近使用时间，或者由于该元素过期了，导致元素被删除*/
		has(key:string):boolean;
		/**与数组中的函数Array.forEach一样，遍历所有的key->value,在这里使用最频繁的会被首先遍历*/
		forEach(iterate:(value:any, key:string, cache:Icache)=>void, thisp?:any):void;
		/**获取所有的key值，返回的是一个包含了所有key的数组*/
		keys():string[];
		/**返回一个数组，包含了cache中的所有值*/
		values():any[];
		/**弹出（并删除）最少使用的元素，cache.length会减少*/
		pop():{key:string; value:any};
		/**这个函数主要用于调试使用，返回一个包含了cache缓存中的所有键值对
		 * 比如：cache.set("a", "A")  var d = cache.dump()  // { a: { key: "a", value: "A", lu: 0 } }
		 */
		dump():any;
	}

declare module "lru-cache" {


	function LRU(option:IlruOpt):Icache;
	export = LRU;
} 