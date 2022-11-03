//List all the functions
declare class GrootieClient {
    waifu();


}

export = GrootieClient;


declare namespace GrootieClient {
  //Help create options interface for the few functions that need it
  export interface GrootieQueryParams {
    text: string;
  }
  export interface GrootieRequestResults {
    url
  }
  export interface GrootieChatResults {
    response: string;
    url?: string;
  }
  export interface GrootieCatResult {
    cat: string;
  }
  export interface GrootieWhyResult {
    why: string;
  }
  export interface GrootieOwOResult {
    owo: string;
  }
  export interface GrootieFactResult {
    fact: string; 
  }
}
