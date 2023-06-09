import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { baseUrl, fetchApi } from "@/utils/fetchApi"
import Property from "@/components/Property"
const Banner = ({ purpose, title1, title2, desc1, desc2, linkName, buttonText, imageUrl }) => {
  return (
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10' >
      <Image src={imageUrl} width={600} height={400} alt="banner" />
    
      <Box p='5'>
        <Text color='gray.500' fontSize='sm' fontWeight='medium'
          textTransform='uppercase' letterSpacing='wide'>
          {purpose}
          i make a banner component that we can reuse in our home page
        </Text>
        <Text fontSize='3xl' fontWeight='bold'
          textTransform='uppercase' letterSpacing='wide
          '>
          {title1} <br /> {title2}
        </Text>
        <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700' fontWeight='medium'
          textTransform='uppercase' letterSpacing='wide'>
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize='xl' bg='red' color='white'>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}



export default function Home({ propertyForRent, propertyForSale }) {
  console.log(propertyForRent, propertyForSale);
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Every Lifestyle'
        desc1='Find your dream home with us'
        desc2='We have a wide range of properties'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap '>
        {propertyForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy &  Own Your'
        title2='Dream Home'
        desc1='Find your dream home with us'
        desc2='We have a wide range of properties'
        buttonText='Explore Buying '
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap='wrap' >
        {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}
// # this is the code for the fetchApi.js file 
export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
