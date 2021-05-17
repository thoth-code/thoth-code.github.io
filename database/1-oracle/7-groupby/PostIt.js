let PostIt = [
    {
        type: "code",
        title: "같은 칼럼값을 가진애들끼리 그룹짓기",
        command: [
            "SELECT 칼럼1, AVG(칼럼2)\nFROM 테이블\nGROUP BY 칼럼1\nHAVING 조건;"
        ],
        describe: [
            "칼럼1의 값이 같은 놈들을 하나의 그룹으로 묶어서 그룹단위의 조회를 하게 해주는 명령어",
            "HAVING은 그룹에 적용되는 조건으로, 조건에 맞지 않는 그룹은 조회되지 않는다"
        ],
        caution: [
            "SELECT 절에는 GROUP의 기준이되는 칼럼(GROUP BY에 지정해준 칼럼)과 함수들 외에는 오지 못한다",
            "HAVING 절에는 SELECT에 지정해준 결과로 출력할 칼럼 외에는 사용하지 못한다"
        ],
        tip: []
    },
    {
        type: "code",
        title: "그룹에 속하는 인스턴스 갯수 구하기",
        command: [
            "COUNT(*)"
        ],
        describe: [
            "그룹이나 검색결과 전체에 대해 속하는 인스턴스의 갯수를 구한다"
        ],
        caution: [],
        tip: [
            "괄호 안에는 칼럼이 들어가나 어차피 인스턴스의 갯수를 구하는 것이므로 모든 칼럼을 나타내는 *를 주로 쓴다"
        ]
    },
    {
        type: "code",
        title: "최대, 최소, 평균, 총합 구하기",
        command: [
            "MAX(칼럼)",
            "MIN(칼럼)",
            "AVG(칼럼)",
            "SUM(칼럼)"
        ],
        describe: [
            "그룹이나 검색결과 전체에 대해",
            "MAX : 최댓값을 구함",
            "MIN : 최솟값을 구함",
            "AVG : 평균값을 구함",
            "SUM : 총합을 구함"
        ],
        caution: [],
        tip: []
    },
];

export default PostIt;