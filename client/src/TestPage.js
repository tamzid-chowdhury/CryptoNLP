import {React, useState, useEffect} from 'react';
import { Box, Text, Grid, Center, Icon, Tooltip, VStack } from '@chakra-ui/react';
import {motion, AnimatePresence, useAnimation} from 'framer-motion';
import {article1} from "./article1.json";
import {article2} from "./article2.json";
import Article from './Article'
import ChartContainer from './ChartContainer.js'
import BarChart1 from './BarChart1'
import BarChart2 from './BarChart2'
import { Bar } from 'react-chartjs-2';
import { useInView } from 'react-intersection-observer'

const MotionBox = motion(Box);

function TestPage() {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const [showGraphs, setShowGraphs] = useState(false);

    useEffect(() => {
        if(inView){
            setShowGraphs(true)
        }
        else{
            setShowGraphs(false)
        }
        
    }, [inView])

    const animation = useAnimation();
    const animation1 = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                scale: 1.1,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    y: {
                        delay: 0.1
                    }
                }
            })
            animation1.start({
                scale: 1.1,
                y: 0,
                transition: {
                    type: "spring",
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    y: {
                        delay: 0.1
                    }
                }
            })
        }
        if(!inView){
            animation.start({
                scale: 0.8,
                y:0
            })
            animation1.start({
                scale: 0.8,
                y:0
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
            <Grid templateColumns="2fr 8fr 2fr 8fr 2fr">
                <Box></Box>
                <MotionBox whileHover={{ scale:1.2}} animate={animation} ref={ref} w="38vw" h="45vh" marginTop="10px" bgColor="#202835" borderRadius="4%">
                    <Box margin="25px">
                    {showGraphs && <BarChart1></BarChart1>}
                    </Box>
                </MotionBox>
                <Box></Box>
                <MotionBox whileHover={{ scale:1.2}} animate={animation1} ref={ref} w="38vw" h="45vh" marginTop="10px" bgColor="#1b222d" borderRadius="4%">
                    <Box margin="25px">
                    {showGraphs && <BarChart2></BarChart2>}
                    </Box>
                </MotionBox>
                <Box></Box>
            </Grid>
        </>
    );
}

export default TestPage;
