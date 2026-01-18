import Spaces from "../../models/SpacesModel.js";


const updateSpaceService = async (id, updationData) => {

    const updatedSpace = await Spaces.findByIdAndUpdate(id, updationData, { new: true });
    console.log(updatedSpace);

    return updatedSpace;
}

export default updateSpaceService;