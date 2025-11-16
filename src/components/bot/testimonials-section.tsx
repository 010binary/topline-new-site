export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            quote: "This robot helped me trade while I work my day job. It's reliable and consistent.",
            author: "Janet",
            role: "Accountant",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
        },
        {
            id: 2,
            quote: "I've been using Lux pips for 3 months and my results are better than manual trading ever was.",
            author: "Carlos",
            role: "Business Owner",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
        },
        {
            id: 3,
            quote: "What I love is how easy it is to use. Plug it in and it just works.",
            author: "Mohammed A",
            role: "Engineer",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
        }
    ];

    return (
        <section className="bg-slate-900 px-4 py-16 md:py-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-purple-500 font-semibold text-sm md:text-base uppercase tracking-widest mb-3">
                        Testimonies
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        What our students say about us
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="space-y-6">
                            {/* Quote */}
                            <p className="text-slate-300 italic text-lg leading-relaxed">
                                {testimonial.quote}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.avatar || "/placeholder.svg"}
                                    alt={testimonial.author}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-white text-base">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-slate-400 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
