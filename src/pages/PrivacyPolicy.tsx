import SEO from '../components/SEO';
import LegalPage, {
  LegalLink,
  LegalList,
  LegalParagraph,
  LegalSection,
} from './LegalPage';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Política de Privacidade | Gadioli Studio"
        description="Saiba como o Gadioli Studio coleta, utiliza e protege os dados enviados pelos visitantes e clientes."
        canonical="/politica-de-privacidade"
      />
      <LegalPage
        eyebrow="Informações importantes"
        title="Política de Privacidade"
        // updatedAt="Última atualização: 13 de outubro de 2026"
        intro="Esta política explica quais informações podem ser recebidas pelo Gadioli Studio, para que elas são utilizadas e quais cuidados aplicamos durante o atendimento e a personalização dos pedidos."
      >
        <LegalSection title="1. Quem somos" first>
          <LegalParagraph>
            O Gadioli Studio oferece convites digitais e peças de divulgação personalizadas. Nesta política, os termos “Gadioli Studio”, “nós” e “nosso” se referem ao responsável pela operação deste site e pelo atendimento dos pedidos apresentados na plataforma.
          </LegalParagraph>
          <LegalParagraph>
            Para dúvidas sobre privacidade, o visitante pode utilizar o canal oficial do estúdio no Instagram: <LegalLink href="https://www.instagram.com/gadioli_studios">@gadioli_studios</LegalLink>.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="2. Informações que podemos receber">
          <LegalParagraph>
            Podemos receber informações fornecidas voluntariamente pelo visitante ao solicitar um pedido ou entrar em contato. Dependendo do modelo escolhido, essas informações podem incluir:
          </LegalParagraph>
          <LegalList>
            <li>nome do aniversariante, casal, estabelecimento ou responsável pelo evento;</li>
            <li>data, horário e local do evento;</li>
            <li>idade, mensagem, observações e outros textos para personalização;</li>
            <li>nome de usuário ou perfil de rede social, quando necessário para o pedido;</li>
            <li>fotografias, referências visuais, logotipos e outros arquivos enviados pelo cliente;</li>
            <li>informações relacionadas ao pedido, pagamento e comunicação de atendimento.</li>
          </LegalList>
          <LegalParagraph>
            A hospedagem, a segurança e as ferramentas de análise também podem registrar informações técnicas, como endereço IP, navegador, dispositivo, páginas acessadas e eventos básicos de navegação.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="3. Como utilizamos as informações">
          <LegalParagraph>Utilizamos as informações para:</LegalParagraph>
          <LegalList>
            <li>responder dúvidas e prestar atendimento;</li>
            <li>preparar, personalizar e entregar o produto escolhido;</li>
            <li>confirmar informações do pedido e o status do pagamento;</li>
            <li>solicitar ajustes ou dados que estejam faltando;</li>
            <li>manter a segurança, a estabilidade e o funcionamento do site;</li>
            <li>entender o uso do site e melhorar a experiência, quando ferramentas de análise estiverem ativas;</li>
            <li>cumprir obrigações legais e proteger direitos legítimos do estúdio e dos clientes.</li>
          </LegalList>
          <LegalParagraph>
            Não vendemos dados pessoais. Também não utilizamos os dados enviados no formulário para finalidades incompatíveis com o atendimento do pedido sem informar o visitante e obter a autorização necessária.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="4. Formulário, WhatsApp e serviços de terceiros">
          <LegalParagraph>
            O formulário de pedido pode abrir uma conversa no WhatsApp com as informações preenchidas pelo visitante. Ao continuar para o WhatsApp, o usuário também estará sujeito às políticas e aos termos desse serviço.
          </LegalParagraph>
          <LegalParagraph>
            O site pode utilizar serviços de hospedagem, métricas, segurança, comunicação e publicidade. Esses serviços podem processar dados técnicos de acordo com suas próprias políticas. Mantemos apenas as integrações necessárias para operar e melhorar o serviço.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="5. Cookies, análise e publicidade">
          <LegalParagraph>
            O site pode utilizar cookies e tecnologias semelhantes para funções técnicas, medição de acesso, segurança e, quando habilitada, publicidade. Essas tecnologias podem reconhecer o navegador ou o dispositivo, mas não devem ser utilizadas para solicitar dados além do necessário para a finalidade informada.
          </LegalParagraph>
          <LegalParagraph>
            Quando a legislação aplicável exigir consentimento para determinadas tecnologias de análise ou publicidade, o site deverá apresentar as opções correspondentes antes de ativá-las. O visitante pode limitar cookies nas configurações do próprio navegador, embora isso possa afetar algumas funções.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="6. Compartilhamento e armazenamento">
          <LegalParagraph>
            O acesso às informações é limitado ao que for necessário para atendimento, produção, entrega, hospedagem, segurança e operação do site. Podemos compartilhar informações com prestadores que atuem nessas funções, sempre de acordo com a finalidade do pedido e com as obrigações aplicáveis.
          </LegalParagraph>
          <LegalParagraph>
            Mantemos as informações pelo tempo necessário para concluir o atendimento, cumprir obrigações legais, resolver dúvidas e proteger direitos. Depois desse período, os dados podem ser eliminados ou anonimizados quando não houver motivo legítimo para mantê-los.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="7. Segurança e materiais enviados">
          <LegalParagraph>
            Adotamos medidas razoáveis para proteger as informações contra acesso indevido, perda ou alteração. Nenhum serviço conectado à internet é completamente livre de riscos, por isso recomendamos que o cliente envie apenas os dados e arquivos necessários para o pedido.
          </LegalParagraph>
          <LegalParagraph>
            O cliente deve ter autorização para enviar fotografias, textos, logotipos, personagens, marcas ou outros materiais de terceiros. A responsabilidade pelos direitos de uso do material enviado permanece com quem o forneceu.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="8. Direitos do titular">
          <LegalParagraph>
            O titular pode solicitar informações sobre o tratamento de seus dados e, quando aplicável, pedir correção, atualização, eliminação, anonimização ou revisão de uma finalidade. Para isso, entre em contato pelo canal oficial informado nesta página. Podemos solicitar informações adicionais para confirmar a identidade do solicitante e proteger os dados contra pedidos indevidos.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="9. Crianças e adolescentes">
          <LegalParagraph>
            O site não é direcionado a crianças para criação de contas ou envio independente de pedidos. Quando os dados de um menor aparecerem em um convite, o pedido deve ser realizado por um responsável ou por uma pessoa autorizada a fornecer essas informações.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="10. Alterações nesta política">
          <LegalParagraph>
            Esta política pode ser atualizada para refletir mudanças no serviço, nas ferramentas utilizadas ou nas obrigações aplicáveis. A versão publicada nesta página será a versão vigente, com a data de atualização indicada no início do documento.
          </LegalParagraph>
        </LegalSection>
      </LegalPage>
    </>
  );
}
