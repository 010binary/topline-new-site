export default function VideoReviewsSection() {
    const videoReviews = [
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4",
        "/videos/video4.mp4"
    ];

    return (
        <section className="bg-primary-background px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                        Video Reviews
                    </h2>
                    <p className="text-slate-400 text-lg">
                        One of the best bots out there.
                    </p>
                </div>

                {/* Screenshots Carousel */}
                <div className="overflow-x-auto">
                    <div className="flex gap-6 pb-4">
                        {videoReviews.map((video, index) => (
                            <div
                                key={index}
                                className="shrink-0"
                            >
                                <video
                                    src={video}
                                    controls
                                    autoPlay={true}
                                    className="w-96 rounded-lg object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
