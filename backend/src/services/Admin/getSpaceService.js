import Spaces from "../../models/SpacesModel.js";


const getSpaceService = async () => {

    const allSpaces = await Spaces.find();

    if (!allSpaces || allSpaces.length === 0) {
        throw new Error("SPACES_NOT_FOUND");
        
    }

    return allSpaces;
}

export default getSpaceService;