import React, { useState } from 'react';

import TextField from '@mui/material/TextField';

import MuiContentCopy from './components/MuiContentCopy';

function Main() {
    const [content, setContent] = useState('');

    return (
        <>
            <h1>[Demo] 複製到剪貼簿</h1>
            <TextField
                id="content"
                value={content}
                multiline
                fullWidth
                rows={8}
                onChange={(event) => {
                    setContent(event.target.value);
                }}
                style={{ paddingBottom: 10 }}
            />
            <MuiContentCopy
                popId="popId"
                content={content}
            />
            <br />
            <hr />
            <h2>簡單說明</h2>
            <div>
                在方框中輸入文字，點選下方「copy to clipboard」即可將方框中的文字複製到剪貼簿<br /><br />
                <a href="https://github.com/goodchuck2274/mui-component/tree/main/src/components/MuiContentCopy.js" target='_blank'>元件連結</a>
                、<a href="https://github.com/goodchuck2274/mui-component/tree/main/src/copyToClipboard.js" target='_blank'>範例程式連結</a>
            </div>
        </>
    );
}

export default Main;