import {Container} from "../shared/Container.tsx";
import {Title} from "../shared/Title.tsx";
import {Paragraph} from "../shared/Paragraph.tsx";
import {pricingPlans} from "../../utils/pricing-plan.tsx";
import {Button} from "../shared/Button.tsx";

export const Pricing = () => {
    return (
        <section id="pricing" className="py-5">
            <Container>
                <Title>Pricing </Title>
                <Paragraph className="mt-4">
                    Choose the plant that's right for your business.
                </Paragraph>
            </Container>
            <Container className="mt-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div className="relative group h-full" key={index}>
                            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                                <div className="bg-box-bg border border-box-border rounded-3xl shadow-2xl shadow-box-shadow
                                            py-8 flex flex-col h-full relative">
                                    {plan.bestValue && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                                                   text-white text-xs font-semibold uppercase tracking-wider
                                                                     px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600">Best
                                        Value</div>}
                                    <h3 className="ml-4 text-2xl text-heading-1 font-semibold">{plan.title}</h3>
                                    <p className="ml-4 text-4xl font-bold text-heading-2">{plan.price}</p>
                                    <ul className="ml-4 mt-6 flex-1 space-y-3 text-left text-heading-3">
                                        {plan.features.map((feature, index) => (
                                            <li className="flex items-center gap-2" key={index}>
                                                <span className="text-primary">✅ </span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mx-4 mt-8">
                                        <Button className="w-full transform transition-transform duration-300 hover:scale-95 text-white">Choose Plan</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}