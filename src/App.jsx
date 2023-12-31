import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Flex,Bow, Text, Button, Box} from '@chakra-ui/react'
import './App.css'

const Banner = ({purpose,imageUrl,title1,title2,desc1,desc2,linkName,buttonText}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
<Image src={imageUrl} width={500} height={300} alt='banner' />
<Box p="5">
  <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
  <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
  <Text fontSize="lg" paddingTop='3' paddingBottom='3'>{desc1} <br/>{desc2}</Text>
  <Button fontSize="xl" bg="blue.300" color="white">
    <Link href={linkName}>{buttonText}</Link>
  </Button>
</Box>
  </Flex>
)




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Banner
  purpose="Rent a Home"
  title1="Rental Homes For"
  title2="Everyone"
  desc1="Explore Apartments, Villas, Homes"
  desc2="And More"
  buttonText="Explore Renting"
  linkName="/search?purpose=for-rent"
  imageUrl="bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
  />
  <Banner
  purpose="Buy a Home"
  title1="Find, Buy, and Own Your"
  title2="Dream Home"
  desc1="Explore Apartments, Villas, Homes"
  desc2="And More"
  buttonText="Explore Buying"
  linkName="/search?purpose=for-sale"
  imageUrl="bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
  />
    </>
  )
}

export default App
