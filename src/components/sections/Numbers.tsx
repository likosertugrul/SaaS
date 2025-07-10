import {Container} from "../shared/Container.tsx";

export const Numbers = () => {
    return (
        <section className="relative mt-12 md:mt-16">
            <Container>
                <div className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                                border border-box-border shadow-2xl shadow-box-shadow md:divide-x divide-box-border
                                grid grid-cols-2 md:grid-cols-4">
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">100+ </h2>
                        <p className="mt-2 text-heading-3">AI Models Implemented</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">50k+</h2>
                        <p className="mt-2 text-heading-3">User Worldwide</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">%99</h2>
                        <p className="mt-2 text-heading-3">Uptime Guarantee</p>
                    </div>
                    <div className="text-center px-5">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">150+</h2>
                        <p className="mt-2 text-heading-3">Enterprise Clients</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}