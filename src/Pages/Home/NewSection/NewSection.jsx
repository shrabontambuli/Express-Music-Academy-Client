

const NewSection = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{
                backgroundImage: `url("https://melody.ancorathemes.com/wp-content/uploads/2016/05/bg2-Parallax.jpg")`
            }}>
                <div className="hero-overlay bg-white bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Express Music Academy</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-20">
                            <div>
                                <div className="border-4 rounded-full p-2">
                                    <div className="radial-progress text-xl font-serif font-semibold" style={{ "--value": "80", "--size": "9rem", "--thickness": "2px" }}>234</div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Students</h1>
                            </div>
                            <div>
                                <div className="border-4 rounded-full p-2">
                                    <div className="radial-progress text-xl font-serif font-semibold" style={{ "--value": "90", "--size": "9rem", "--thickness": "2px" }}>25</div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Teachers</h1>
                            </div>
                            <div>
                                <div className="border-4 rounded-full p-2">
                                    <div className="radial-progress text-xl font-serif font-semibold" style={{ "--value": "70", "--size": "9rem", "--thickness": "2px" }}>360</div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Programmes</h1>
                            </div>
                            <div>
                                <div className="border-4 rounded-full p-2">
                                    <div className="radial-progress text-xl font-serif font-semibold" style={{ "--value": "60", "--size": "9rem", "--thickness": "2px" }}>280</div>
                                </div>
                                <h1 className="mt-5 text-xl font-serif font-semibold">Awards</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewSection;