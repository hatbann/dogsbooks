# DogsBooks

<p align="center">
  <img src="./img/readme.png" width="500px">
</p>

## 프로젝트 소개

<p>
독서를 하면서 수기작성보다는 어플이나 웹을 통해 작성하는 것이 편리해졌습니다. 기존의 독서 어플들의 장단점을 분석해 정말 필요하다고 생각되는 요소들을 추려서 사용성이 좋은 단순한 ui를 구성했습니다. 또한 원하는 책을 더 쉽게 접할 수 있는 사용자간 소통창구를 마련했으며 본인의 독서 기록을 남길 수 있는 게시판을 제공합니다. 
</p>
 
<br>    
    
### 기간
2022/8/9 ~ 2022/12/16
<br>
<br>
    
    
### 기술 스택

| JavaScript |  Html&CSS  |  React   |  Firebase   | 알라딘 API |
| :--------: | :--------: | :------: | :---------: | :--------: |
|   ![js]    | ![htmlCss] | ![react] | ![firebase] | ![aladin]  |

<br>

## 구현 기능

### 1. 도서 추천

- 신규유저는 회원 가입 시 선택한 장르와 작성한 독서록의 장르를 바탕으로 책을 추천합니다
- 기존 유저는 작성한 독서록의 도서 장르를 바탕으로 책을 추천합니다.
- 홈 화면에서 파이어베이스의 getAuth를 통해 로그인한 유저정보를 가져오고, 유저 정보에 저장된 가장 높은 점수의 장르를 알라딘 API를 통해 검색해서 책을 추천합니다.

<br>

### 2.도서 검색

- 유저가 검색창에 입력한 문자열을 알라딘 API를 통해 넘겨줘서 정보값을 받아옵니다
- 받아온 정보를 data라는 배열에 push한 후, useNavigate를 통해 검색 결과값을 보여주는 창으로 넘겨줘서 화면에 띄워줍니다

<br>   
 
### 3. 독서록 작성 및 열람(북스)
- 검색한 도서를 클릭하면 독서록을 작성할 수 있고 자동으로 오늘 날짜와 책 정보가 기입됩니다.
- 사용자가 독서록 내용과 별점을 입력한 후 작성버튼을 누르면 데이터베이스에 저장되고, 자동으로 북스 탭으로 넘어갑니다.
- 작성한 독서록은 북스 탭에서 확인할 수 있고 수정 및 삭제가 가능합니다.

<br>
    
### 4.도서 대여 글 쓰기 및 댓글 작성(이웃도서관)
- 빌려주고 싶은 책이 있다면 책 정보를 적어 이웃도서관 탭에서 도서 대여글을 작성할 수 있습니다.
- 빌리고 싶은 책이 있다면 이웃도서관 탭에서 다른 유저들이 작성한 글을 검색해 댓글을 달 수 있습니다.
- 글쓴이는 책의 대여상태값을 대여중/대여가능으로 나눠서 표시할 수 있습니다
- 처음 이웃도서관 탭이 렌더링 될 때 getDocs를 통해 파이어베이스에서 전체 게시글을 불러옵니다.

<br>

### 5.마이페이지

- 마이페이지 탭과 빌려준 책 목록 탭으로 나눠져 있습니다
- 마이페이지에서는 지금까지 기록한 도서개수와 빌려준 글 갯수, 독서 취향을 확인할 수 있습니다.
- 빌려준 책 목록 탭에서는 지금까지 작성한 이웃도서관 글을 확인할 수 있습니다.
- 파이어베이스에서 유저정보를 바탕으로 독서록 정보, 빌려준 글 정보를 가져오고 가져온 정보를 바탕으로 개수를 계산해 북스 기록하기와 빌려주기 레벨을 측정합니다.
- 빌려준 책 목록 컴포넌트에서는 유저정보를 props로 받아 받은 값으로 파이어베이스에 쿼리문을 작성해 작성 글 정보를 가져옵니다.
  <br>
  <!-- Stack Icon Refernces -->

[js]: /img/js.png
[htmlcss]: /img/html_css_logo.png
[aladin]: /img/aladin.png
[react]: /img/React-icon.png
[firebase]: /img/firebase.png


<br>
<br>

#  🖥 사이트
https://hatbann.github.io/dogsbooks/

