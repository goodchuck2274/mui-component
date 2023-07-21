import React from 'react';

import MuiSortingTable from './components/MuiSortingTable';

function Main() {

    const headCells = [
        { id: 'columnA', label: '欄位 A' },
        { id: 'columnB', label: '欄位 B' },
        { id: 'columnC', label: '欄位 C' },
        { id: 'columnD', label: '欄位 D' },
    ]

    const rows = [
        { columnA: 25464.48, columnB: 76348, columnC: 25462.7, columnD: 76399.0 },
        { columnA: 18100.04, columnB: 12814, columnC: 17963.17, columnD: 12720.0 },
        { columnA: 4233.54, columnB: 33822, columnC: 4231.14, columnD: 33815.0 },
        { columnA: 4075.4, columnB: 48636, columnC: 4072.19, columnD: 48432.0 },
        { columnA: 3386.4, columnB: 2379, columnC: 3385.09, columnD: 2389.0 },
        { columnA: 3070.6, columnB: 45295, columnC: 3070.67, columnD: 45850.0, highlight: true },
        { columnA: 2784.02, columnB: 42409, columnC: 2782.91, columnD: 40964.0 },
        { columnA: 2215.29, columnB: 15444, columnC: 2240.42, columnD: 15345.0 },
        { columnA: 2139.84, columnB: 55085, columnC: 2139.84, columnD: 54966.0 },
        { columnA: 2012.01, columnB: 34113, columnC: 2010.43, columnD: 34158.0 },
    ]

    return (
        <>
            <h1>[Demo] 可排序的 Table</h1>
            <MuiSortingTable
                headCells={headCells}
                rows={rows}
                defaultOrderBy=''
            />
            <br />
            <hr />
            <h2>簡單說明</h2>
            <div>
                選點「欄位A」「欄位B」「欄位C」「欄位D」可以此欄位的值的大小來排序 <br /><br />
                <a href="https://github.com/goodchuck2274/mui-component/tree/main/src/components/MuiSortingTable.js" target='_blank'>元件連結</a>
                、<a href="https://github.com/goodchuck2274/mui-component/tree/main/src/sortingTable.js" target='_blank'>範例程式連結</a>
            </div>
        </>
    );
}

export default Main;