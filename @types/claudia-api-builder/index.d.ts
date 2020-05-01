declare module 'claudia-api-builder' {
	class ApiResponse {
		public constructor(response: any, headers: any, code?: any);
	}
	export default class ApiBuilder {
		public static ApiResponse: typeof ApiResponse;
		get(uri: string, callback: Function): void;
		put(uri: string, callback: Function): void;
		post(uri: string, callback: Function): void;
		delete(uri: string, callback: Function): void;
		head(uri: string, callback: Function): void;	
		patch(uri: string, callback: Function): void;	
		
		// any(uri : string, callback : Function) : void;
	}
}
