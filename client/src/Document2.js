import {React, useState} from 'react';
import { useSpring, animated, a } from 'react-spring'
import { Box, Text, Grid, Center, Icon, Tooltip } from '@chakra-ui/react';

import styles from './styles.module.css'
import doccss from './doc.css'


function Document2() {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(800px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 350, friction: 80 },
    })

    return (
        <Box h="800px" margin="20px" onClick={() => set(state => !state)}>
        <a.div
            className={`${styles.c1} ${styles.back}`}
            style={{ opacity: opacity.to(o => 1 - o), transform}}

        >
            <Center mt="10px" pt="100px" fontSize="24px" color="black">Mock Document 2</Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black"><span className='highlight'><Tooltip label="Digital Asset" hasArrow placement="top"><span className='slots'> Circle</span></Tooltip>, the cryptocurrency company and stablecoin issuer, revealed through a public filing </span> </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black"><span className='highlight'> that it is under investigation by the<Tooltip label="Regulatory Agency" hasArrow placement="top"><span className='slots'> Securities and Exchange Commission</span></Tooltip></span>. The news outlet </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">Coindesk first reported the investigation. A <span className='slots'>Circle</span> spokesperson told Yahoo Finance that  </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black"><span className='highlight'>"Circle is cooperating in an ongoing<span className='slots'> SEC </span>investigation. </span>Our October S4 filing references a  </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">continuation to the July 2021 SEC subpoena previously disclosed in our August S4 filing." In </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">its most recent public filings, <span className='highlight'><span className='slots'> Circle </span>stated that in July 2021 it "received an investigative </span> </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black"><span className='highlight'>subpoena from the<span className='slots'>  SEC </span> </span>Enforcement Division requesting documents and information regarding </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">certain of our holdings, customer programs, and operations." The filing went on to say</Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">that <span className='highlight'><span className='slots'>Circle </span>is fully cooperating with the regulator</span>'s investigation. </Text></Center>
        </a.div>
        <a.div
            className={`${styles.c1} ${styles.front}`}
            style={{
            opacity,
            transform,
            rotateY: '180deg',
            }}
            border="10px" borderColor="yellow"
        >
            <Center mt="10px" fontSize="20px" color="black">Mock Document 2 - Extractions</Center>
            <Center><Text mt="30px" fontSize="13px" color="red" as='b'>Circle, the cryptocurrency company and stablecoin issuer, revealed through</Text></Center>
            <Center><Text mt="5px" fontSize="13px" color="red" as='b'>a public filing that it is under investigation by the Securities and Exchange Commission</Text></Center>
            <Center><Text mt="30px" fontSize="13px" color="red" as='b'>Circle is cooperating in an ongoing SEC investigation.</Text></Center>
            <Center><Text mt="30px" fontSize="13px" color="red" as='b'>Circle stated that in July 2021 it "received an investigative subpoena from the SEC </Text></Center>
            <Center><Text mt="30px" fontSize="13px" color="red" as='b'>Circle is fully cooperating with the regulator</Text></Center>
        </a.div>
        </Box>
    )}

export default Document2;