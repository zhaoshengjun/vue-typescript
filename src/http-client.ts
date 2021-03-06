import { injectable } from "inversify";

@injectable()
export class HttpClient {
  get(url: string): Promise<any> {
    return fetch(url).then(data => data.json());
  }
}
