let PostIt = [
    {
        type: "code",
        title: "여러 테이블에서 정보를 갖고와 하나로 출력",
        command: [
            "SELECT 칼럼들\nFROM 테이블1, 테이블2\nWHERE 테이블1.기본키 = 테이블2.외래키;",
            "SELECT 칼럼들\nFROM 테이블1 JOIN 테이블2\nON 테이블1.기본키 = 테이블2.외래키;"
        ],
        describe: [
            "기본키-외래키의 관계를 이용해 두 테이블의 인스턴스를 하나의 인스턴스로 합쳐 출력함"
        ],
        caution: [],
        tip: [
            "여러 테이블에 흩어져 존재하는 정보들을 모아서 사용하고자 할 때 사용한다",
            "해당 JOIN은 INNER JOIN이라고도 하며 쿼리문을 INNER JOIN로 적어도 동일한 결과를 갖고온다"
        ]
    },
    {
        type: "code",
        title: "NATURAL JOIN",
        command: [
            "SELECT 칼럼들\nFROM 테이블1 NATURAL JOIN 테이블2;",
            "SELECT 칼럼들\nFROM 테이블1 NATURAL JOIN 테이블2\nUSING(칼럼);",
        ],
        describe: [
            "NATURAL JOIN은 기본키-외래키 뿐 아니라 두 테이블의 같은 이름을 갖는 칼럼들의 칼럼값이 같은 인스턴스만을 합친다",
            "다만 NATURAL JOIN의 경우에는 같은 이름을 갖는 모든 칼럼을 기준으로 합치기 때문에 특정 칼럼을 명시해주고 싶을 때 USING을 이용하면 되는 것"
        ],
        caution: [],
        tip: [],
    },
    {
        type: "code",
        title: "CROSS JOIN",
        command: [
            "SELECT 칼럼들\nFROM 테이블1 CROSS JOIN 테이블2;"
        ],
        describe: [
            "CROSS JOIN은 Cartesian Product, 즉, 두 테이블의 인스턴스를 합칠 수 있는 모든 경우의 수를 모두 나열한 것이다",
            "따라서 크기가 n인 테이블과 m인 테이블을 CROSS JOIN하면 그의 크기는 n곱하기m 인 것"
        ],
        caution: [],
        tip: []
    },
    {
        type: "code",
        title: "LEFT OUTER JOIN",
        command: [
            "SELECT 칼럼들\nFROM 테이블1, 테이블2\nWHERE 테이블1.기본키(+)=테이블2.외래키;",
            "SELECT 칼럼들\nFROM 테이블1 LEFT OUTER JOIN 테이블2\nON 테이블1.기본키 = 테이블2.외래키;"
        ],
        describe: [
            "LEFT OUTER JOIN은 합쳐지지 않은 인스턴스 중 왼쪽테이블(위의 쿼리문에서는 테이블1)의 인스턴스도 같이 출력하는 쿼리문이다"
        ],
        caution: [],
        tip: [
            "위의 쿼리문에서처럼 LEFT OUTER JOIN-ON 명령어 말고도 WHERE문에서 모든 인스턴스를 보고싶은 왼쪽 테이블의 칼럼에 (+)를 붙여도 동일하게 작동한다"
        ]
    },
    {
        type: "code",
        title: "RIGHT OUTER JOIN",
        command: [
            "SELECT 칼럼들\nFROM 테이블1, 테이블2\nWHERE 테이블1.기본키=테이블2.외래키(+);",
            "SELECT 칼럼들\nFROM 테이블1 RIGHT OUTER JOIN 테이블2\nON 테이블1.기본키 = 테이블2.외래키;"
        ],
        describe: [
            "RIGHT OUTER JOIN은 합쳐지지 않은 인스턴스 중 오른쪽테이블(위의 쿼리문에서는 테이블2)의 인스턴스도 같이 출력하는 쿼리문이다"
        ],
        caution: [],
        tip: [
            "위의 쿼리문에서처럼 RIGHT OUTER JOIN-ON 명령어 말고도 WHERE문에서 모든 인스턴스를 보고싶은 오른쪽 테이블의 칼럼에 (+)를 붙여도 동일하게 작동한다"
        ]
    },
    {
        type: "code",
        title: "FULL OUTER JOIN",
        command: [
            "SELECT 칼럼들\nFROM 테이블1 FULL OUTER JOIN 테이블2\nON 테이블1.기본키 = 테이블2.외래키;"
        ],
        describe: [
            "FULL OUTER JOIN은 양쪽의 모든 합쳐지지 않은 인스턴스를 출력하는 쿼리문이다"
        ],
        caution: [
            "다만 FULL OUTER JOIN의 경우에는 (+)를 양쪽에 붙여주는 등의 (+)기호를 통한 표기법은 동작하지 않는다"
        ],
        tip: []
    },
    {
        type: "code",
        title: "",
        command: [],
        describe: [],
        caution: [],
        tip: []
    },
];

export default PostIt;