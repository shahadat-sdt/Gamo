import {FaAndroid, FaApple, FaGamepad, FaLinux, FaPlaystation, FaWindows, FaXbox,} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo, SiSega} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import {HStack, Icon} from "@chakra-ui/react";
import type {Platform} from "../hooks/useGames";
import type {IconType} from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
        sega: SiSega
    }
    const getPlatformIcon = (slug: string): IconType =>
        iconMap[slug] ?? FaGamepad;

    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (
                <Icon key={platform.id} as={getPlatformIcon(platform.slug)} color='gray.500'/>
            ))}
        </HStack>
    );
};

export default PlatformIconList;
