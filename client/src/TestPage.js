import {React, useState, useEffect} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack } from '@chakra-ui/react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import {article1} from "./article1.json";
import {article2} from "./article2.json";
import Article from './Article'
import ChartContainer from './ChartContainer.js'
import BarChart1 from './BarChart1'
import { Bar } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer'

const MotionBox = motion(Box);

function TestPage() {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                scale: 1,
                transition: 'spring', duration: 1, bounce: 0.3
            })
        }
        if(!inView){
            animation.start({
                scale: 0
            })
        }
        console.log("use effect inView=", inView)
    },[inView])

    const leftGraphVariants = {
        hidden: {
          x: "-100vh",
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
          x: "0",
          transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };

      const rightGraphVariants = {
        hidden: {
          x: "100vh",
         transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        },
        visible: {
          x: "0",
          transition: {
            type: "spring",
            duration: 0.7,
            ease: [0.83, 0, 0.17, 1]
          }
        }
      };



    return (
        <>
            <Grid templateColumns="2fr 6fr 1fr 6fr 2fr" h="100vh">
                <Box></Box>
                <Article article={article1}/>
                <Box></Box>
                <Article article={article2}/>
                <Box></Box>
            </Grid>
            <Grid templateColumns="2fr 6fr 1fr 6fr 2fr">
                <Box></Box>
                <MotionBox animate={animation} ref={ref} w="38vw" h="45vh" marginTop="80px" bgColor="#1b222d" borderRadius="4%">
                    <Box margin="25px">
                    <BarChart1></BarChart1>
                    </Box>
                </MotionBox>
                <Box></Box>
                <MotionBox animate={animation} ref={ref} w="38vw" h="45vh" marginTop="10px" bgColor="#1b222d" borderRadius="4%">
                    <Box margin="25px">
                    <BarChart1></BarChart1>
                    </Box>
                </MotionBox>
                <Box></Box>
            </Grid>
        </>
    );
}

export default TestPage;
