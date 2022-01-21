import {React, useState} from 'react';
import { useSpring, animated, a } from 'react-spring'
import { Box, Text, Grid, Center, Icon, Tooltip } from '@chakra-ui/react';

import styles from './styles.module.css'
import doccss from './doc.css'

function Document() {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(800px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 350, friction: 80 },
    })

    return (
        <Box h="800px" margin="20px" onClick={() => set(state => !state)}>
        <a.div
            className={`${styles.c} ${styles.back}`}
            style={{ opacity: opacity.to(o => 1 - o), transform}}

        >
            <Center mt="60px" fontSize="24px" color="black">Mock Document 1</Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">The <span className='highlight'><span className='slots'>U.S. Securities and Exchange Commission (SEC) </span>is investigating <span className='slots'>Uniswap Labs</span>,</span></Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">the main developer behind one of the world's largest cryptocurrency exchanges, <span className='slots'>Uniswap</span>,  </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">the Wall Street Journal reported on Friday, citing people familiar with the matter. </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">Enforcement attorneys are looking for more information on how investors use <span className='slots'>Uniswap</span> </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">and the manner in which it is marketed, the report said. <span className='slots'>Uniswap</span> did not immediately</Text></Center>
            <Center><Text mt="20px" fontSize="13px" color="black">reply to a Reuters request for comment. <span className='highlight'><span className='slots'> SEC's</span>.probe into <span className='slots'> Uniswap Labs </span> comes amid heightened </span> </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black"><span className='highlight'> regulatory interest into cryptocurrencies</span>  and the digital asset market, with </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">Chair <span className='slots'>Gary Gensler</span> calling on <span className='highlight'><span className='slots'>Congress</span> last month to give the agency more authority to better</span></Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black"><span className='highlight'> police crypto trading </span> and lending. <span className='slots'>Uniswap</span> is a crypto marketplace for decentralized finance </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">or DeFi developers, traders and liquidity providers. DeFi is an open network and works on a   </Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black">peer-to-peer system, where transactions are not routed through a centralized system</Text></Center>
            <Center><Text mt="20px" fontSize="13px" color="black">such as a bank or a brokerage. <span className='slots'>Gensler</span> in August had called on lawmakers to give the <span className='highlight'> <span className='slots'>SEC</span> more </span></Text></Center>
            <Center><Text mt="20px" fontSize="13.5px" color="black"><span className='highlight'> power to oversee DeFi platforms</span>, which are not regulated in the United States. </Text></Center>
        </a.div>
        <a.div
            className={`${styles.c} ${styles.front}`}
            style={{
            opacity,
            transform,
            rotateY: '180deg',
            }}
            border="10px" borderColor="yellow"
        >
            <Center mt="180px" fontSize="20px" color="black">Mock Document 1 - Extractions</Center>
            <Center><Text mt="30px" fontSize="13px" color="red" as='b'>U.S. Securities and Exchange Commission (SEC) is investigating Uniswap Labs</Text></Center>
            <Center><Text mt="30px" fontSize="12px" color="red" as='b'>SEC's probe into Uniswap Labs comes amid heightened regulatory interest into cryptocurrencies</Text></Center>
            <Center><Text mt="30px" fontSize="13px" color="red" as='b'>Congress last month to give the agency more authority to better police crypto trading </Text></Center>
            <Center><Text mt="30px" fontSize="13px" color="red" as='b'>SEC more power to oversee DeFi platforms</Text></Center>
        </a.div>
        </Box>
    )}

export default Document;