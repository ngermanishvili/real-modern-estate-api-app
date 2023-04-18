import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import defaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalId,
  },
}) => {
  return (
    <Link href={`/property/${externalId}`} passHref>
      <Flex
        flexWrap="wrap"
        width="420px"
        p="5"
        paddingTop="0"
        justifyContent="flex-start"
        cursor="pointer"
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : defaultImage}
            alt="house"
            width={400}
            height={400}
            aspectRatio={4}
            style={{ width: "100% !important", height: "auto !important" }}
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>

              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)} {rentFrequency && `/ ${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            p="1"
            justifyContent="space-between"
            width="250px"
            color="blue.400"
          >
            {rooms} <FaBed /> {baths} <FaBath /> | {millify(area)}{" "}
            <BsGridFill />
          </Flex>
          <Text fontSize="lg">{title.slice(0, 30)}...</Text>
        </Box>
      </Flex>
    </Link>
  );
};

//!  # I add this property to the component to make sure that the component is receiving the right data.
Property.propTypes = {
  property: PropTypes.shape({
    coverPhoto: PropTypes.object,
    price: PropTypes.number,
    rentFrequency: PropTypes.string,
    rooms: PropTypes.number,
    title: PropTypes.string,
    baths: PropTypes.number,
    area: PropTypes.number,
    agency: PropTypes.object,
    isVerified: PropTypes.bool,
    externalId: PropTypes.string,
  }).isRequired,
};

export default Property;
