import {React, useState} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip } from '@chakra-ui/react';
import {article1} from "./article1.json";
import {article2} from "./article2.json";
import {motion} from 'framer-motion';
import Article from './Article'

const MotionBox = motion(Box);

function TestPage() {


    return (
        <Grid templateColumns="2fr 6fr 1fr 6fr 2fr">
            <Box></Box>
            <Article article={article1}/>
            <Box></Box>
            <Article article={article2}/>
            <Box></Box>
        </Grid>
    );
}

export default TestPage;
