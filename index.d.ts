//List all the functions
declare class GrootieClient {
    waifu():Promise<GrootieClient.GrootieRequestResults>;


}

export = GrootieClient;


declare namespace GrootieClient {
  //Help create options interface for the few functions that need it
  export interface GrootieQueryParams {
    text: string;
  }
  export interface GrootieRequestResults {
    url: string;
  }
  export interface NekoChatResults {
    response: string;
    url?: string;
  }
  export interface NekoCatResult {
    cat: string;
  }
  export interface NekoWhyResult {
    why: string;
  }
  export interface NekoOwOResult {
    owo: string;
  }
  export interface NekoFactResult {
    fact: string; 
  }
}
