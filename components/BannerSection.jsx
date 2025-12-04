const BannerSection = ({ title, sub_title, }) => {

    return (
        <section className="relative md:h-[360px] h-auto border-b-4 border-[#1758a8] bg-[#f8f9fe]">
            <div className="lg:px-24 sm:px-7 px-5">
                <div className="container mx-auto" data-aos="zoom-in-up">
                    <div className="text-center md:pt-[200px] md:pb-[120px] pt-40 pb-[100px]">
                        <h2 className="text-[40px] font-bold text-[#0887be] leading-[1.2]">
                            {title}
                        </h2>

                        <p className="max-w-[600px] mx-auto mt-2.5 text-[17px] font-light text-[#0887be] leading-[1.7]">
                            {sub_title}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerSection