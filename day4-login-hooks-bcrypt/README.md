## HTTP is stateless.

- HTTP Method ( GET, POST )
- URL ( Endpoint )
- GET, POST => DATA
- HEADERS

- 웹 - Cookie(브라우저에 저장되는 간단한 데이터), Session(서버에 저장되는 본 데이터)
- API = Token based login ( headers )


## 오늘한 것

- models/user.js 에서 Schema, model 만듦
- password hashing : bcrypt => models/user.js 에서 함 ( hooks : userSchema.pre(...))
- 로그인기능구현 : userSchema.statics.authenticate 만듦
- HTTP is stateless 하기때문에 Cookie & Session 으로 유저가 로그인했는지 그 상태를 알 수 있음 / 유저의 정보를 줌
