import { UrlWithParsedQuery, parse } from "url";

export class Utils {
  public static toUpperCase(args: string): string {
    return args.toUpperCase()
  }

  public static parseUrl(url:string): UrlWithParsedQuery {
    if(!url) {
      throw new Error('Empty URL')
    }
    return parse(url, true)
  }
}