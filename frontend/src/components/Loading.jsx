const Loading = async () => {
    return (
        <>
            <div
                className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white"
                style={{ zIndex: 9999 }}
            >

                <div className="spinner-grow text-success" role="status" />
            </div>
        </>
    )
}

export default Loading;