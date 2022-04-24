import card1 from "../../assets/card/1.webp"
import card2 from "../../assets/card/2.webp"
import card3 from "../../assets/card/3.webp"
import card4 from "../../assets/card/4.webp"
import card5 from "../../assets/card/5.webp"
import card6 from "../../assets/card/6.webp"

const Card = () => {
    return (
        <div className="container-xxl my-20">
            <div className="mb-20">
                <h5 className="subtitle letter-spacing-5 text-uppercase text-muted mb-3 tracking-[0.5rem] text-xs">Top Choices</h5>
                <h1 className="leading-1 text-3xl font-semibold mb-3">Popular this week</h1>
                <p className="lead mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua.</p>
            </div>
            <div>

                <div className="flex flex-col md:flex-row justify-between md:mb-20">
                    <div className="mb-10 md:mb-0">
                        <div className="w-auto h-auto">
                            <img src={card5} width={450} height={450} alt="card-1" />
                        </div>
                        <div className="m-3">
                            <h1 className="leading-1 text-3xl font-semibold">Black canvas bag</h1>
                            <p className="my-1 text-muted mb-4">$39.90</p>
                            <p className="uppercase tracking-widest text-xs text-muted">
                                shop now
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse relative mb-10 md:mb-0">
                        <div className="">
                            <img src={card4} alt="card-1" />
                        </div>
                        <div className="flex flex-col relative lg:top-40 top-20 md:-right-20">
                            <h1 className="leading-1 text-3xl font-semibold">Sweeters for her</h1>
                            <p className="my-1 text-muted mb-4">$139.90</p>
                            <p className="uppercase tracking-widest text-xs text-muted font-thin">
                                shop now
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between md:mb-20">
                    <div className="flex flex-row-reverse relative mb-10 md:mb-0">
                        <div className="relative md:-left-20">
                            <img src={card3} alt="card-1" />
                        </div>
                        <div className="flex flex-col relative lg:top-40 top-20">
                            <h1 className="leading-1 text-3xl font-semibold">Sweeters for her</h1>
                            <p className="my-1 text-muted mb-4">$139.90</p>
                            <p className="uppercase tracking-widest text-xs text-muted">
                                shop now
                            </p>
                        </div>
                    </div>
                    <div className="mb-10 md:mb-0">
                        <div className="w-auto h-auto">
                            <img src={card2} width={450} height={450} alt="card-1" />
                        </div>
                        <div className="m-3">
                            <h1 className="leading-1 text-3xl font-semibold">Black canvas bag</h1>
                            <p className="my-1 text-muted mb-4">$39.90</p>
                            <p className="uppercase tracking-widest text-xs text-muted">
                                shop now
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:mb-20">
                    <div className="mb-10 md:mb-0">
                        <div className="w-auto h-auto">
                            <img src={card6} width={450} height={450} alt="card-1" />
                        </div>
                        <div className="m-3">
                            <h1 className="leading-1 text-3xl font-semibold">Black canvas bag</h1>
                            <p className="my-1 text-muted mb-4">$39.90</p>
                            <p className="uppercase tracking-widest text-xs text-muted">
                                shop now
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse relative mb-10 md:mb-0">
                        <div className="">
                            <img src={card1} alt="card-1" />
                        </div>
                        <div className="flex flex-col relative lg:top-40 top-20 md:-right-20">
                            <h1 className="leading-1 text-3xl font-semibold">Sweeters for her</h1>
                            <p className="my-1 text-muted mb-4">$139.90</p>
                            <p className="uppercase tracking-widest text-xs text-muted font-thin">
                                shop now
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card