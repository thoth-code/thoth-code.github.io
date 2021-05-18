import * as upperWindow from "../Window.js";

function Window() {
    let window = [];
    window.push({
        isRoute: false,
        path: "database/1-oracle/1-table/index.html",
        content: "Table 추가, 수정, 삭제"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/2-instance/index.html",
        content: "Instance 추가, 수정, 삭제"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/3-select/index.html",
        content: "SELECT와 Function"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/4-from/index.html",
        content: "FROM"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/5-where/index.html",
        content: "WHERE"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/6-orderby/index.html",
        content: "ORDER BY"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/7-groupby/index.html",
        content: "GROUP BY, Aggregation Function"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/8-join/index.html",
        content: "JOIN"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/9-subquery/index.html",
        content: "서브쿼리"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/10-set-hirarchy/index.html",
        content: "집합연산과 계층형질의"
    });
    window.push({
        isRoute: false,
        path: "database/1-oracle/11-view/index.html",
        content: "뷰"
    });

    let windows = upperWindow.default();
    windows.push(window);

    return windows;
}

export default Window;