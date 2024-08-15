## Free API 이용해서 블로그앱 📑만들기


>📡 API 활용

- fetch 함수를 사용하여 url 불러옴
  ```
  async( ) => {
  response = await fetch('url');
  json = await response.json();}
  ```
- useEffect Hook으로 API 동기화 시킴
- useParams Hook으로 url 의 동적요소를 가져와서 상세페이지 작업에 활용      
         
            
---   
>💄디자인   
  
 css : styled-components 적용   
개별 post에 랜덤이미지 활용  [🎨랜덤 이미지 사이트]( https://picsum.photos/200/150)