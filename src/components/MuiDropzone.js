import React from 'react';
import Card from '@mui/material/Card';
import Dropzone from 'react-dropzone'

export default function MuiDropzone({ onDrop }) {
    return (
        <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
                <Card variant="outlined" style={{ borderColor: '#BBBBBB' }}>
                    <div {...getRootProps()} style={{ height: 120, cursor: 'pointer', textAlign: 'center', paddingTop: 35 }}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                </Card>
            )}
        </Dropzone>
    );
}
