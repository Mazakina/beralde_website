import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white z-10 py-16 px-6 md:px-16 w-full space-y-20">
      {/* Raízes */}
      <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      >
      <h2 className="text-4xl font-bold text-green-800 mb-4">🏡 Nossas Raízes</h2>
      <p className="text-xl md:text-left text-gray-700">
        A <strong>Beralde Verduras</strong> nasceu no quintal do nosso sítio em Ibiúna, movida por um amor antigo pela terra. 
        Nossa ligação com o campo vem de Londrina, no Paraná, onde nossa família planta há mais de 90 anos. Cultivávamos café, 
        soja, trigo e, hoje, hortaliças frescas com a mesma paixão que nos acompanha desde a infância. Essa herança nos ensinou 
        a cuidar da terra e de quem consome o que ela nos dá.
      </p>
      </motion.div>

      {/* Estrutura */}
      <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      >
      <h2 className="text-4xl font-bold text-green-800 mb-4">🏗️ Estrutura</h2>
      <p className="text-xl  md:text-left text-gray-700">
        Com quase duas décadas de atuação e sede em Ibiúna (SP), contamos com estrutura própria para colheita, seleção e logística —
        garantindo agilidade e qualidade em cada entrega. Investimos constantemente para manter nossos processos eficientes e sustentáveis,
        com foco total no atendimento às necessidades dos nossos clientes.
      </p>
      </motion.div>

      {/* Presença */}
      <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      >
      <h2 className="text-4xl font-bold text-green-800 mb-4">🛒 Presença</h2>
      <p className="text-xl  md:text-left text-gray-700">
        Desde 2006, entregamos verduras frescas para comércios, sacolões e redes varejistas da região metropolitana. 
        Somos uma escolha confiável para quem busca consistência, frescor e parceria de verdade no fornecimento diário de hortaliças.
      </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;