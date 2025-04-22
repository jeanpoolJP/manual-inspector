import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Aprende a inspeccionar páginas',
    Svg: require('@site/static/img/inspeccionar.svg').default,
    description: (
      <>
        Este manual te enseña paso a paso cómo usar la herramienta de inspección en tu navegador para explorar y entender cualquier página web.
      </>
    ),
  },
  {
    title: 'Edita el contenido en tiempo real',
    Svg: require('@site/static/img/editar.svg').default,
    description: (
      <>
        Aprende a modificar textos, colores y estilos directamente desde el navegador. ¡Perfecto para pruebas y aprendizaje rápido!
      </>
    ),
  },
  {
    title: 'Explora HTML y CSS fácilmente',
    Svg: require('@site/static/img/explorar.svg').default,
    description: (
      <>
        Conoce cómo está estructurada una página web viendo su HTML y CSS. Ideal para quienes están empezando en el desarrollo web.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
