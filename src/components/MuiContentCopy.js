import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import {
    sleep
} from '../Utils';

export default function MuiContentCopy({ popId, content }) {

    const [popOpen, setPopOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const id = popOpen ? popId : undefined;

    const handleClick = async (event) => {
        navigator.clipboard.writeText(content)

        setAnchorEl(event.currentTarget);
        setPopOpen(true);
        await sleep(600)
        setPopOpen(false);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setPopOpen(false);
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton aria-label="copy"
                onClick={(event) => {
                    handleClick(event);
                }}>
                <ContentCopyIcon />
                <span style={{ 'fontSize': '0.6em', paddingLeft: 6 }}>copy to clipboard</span>
            </IconButton>
            <Popover
                id={id}
                open={popOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                style={{ marginTop: 10 }}
            >
                <Typography sx={{ p: 1 }}>copied</Typography>
            </Popover>
        </>
    );
}
