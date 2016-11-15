# node-js-practice
node.js for web-programming

Node.js => 방대한 패키지 생태계 +++

npm ( node package manager )
npm install "----" ( npn install request ) => node_module/ 라는 폴더에 다운로드

JWT Token ( JSON Web Token ) - token authentication ( 보안성 좋음 )
login api ( username, password ) ===> JWT ...
그다음 요청부터는 모든 header 에 내가 받은 JWT ...

npm install -g nodemon ( -g : global )
=> require로 패키지를 불러오기 보단 실행가능한 바이너리파일들이 있을때 global 로 깐다

## 오늘 내용 리뷰
- Node.js 모듈을 사용해서 훨씬 편하게 작업하기 ( Express, Nodemon, Request)
- 우리가 직접 모듈을 개발해서 ( csv )

---

http.createServer => express application

- Router
- Middleware
- Renderer ( pug "template engine" )

## 다음 시간에 할 내용
- GET
- POST

데이터를 전송하는 방법

다른 서버/API 에 요청을 하는 ( 데이터를 전송하는 ) (지금까지 배운 것)
우리 서버가 남들이 보낸 데이터를 받을 수 있게 하자. (앞으로 배울 것)
