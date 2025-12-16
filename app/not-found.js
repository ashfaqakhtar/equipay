import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
    return (
        <section className="h-screen flex items-center lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <Image src="/assets/not-found.webp" alt="404" width={200} height={200}
                        className="max-w-40 h-auto mx-auto" priority={false}
                    />

                    <h3 className="xl:text-[40px] lg:text-[34px] sm:text-[40px] text-[26px] m-0 leading-[1.4] 
                        font-semibold text-[#707070] my-4"
                    >
                        Page Not Found
                    </h3>

                    <p className="max-w-[520px] mt-1 text-[15px] sm:text-base xl:text-lg text-[#57647c] 
                        font-light leading-[1.7]"
                    >
                        The page you are looking for might have been removed had its name changed or is temporarily
                        unavailable.
                    </p>


                    <Link href='/' className="text-white uppercase border border-[#ef793c] rounded-md text-base py-3 
                        bg-linear-to-r from-[#ef793c] to-[#ff6a00] font-medium px-6 cursor-pointer inline-block my-5"
                        rel="preload"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound