import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

import { useLocation } from 'react-router-dom';
import categoriesData from '../data/categories';
import { getProductContent } from '../data/productContent';

// Componentes
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderDrawer from '../components/OrderDrawer';

// SEO
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { SITE_CONFIG } from '../config/site';

// Utils
import { createSlug } from '../../src/util/createSlug';

// Interfaces
import type IModel from '../interfaces/IModel';

// Data
import models from '../data/models';

// Style
import styles from './ModelDetail.module.css';


export default function ModelDetail() {
  const { slug } = useParams();
  const [model, setModel] = useState<IModel | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const location = useLocation();

  const isCustom = location.pathname.startsWith('/personalizados/');

  // const category = isCustom
  //   ? categoriesData.Categories.find(
  //     (item) => createSlug(item.name) === slug
  //   )
  //   : undefined;

  // const firstImage = category?.images[0];

  // const content = category
  //   ? getProductContent(category.name, '')
  //   : undefined;

  // const price = category?.price;



  useEffect(() => {
    if (isCustom) {
      const selectedCategory = categoriesData.Categories.find((item) => createSlug(item.name) === slug);

      if (!selectedCategory) {
        setModel(null);
        return;
      }

      const firstImage = selectedCategory.images[0];
      // const productContent = getProductContent(
      //   selectedCategory.name,
      //   ''
      // );

      // const customModel: IModel = {
      //   slug: createSlug(selectedCategory.name),
      //   image_url: firstImage?.image ?? '',
      //   name: `Modelo Personalizado - ${selectedCategory.name}`,
      //   category: selectedCategory.name,
      //   description: productContent.description,
      //   longDescription: productContent.longDescription,
      //   price: selectedCategory.price,
      //   customization:
      //     'Nome, data, horário e local, conforme as opções disponíveis para esta categoria.',
      //   delivery_time:
      //     'Entrega em até 2 dias úteis após confirmação do pagamento.',
      // };
      const customModel: IModel = {
        slug: createSlug(selectedCategory.name),
        image_url: firstImage?.image ?? '',
        name: `Modelo Personalizado - ${selectedCategory.name}`,
        category: selectedCategory.name,

        // Descrição específica dos modelos personalizados
        description: `Modelo personalizado da categoria ${selectedCategory.name}, com design adaptado aos dados do seu evento ou negócio.`,

        longDescription:
          'Este modelo é uma opção personalizada do Gadioli Studio. Após a compra, você poderá informar os dados necessários para a personalização, conforme as opções disponíveis para a categoria selecionada.',

        // Valores fixos exclusivos para personalizados
        price: 20,

        customization:
          'Personalização dos dados conforme a categoria, incluindo nome, data, horário, local ou informações do estabelecimento, quando aplicável.',

        delivery_time:
          'Entrega em até 5 dias úteis após a confirmação do pagamento e o envio de todas as informações necessárias.',

        after_purchase:
          'Após a compra, preencha o formulário com as informações necessárias para personalizar seu modelo e envie o comprovante de pagamento via Pix.',
      };


      setModel(customModel);
      return;
    }

    const found = models.find((item) => item.slug === slug) ?? null;
    setModel(found);
  }, [slug, isCustom]);



  const handleBuy = () => {
    if (!model) return;
    setDrawerOpen(true);
  };


  if (!model) {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.notFound}>
          <h1 className={styles.notFoundTitle}>Modelo não encontrado</h1>
          <Link to="/" className={styles.backLink}>
            Voltar para a página inicial
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',

    name: model.name,

    image: [
      model.image_url.startsWith('http')
        ? model.image_url
        : `${SITE_CONFIG.url}${model.image_url}`,
    ],

    description: model.longDescription || model.description,

    offers: {
      '@type': 'Offer',
      url: `${SITE_CONFIG.url}/modelos/${model.slug}`,
      price: model.price,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_CONFIG.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Modelos',
        item: `${SITE_CONFIG.url}/modelos`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: model.category,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: model.name,
        item: `${SITE_CONFIG.url}/modelos/${model.slug}`,
      },
    ],
  };

  const customizationText = (() => {
    switch (model.category) {
      case 'Flyer':
        return 'Nome do(a) cantor(a), Data, Horário, Local. Posteriormente, enviar foto.';

      case 'Restaurantes':  // Case geral para modelos de alimentação 
      case 'Hamburgueria':
        return 'Nome do Estabelecimento, Endereço, Instagram';

      case 'Chá de fraldas':
      case 'Mesversário':

        return 'Data, Horário e Local.';

      case 'Casamentos':
        return 'Nome do Noivo e da Noiva, Data, Horário e Local.';

      default:
        return 'Nome do(a) Aniversariante, Idade, Data, Horário e Local.';
    }
  })();

  const details = [
    {
      label: 'Preço',
      value: `R$ ${model.price.toFixed(2).replace('.', ',')}`,
    },
    {
      label: 'O que pode ser personalizado',
      value: model.customization || customizationText,
    },
    {
      label: 'Prazo de entrega',
      value:
        model.delivery_time ||
        'Entrega em até 2 dias úteis após confirmação do pagamento.',
    },
    {
      label: 'Após a compra',
      value:
        model.after_purchase ||
        'Após a compra, você preencherá um formulário com todos os dados do seu evento. Envie o pedido e o comprovante Pix do QR code gerado.',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <SEO
        title={
          isCustom
            ? `Modelo Personalizado - ${model.category} | Gadioli Studio`
            : model.seo?.title || `${model.name} | Gadioli Studio`
        }
        description={model.seo?.description || model.description}
        canonical={
          isCustom
            ? `/personalizados/${slug}`
            : `/modelos/${model.slug}`
        }
        image={model.image_url}
      />
      <StructuredData data={productStructuredData} />
      <StructuredData data={breadcrumbStructuredData} />

      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Link to="/modelos" className={styles.backNav}>
            <ArrowLeft size={16} /> Voltar para modelos
          </Link>

          <div className={styles.grid}>
            {/* Left: Image */}
            <div className={styles.leftCol}>
              <div className={styles.imageWrap}>
                <img src={model.image_url} alt={`${model.name} - convite de ${model.category.toLowerCase()}`} className={styles.detailImage} />
              </div>
            </div>

            {/* Right: Details */}
            <div>
              <span className={styles.badge}>{model.category}</span>
              <h1 className={styles.title}>{model.name}</h1>
              <p className={styles.description}>{model.description}</p>

              {model.longDescription && (
                <p className={styles.description}>{model.longDescription}</p>
              )}

              <div className={styles.details}>
                {details.map((d) => (
                  <div key={d.label} className={styles.detailItem}>
                    <p className={styles.detailLabel}>{d.label}</p>
                    <p className={styles.detailValue}>{d.value}</p>
                  </div>
                ))}
              </div>

              <button onClick={handleBuy} className={styles.buyButton}>
                Comprar este Modelo
                <Check size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <OrderDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        modelName={model?.name}
        models={model ? [model] : []}
      />
    </div>
  );
}
