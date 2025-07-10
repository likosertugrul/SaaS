import {Container} from "../shared/Container.tsx";
import {Title} from "../shared/Title.tsx";

export const Brands = () => {
    const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];
    return (
        <section>
            <Container className="space-y-8">
                <div className="">
                    <Title>Trusted by Industry Leaders</Title>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {
                        logos.map((logo, index) => (
                            <div key={index} className="p-4 sm:p-5 rounded-xl bg-body- border borde r-box-border group">
                                <img src={`src/assets/logos/${logo}.png`} alt={logo}
                                     width="100" height="60"
                                     className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:opacity-50 group-hover:scale-105"/>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}