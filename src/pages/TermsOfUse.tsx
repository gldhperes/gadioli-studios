import SEO from '../components/SEO';
import LegalPage, {
  LegalList,
  LegalParagraph,
  LegalSection,
} from './LegalPage';

export default function TermsOfUse() {
  return (
    <>
      <SEO
        title="Termos de Uso | Gadioli Studio"
        description="Consulte as condições de navegação, pedido, pagamento e personalização dos produtos do Gadioli Studio."
        canonical="/termos-de-uso"
      />
      <LegalPage
        eyebrow="Condições do serviço"
        title="Termos de Uso"
        // updatedAt="Última atualização: 13 de outubro de 2026"
        intro="Estes termos explicam como funciona a navegação, a escolha de um modelo e o processo de personalização manual realizado pelo Gadioli Studio."
      >
        <LegalSection title="1. Sobre o site e o serviço" first>
          <LegalParagraph>
            O Gadioli Studio apresenta modelos de convites digitais e peças de divulgação para eventos, aniversários, casamentos, celebrações infantis, estabelecimentos e outras ocasiões. O site funciona como catálogo e canal de solicitação de pedidos.
          </LegalParagraph>
          <LegalParagraph>
            Os modelos apresentados são referências visuais. Depois da confirmação do pedido e do recebimento dos dados necessários, o estúdio realiza a personalização manual de acordo com as possibilidades indicadas na página do produto.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="2. Escolha do modelo e personalização">
          <LegalParagraph>
            Antes de enviar um pedido, o cliente deve conferir a categoria, o preço, o que pode ser personalizado, o prazo informado e as condições específicas do modelo escolhido.
          </LegalParagraph>
          <LegalParagraph>
            Em regra, podem ser personalizados os dados textuais do evento, como nomes, idade, data, horário, local e mensagem. Alterações de cores, personagens, logotipos, composição, formato ou elementos gráficos dependem da descrição do modelo e de confirmação do estúdio.
          </LegalParagraph>
          <LegalParagraph>
            O cliente deve revisar cuidadosamente todos os dados enviados. O Gadioli Studio não se responsabiliza por erros existentes nas informações fornecidas ou aprovadas pelo cliente.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="3. Envio do pedido e comunicação">
          <LegalParagraph>
            O formulário do site coleta os dados necessários para organizar o pedido e pode abrir uma conversa no WhatsApp. O cliente deve acompanhar o canal de atendimento utilizado e responder às solicitações de confirmação ou ajuste.
          </LegalParagraph>
          <LegalParagraph>
            Um pedido pode precisar de informações adicionais antes de entrar em produção. O prazo de entrega começa a ser contado somente quando os dados necessários estiverem completos e o pagamento tiver sido confirmado.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="4. Pagamento e produção">
          <LegalParagraph>
            O pagamento preferencial é realizado via Pix, conforme as instruções exibidas no fluxo do pedido. A produção começa após a confirmação do pagamento e o recebimento das informações completas para personalização.
          </LegalParagraph>
          <LegalParagraph>
            O preço, a forma de pagamento e o prazo aplicáveis são aqueles apresentados no momento do pedido. O estúdio pode atualizar modelos, preços e condições para pedidos futuros, sem alterar as condições já confirmadas sem comunicação adequada.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="5. Prazo e entrega">
          <LegalParagraph>
            O prazo padrão informado no site é de até 2 dias úteis após a confirmação do pagamento e o recebimento de todas as informações necessárias. O prazo pode mudar quando houver dados incompletos, necessidade de esclarecimentos, solicitação de alteração ou indisponibilidade temporária do canal de atendimento.
          </LegalParagraph>
          <LegalParagraph>
            O arquivo final será enviado pelo canal de comunicação informado durante o atendimento. O cliente deve conferir o material recebido e comunicar eventuais problemas relacionados ao pedido.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="6. Materiais enviados pelo cliente">
          <LegalParagraph>
            Ao enviar textos, fotografias, logotipos, personagens, marcas, escudos, referências ou outros materiais, o cliente declara que possui autorização para utilizá-los no pedido. O cliente é responsável por eventuais reclamações de terceiros relacionadas ao material que forneceu.
          </LegalParagraph>
          <LegalParagraph>
            O Gadioli Studio pode recusar ou solicitar a substituição de material que pareça violar direitos autorais, marcas, imagem, privacidade, segurança ou qualquer regra aplicável.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="7. Direitos sobre os arquivos e uso permitido">
          <LegalParagraph>
            O arquivo personalizado é destinado ao uso do cliente no contexto informado durante o pedido. O cliente não deve revender, redistribuir, sublicenciar ou apresentar como próprio o modelo ou o trabalho do estúdio sem autorização.
          </LegalParagraph>
          <LegalParagraph>
            O cliente também não deve utilizar o arquivo para fins ilícitos, enganosos, ofensivos ou que possam prejudicar terceiros. A autorização de uso do arquivo não transfere automaticamente direitos sobre elementos de terceiros que tenham sido fornecidos pelo cliente.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="8. Uso adequado do site">
          <LegalList>
            <li>não tentar acessar áreas, dados ou sistemas sem autorização;</li>
            <li>não enviar código malicioso, spam ou informações fraudulentas;</li>
            <li>não utilizar o formulário para pedidos falsos ou para prejudicar o atendimento;</li>
            <li>não copiar o catálogo, textos, identidade visual ou materiais do site para exploração comercial sem autorização;</li>
            <li>não utilizar a navegação do site para violar direitos de outras pessoas.</li>
          </LegalList>
        </LegalSection>

        <LegalSection title="9. Disponibilidade e alterações">
          <LegalParagraph>
            O estúdio pode atualizar, suspender ou retirar modelos, páginas, imagens e funcionalidades para manutenção, melhoria ou adequação do serviço. O site pode ficar temporariamente indisponível por motivos técnicos, de hospedagem, segurança ou força maior.
          </LegalParagraph>
          <LegalParagraph>
            Estes termos podem ser atualizados quando houver mudança no serviço ou nas condições de atendimento. A versão publicada nesta página será a versão vigente, com a data de atualização indicada no início do documento.
          </LegalParagraph>
        </LegalSection>

        <LegalSection title="10. Contato e dúvidas">
          <LegalParagraph>
            Dúvidas sobre um modelo, personalização, prazo ou pagamento devem ser enviadas pelo canal oficial do Gadioli Studio informado no site. Antes de concluir um pedido, o cliente deve solicitar esclarecimentos sobre qualquer condição que não esteja clara.
          </LegalParagraph>
        </LegalSection>
      </LegalPage>
    </>
  );
}
