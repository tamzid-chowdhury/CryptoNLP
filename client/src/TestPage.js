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
import {faker} from '@faker-js/faker'
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/materialize/tabulator_materialize.min.css"; // meterialize

// for React 16.4.x use: import { ReactTabulator }
import { ReactTabulator } from "react-tabulator"; // for React 15.x


const MotionBox = motion(Box);

function TestPage() {

    const {ref, inView} = useInView({
        threshold: 0.2
    });

    const {ref:ref1, inView:inView1} = useInView({
        threshold: 0.2
    });

    const [showGraphs, setShowGraphs] = useState(false);

    useEffect(() => {
        if(inView1){
            animation2.start({
                scale: 1,
                opacity: 1,
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
        if(!inView1){
            animation2.start({
                scale: 0.8,
                opacity:0
            })
        }
        
    }, [inView1])


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
    const animation2 = useAnimation();

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

      const columns = [
        { title: "Name", field: "name", width: 150, minWidth: 100, responsive: 0 },
        { title: "Favourite Color", field: "color", minWidth: 100, responsive: 2 },
        { title: "Date Of Birth", field: "dob", minWidth: 100, responsive: 2 },
        {
          title: "Passed?",
          field: "passed",
          align: "center",
          formatter: "tickCross",
          minWidth: 100,
          responsive: 0
        }
      ];

      const generator = (schema, min = 1, max) => {
        max = max || min;
        return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
          Object.keys(schema).reduce((entity, key) => {
            entity[key] = faker.fake(schema[key]);
            return entity;
          }, {})
        );
      };

      const clientsSchema = {
        name: "{{name.firstName}}",
        color: "{{internet.color}}",
        dob: "{{date.recent}}",
        passed: "{{random.boolean}}"
      };
      
      const data = generator(clientsSchema, 10, 10);

      const options = {
        movableRows: false,
        responsiveLayout: "hide"
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
            <Grid templateColumns="2fr 8fr 2fr 8fr 2fr" h="65vh">
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
            <Grid templateColumns="2fr 20fr 2fr" h="40vh">
                <Box></Box>
                <MotionBox ref={ref1} animate={animation2} whileHover={{scale:1.1}} color="#4b8ae1" bgColor="#1b222d" borderRadius="2%" h="40vh" overflow="scroll">
                    <Box margin="30px">
                    <ReactTabulator
                        columns={columns}
                        data={data}
                        options={options}
                        data-custom-attr="test-custom-attribute"
                        className="custom-css-class"
                        />
                    </Box>
                </MotionBox>
                <Box></Box>
            </Grid>
        </>
    );
}

export default TestPage;
