# 데이터베이스


## 관계형 데이터베이스
## SQL ( Structured Query Language .. )

- MySQL
- MSSQL
- ORACLE
- Postgresql

- ORM ( Object Relational Mapping ) => 객체 === Row


( ex.엑셀 )
column ==> "name", "email", "phonenumber" * 1000 rows => table ( sheet ) ...
데이터베이스 => N * 테이블

회원 테이블 ...
포스트 테이블 ...
댓글 테이블 ...


## NoSQL ( Not only SQL .. )

- MongoDB : 쉽다, javascript query
- Redis

- Mongo Query
    - Javascript
    - Mongo client, monk, ... => Node.js + MongoDB
    - Mongoose ( ODM; Object Document/Data Mapping )


- 자바스크립트 객체 == MongoDB Document ... 맵핑


### mongodb 설치 ( c9.io 에서 ) 
1. 설치 : `$ sudo apt-get install -y mongodb-org`
2. 설정 : 
```
$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
(mongod 라는 파일에 해당 명령어를 집어넣어라)
$ chmod a+x mongod
(change mode: mongod 가 읽기전용 파일에에서 실행가능한(executable) 모드로 권한을 바꾸다)
```
3. 실행 : `./mongod`

- `$ npm install -g mongo-hacker` : 자동완성기능

### MonogDB => Document Database

- 엑셀
    - sheets
    - sheet
    - column * row

- 관계형DB
    - 데이터베이스
    - 테이블
    - column * row

- MongoDB
    - 데이터베이스
    - Collections
    - Documents ===> JSON ( 객체 )
