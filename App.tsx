
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import { HeartIcon } from './components/IconComponents';

const storySteps = [
    {
        title: "Como Tudo Começou",
        icon: <HeartIcon className="w-12 h-12 text-violet-400" />,
        content: (
            <>
                <p className="text-lg leading-relaxed">
                    A gente se conheceu em um lugar que eu nunca achei que ia encontrar alguém tão espcial que nem você. No Randochat só tinha gente esquisita, e por sorte eu pude te conhecer.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    Quando a gente voltou a namorar, foi a melhor coisa que podia ter acontecido comigo. Todo segundo do meu dia eu queria passar com você. Eu lembro que a gente ficava "brigando" pra alguém desligar a ligação porque a gente precisava dormir, mas nenhum de nós queria desligar.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    É muito engraçado pensar que isso aconteceu por acaso. Eu tive muita sorte de poder ter te conhecido.
                </p>
            </>
        )
    },
    {
        title: "O Que Vivemos Até Aqui",
        icon: <HeartIcon className="w-12 h-12 text-red-400" />,
        content: (
            <>
                <p className="text-lg leading-relaxed">
                  Quando a gente começou a namorar, eu ainda tinha um pouco de medo de não dar certo de novo. Mas quando eu falei com a minha mãe sobre você, foi quando eu percebi que eu ia fazer de tudo pra dar certo. Eu não consigo me ver com outra pessoa que não seja você.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Por isso que, mesmo nos momentos ruins que a gente tem, eu vou continuar pra sempre com você.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Nesses 6 meses com você, eu aprendi que amar não é só sentir algo pelo outro, mas sim escolher ficar com o outro mesmo nos momentos ruins. Esses últimos dias a gente tem discutido bastante e não tá se falando muito, mas eu sei que daqui um tempo a gente vai ficar bem de novo.
                </p>
            </>
        )
    },
    {
        title: "O Que Eu Quero com Você",
        icon: <HeartIcon className="w-12 h-12 text-pink-400" />,
        content: (
            <>
                <p className="text-lg leading-relaxed">
                  Eu não sei onde a vida vai levar a gente, mas se for com você, qualquer lugar pra mim vai ser especial.
                </p>
                <p className="text-lg leading-relaxed">
                  Eu sei que agora você não pensa em ter filhos, mas um dia eu vou conseguir te convencer a mudar de ideia pra gente poder ter a Lua. Sol e Estrela não, porque eu não gostei do nome >:c
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                  Eu não tenho nenhum plano grandioso pro nosso futuro, mas a única coisa que eu tenho certeza que quero é poder te fazer feliz e que todo dia você ainda me escolha como a pessoa que você quer ao seu lado.
                </p>
            </>
        )
    },
    {
        title: "Para Meu Amorzinho",
        icon: <HeartIcon className="w-12 h-12 text-fuchsia-500" />,
        content: (
            <>
                <p className="text-lg leading-relaxed">
                  Eu sei que sou meio chato às vezes, e que não sou a pessoa mais bonita do mundo, mas eu me esforço o máximo possível pra ser um namorado bom o suficiente pra você.
                </p>
                <p className="text-lg leading-relaxed">
                  Gabi, você sempre foi e sempre vai ser o amor da minha vida.
                </p>
                <p className="mt-6 text-2xl font-dancing-script text-center text-fuchsia-600">
                  Obrigado por esses 6 meses ao seu lado. <br/> Eu te amo muito meu amorzinho!!! <br/>
                </p>
            </>
        )
    }
];

const App: React.FC = () => {
    const [step, setStep] = useState(0); // 0 is the start screen
    const totalContentSteps = storySteps.length;

    const handleNext = () => setStep(s => Math.min(s + 1, totalContentSteps));
    const handleBack = () => setStep(s => Math.max(s - 1, 1));
    const handleStart = () => setStep(1);

    const currentStepData = useMemo(() => {
        if (step > 0 && step <= totalContentSteps) {
            return storySteps[step - 1];
        }
        return null;
    }, [step, totalContentSteps]);

    const progressPercentage = (step / totalContentSteps) * 100;

    return (
        <div className="min-h-screen text-purple-900 antialiased flex flex-col justify-center">
            <main className="container mx-auto px-4 py-8 md:py-12 max-w-2xl relative">
                
                {step === 0 && (
                    <div className="text-center animate-fade-in">
                        <Header />
                        <button
                            onClick={handleStart}
                            className="mt-8 bg-fuchsia-500 text-white font-bold py-3 px-10 rounded-full hover:bg-fuchsia-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                        >
                            Próximo
                        </button>
                    </div>
                )}

                {currentStepData && (
                    <div key={step} className="animate-fade-in">
                        <ContentSection title={currentStepData.title} icon={currentStepData.icon}>
                            {currentStepData.content}
                        </ContentSection>
                    </div>
                )}

                {step > 0 && (
                     <div className="mt-8">
                        <div className="w-full bg-purple-200/50 rounded-full h-2.5">
                           <div className="bg-fuchsia-400 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={handleBack}
                                disabled={step <= 1}
                                className="bg-white/80 text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-white transition-all duration-300 shadow disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Voltar
                            </button>
                            
                            {step < totalContentSteps && (
                                <button
                                    onClick={handleNext}
                                    className="bg-fuchsia-500 text-white font-bold py-2 px-6 rounded-full hover:bg-fuchsia-600 transition-all duration-300 shadow"
                                >
                                    Próximo
                                </button>
                            )}
                        </div>
                     </div>
                )}
            </main>
             <footer className="text-center w-full p-4">
                {step > 0 && <p className="text-purple-400 text-sm">Com todo o meu amor, para sempre.</p>}
            </footer>
        </div>
    );
};

export default App;