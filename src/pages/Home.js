import Hero from "../components/home/Hero";

import Title from "../components/UI/info/Title";

const title = "React Fetch Data";

const HomePage = () => {
    return (
        <main>
            <section className="container">
                <Title title={title} />
            </section>
            <section className="container">
                <Hero />
            </section>
        </main>
    );
};

export default HomePage;