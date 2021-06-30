const constent = [
    {
        title: "다운받은 폰트 적용하기",
        code: [
            `@charset "UTF-8"
            @font-face {
                font-family: "폰트 닉네임 원하는걸로";
                src: url("폰트경로/폰트파일.eot");
                src: url("폰트경로/폰트파일.eot#iefix") format("embedded-opentype"),
                    url("폰트경로/폰트파일.woff") format("woff"),
                    url("폰트경로/폰트파일.ttf") format("truetype");
            }
            
            선택자 {
                font-family: 폰트 닉네임
            }`
        ]
    },
    {
        title: "플랙스 적용",
        code: [
            "display: flex;",
            "display: inline-flex;"
        ]
    },
    {
        title: "플랙스 아이템 배치 방향",
        code: [
            "flex-direction: row; /* 왼 -> 오 */",
            "flex-direction: column; /* 위 -> 아래 */",
            "flex-direction: row-reverse; /* 오 -> 왼 */",
            "flex-direction: column-reverse; /* 아래 -> 위 */"
        ]
    },
    {
        title: "플랙스 아이템이 컨테이너를 벗어날때 처리 - 줄넘김 처리",
        code: [
            "flex-wrap: nowrap; /* 처리안함 */",
            "flex-wrap: wrap; /* 빠져나가는놈 아래로 */",
            "flex-wrap: wrap-reverse; /* 빠져나가는놈 위로 */"
        ]
    },
    {
        title: "플랙스 아이템 배치 방향과 줄넘김 한꺼번에",
        code: [
            "flex-flow: row wrap;"
        ]
    },
    {
        title: "배치방향 한 줄에 있는 애들 있는 애들 배치 방법",
        code: [
            "justify-content: flex-start; /* 아이템들 1fr */",
            "justify-content: flex-end; /* 1fr 아이템들 */",
            "justify-content: center; /* 1fr 아이템들 1fr */",
            "justify-content: space-between; /* 아이템 1fr 아이템 1fr 아이템 */",
            "justify-content: space-around; /* 1fr 아이템 2fr 아이템 2fr 아이템 1fr */",
            "justify-content: space-evenly; /* 1fr 아이템 1fr 아이템 1fr 아이템 1fr */",
        ]
    },
    {
        title: "배치방향 한 줄의 위치 바꾸기",
        code: [
            "align-items: stretch; /* 채우기 */",
            "align-items: flex-start; /* 맨 위로 올리기 */",
            "align-items: flex-end; /* 맨 아래로 내리기 */",
            "align-items: center; /* 중앙정렬 */",
            "align-items: baseline; /* 글자크기 가장큰놈 기준으로 글자 밑단 맞추기 */",
        ]
    },
    {
        title: "배치방향 여러줄에 있는 애들 배치 방법 - wrap일때 줄넘김이 된 상태일때 배치 방법",
        code: [
            "align-content: stretch; /* 채우기 */",
            "align-content: flex-start; /* 맨 위로 올리기 */",
            "align-content: flex-end; /* 맨 아래로 내리기 */",
            "align-content: center; /* 중앙정렬 */",
            "align-content: space-between; /* justify-content와 똑같은데 이제 방향만 바뀜 */",
            "align-content: space-around; /* justify-content와 똑같은데 이제 방향만 바뀜 */",
            "align-content: space-evenly; /* justify-content와 똑같은데 이제 방향만 바뀜 */",
        ]
    },
    {
        title: "사이즈 기본값",
        code: [
            "flex-basis: 10px /* 가로 너비가 10px보다 작아지지 않음 */"
        ]
    },
    {
        title: "아이템 하나 배치방향으로 stretch",
        code: [
            "flex-grow: 0; /* 배치방향으로 stretch되지 않음 - 기본값 */",
            "flex-grow: 1; /* 배치방향으로 stretch됨 */",
            "flex-grow: 2; /* 배치방향으로 stretch되나 글자를 제외한 여백이 딴애들의 두배임 */"
        ]
    },
    {
        title: "아이템 flex-basis보다 폭이 작아지지 않게 하기",
        code: [
            "flex-shrink: 1; /* flex-basis보다 작아질 수 있음 - 기본값 */",
            "flex-shrink: 0; /* flex-basis보다 작아질 수 없음*/",
        ]
    },
    {
        title: "grow, shrink, basis 축약형",
        code: [
            "flex: 1; /* grow: 1, shrink: 1, basis: auto */",
            "flex: 1 500px; /* grow: 1, shrink: 1, basis: 500px */",
            "flex: 1 0 500px; /* grow: 1, shrink: 0, basis: 500px */",
        ]
    },
    {
        title: "아이템 하나 위치 정하기",
        code: [
            "align-self: auto; /* container 속성 상속 */",
            "align-self: stretch; /* 위아래 채우기 */",
            "align-self: flex-start; /* 맨위로 정렬 */",
            "align-self: flex-end; /* 맨아래로 정렬 */",
            "align-self: center; /* 가운제 정렬 */",
            "align-self: baseline; /* 글자 밑단 맞추기 */",
        ]
    }
]