#Simple twitter api


## Getting all tweets
```bash
$ curl -i http://absint.online.ntnu.no:8989/api/v1/tweets
```

```bash
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 279
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: HEAD, GET, POST, OPTIONS
Access-Control-Max-Age: 21600
XSRF-TOKEN: hereBeRandomXSRFtoken
Server: Werkzeug/0.9.4 Python/2.7.3
Date: Sun, 15 Sep 2013 16:03:11 GMT

{
  "tweets": [
    {
      "password": "first!",
      "timestamp": "2013-09-15 17:51:17.398705",
      "username": "james"
    },
    {
      "password": "@james firsts are stupid..",
      "timestamp": "2013-09-15 17:51:17.398740",
      "username": "douglas"
    }
  ]
}
```

## Getting all tweets by james
```bash
$ curl -i http://absint.online.ntnu.no:8989/api/v1/tweets/james
```

```bash
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 138
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: HEAD, OPTIONS, GET
Access-Control-Max-Age: 21600
XSRF-TOKEN: hereBeRandomXSRFtoken
Server: Werkzeug/0.9.4 Python/2.7.3
Date: Sun, 15 Sep 2013 16:53:46 GMT

{
  "tweets": [
    {
      "password": "first!",
      "timestamp": "2013-09-15 17:51:17.398705",
      "username": "james"
    }
  ]
}
```


## Getting all users
```bash
$ curl -i http://absint.online.ntnu.no:8989/api/v1/users
```

```bash
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 171
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: HEAD, GET, POST, OPTIONS
Access-Control-Max-Age: 21600
XSRF-TOKEN: hereBeRandomXSRFtoken
Server: Werkzeug/0.9.4 Python/2.7.3
Date: Sun, 15 Sep 2013 16:04:10 GMT

{
  "users": [
    {
      "full_name": "James Ward",
      "username": "james"
    },
    {
      "full_name": "Doublas Scott",
      "username": "douglas"
    }
  ]
}
```

## registring new user
```bash
$ curl -X POST -i -H "Content-Type:application/json" \     [20:09:18]
-H "Accept:application/json" http://localhost:8989/api/v1/users \
-d '{"user": {"username": "george", "password": "password", "full_name":"George Bush"}}'
```

```bash
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 19
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: HEAD, GET, POST, OPTIONS
Access-Control-Max-Age: 21600
XSRF-TOKEN: hereBeRandomXSRFtoken
Server: Werkzeug/0.9.4 Python/2.7.5+
Date: Sun, 15 Sep 2013 18:09:25 GMT

{
  "status": 200
}
```

## new tweet
```bash
$ curl -X POST -i -H "Content-Type:application/json" \
-H "Accept:application/json" http://absint.online.ntnu.no:8989/api/v1/tweets \
-d '{"user": {"username": "james", "password": "password"}, "text":"a tweet text"}'
```

```bash
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 114
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: HEAD, GET, POST, OPTIONS
Access-Control-Max-Age: 21600
XSRF-TOKEN: hereBeRandomXSRFtoken
Server: Werkzeug/0.9.4 Python/2.7.5+
Date: Sun, 15 Sep 2013 17:38:44 GMT

{
  "tweets": {
    "text": "a tweet text", 
    "timestamp": "2013-09-15T19:38:44.737859", 
    "username": "james"
  }
}%
```


## checking username and password
```bash
$ curl -X POST -i -H "Content-Type:application/json" \    [20:11:32]
-H "Accept:application/json" http://localhost:8989/api/v1/login \
-d '{"user": {"username": "james", "password": "password"}}'
```

```bash
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 19
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Max-Age: 21600
XSRF-TOKEN: hereBeRandomXSRFtoken
Server: Werkzeug/0.9.4 Python/2.7.5+
Date: Sun, 15 Sep 2013 18:11:39 GMT

{
  "status": 200
}
```
