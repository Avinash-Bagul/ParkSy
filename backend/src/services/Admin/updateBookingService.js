

const updateBooking = async () => {
    const updatedBooking = await Spaces.findByIdAndUpdate(id, updationData, { new: true });
    console.log(updateBooking);

    return updatedBooking;
}

export default updateBooking;