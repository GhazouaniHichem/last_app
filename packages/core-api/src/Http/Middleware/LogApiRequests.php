<?php

namespace Fleetbase\Http\Middleware;

use Fleetbase\Traits\CustomMiddleware;
use Fleetbase\Jobs\LogApiRequest;

class LogApiRequests
{
    use CustomMiddleware;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, \Closure $next)
    {
        if ($this->isReading($request)) {
            return $next($request);
        }

        // get the response
        $response = $next($request);

        // log api request
        $this->logApiRequest($request, $response);

        return $response;
    }

    public function logApiRequest($request, $response)
    {
        // log the api request
        try {
            $payload = LogApiRequest::getPayload($request, $response);
            $session = LogApiRequest::getSession();

            LogApiRequest::dispatch($payload, $session);
        } catch (\Exception $e) {
            // silently log error
        } catch (\Aws\Sqs\Exception\SqsException $e) {
            // silently log error
        }
    }
}
