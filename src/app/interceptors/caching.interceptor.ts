import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";
import {RequestCacheWithMap} from "./request-cache.service";


@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCacheWithMap) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // continue if not cacheable.

    if (!this.isCacheable(req)) { return next.handle(req); }

    const cachedResponse = this.cache.get(req);
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);


    function sendRequest(
      req: HttpRequest<any>,
      next: HttpHandler,
      cache: RequestCacheWithMap): Observable<HttpEvent<any>> {

      // No headers allowed in npm search request
      const noHeaderReq = req.clone({ headers: new HttpHeaders() });

      return next.handle(noHeaderReq).pipe(
        tap(event => {
          // There may be other events besides the response.
          if (event instanceof HttpResponse) {
            cache.put(req, event); // Update the cache.
          }
        })
      );
    }

  }

  isCacheable(req: HttpRequest<any>) {
    return req.method == 'GET';
  }

  /**
   * Get server response observable by sending request to `next()`.
   * Will add the response to the cache on the way out.
   */



}
