# passport

## OAuth2 ( Authentication X => Authorization )
## Service Provider ( Facebook, Twitter, Kakao, Naver )

- REST API 키 => 외부에 노출되는 키 (facebook: 앱 ID)
- Admin 키 => 남에게 보이면 안되는 키 (facebook: 앱 시크릿 코드)

- 사용자 관리 => ON
- 입력사항 입력

- kakao 일반 플랫폼 추가 => 웹
- 사이트 도메인 => http://localhost:3030
- Redirect Path => /auth/kakao/callback

---

# 오늘 배운 것

## 1
1. router.route
2. router.param

## 2 Authentication
- passport ... ( userSchema.statics.authenticate )
 - passport => serializeUser, deserializeUser
 - Strategy
   - passport-local ===> passport-local-mongoose
   - passport-facebook, passport-kakao

## 3. OAuth2
- passport-kakao
 - Strategy => passport.authenticate("kakao")
 - userSchema.statics.____

# 앞으로 배울 것
- RESTful API + Ajax ( 클라이언트 ~ 서버 )
- 웹 소켓 ( socket.io ) - 실시간 채팅
