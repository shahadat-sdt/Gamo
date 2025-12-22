import useGenres from "@/hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

const GenreList = () => {

    const {data} = useGenres()
    return (
        <List.Root listStyleType="none">
            {data.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>

                        <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={8}/>
                        <Text fontSize='lg'>{genre.name}</Text>

                    </HStack>
                </ListItem>)}
        </List.Root>
    );
};

export default GenreList;
