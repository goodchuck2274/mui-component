import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import MuiDropzone from './components/MuiDropzone';

function Main() {

    const [files, setFiles] = useState(null);

    const onSelectFile = (e) => {
        setFiles(e);
    }

    const clear = () => {
        setFiles(null);
    }

    let showFiles = null;
    if (files) {
        showFiles = (
            <div>
                上傳檔案：
                <Table aria-label="simple table">
                    <TableBody>
                        {files.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell><AttachFileIcon /></TableCell>
                                    <TableCell >{row.path}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }

    return (
        <>
            <h1>[Demo] 拖曳上傳檔案</h1>
            <MuiDropzone
                onDrop={onSelectFile}
            />
            <br />
            {showFiles}
            <br />
            <Button variant="contained" onClick={() => {
                clear();
            }}>清除
            </Button>
            <br />
            <hr />
            <h2>簡單說明</h2>
            <div>
                拖曳檔案至方框中，即可上傳檔案和對檔案進行後續處理 <br />
                整合 <a href="https://mui.com/material-ui/" target='_blank'>material-ui</a> 和 <a href="https://react-dropzone.js.org/" target='_blank'>react-dropzone</a><br />
                <br />
                <a href="https://github.com/goodchuck2274/mui-component/tree/main/src/components/MuiDropzone.js" target='_blank'>元件連結</a>
                、<a href="https://github.com/goodchuck2274/mui-component/tree/main/src/dropZone.js" target='_blank'>範例程式連結</a>
            </div>
        </>
    );
}

export default Main;