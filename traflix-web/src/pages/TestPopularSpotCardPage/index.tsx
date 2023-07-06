import Carousel from 'react-bootstrap/Carousel';
import PopularSpotCardComponent from '../../components/PopularSpotCardComponent';
import useRootData from '../../hooks/useRootData';
import stylesDesktopDefault from './DesktopDefault.module.scss';
import stylesMobileDefault from './MobileDefault.module.scss';
import svg_test1 from '../../assets/images/popular_spot_1.svg';
import svg_test2 from '../../assets/images/popular_spot_2.svg';

const TestPopularSpotCardPage = () => {
  const { screenClass } = useRootData(({ appStore }) => ({
    screenClass: appStore.screenClass.get(),
  }));
  const isDesktop = screenClass === 'xl';

  const styles = isDesktop ? stylesDesktopDefault : stylesMobileDefault;

  return (
    <>
      <Carousel fade className={styles.carousel}>
        <Carousel.Item>
          <PopularSpotCardComponent imgUrl={svg_test1} />
        </Carousel.Item>
        <Carousel.Item>
          <PopularSpotCardComponent imgUrl={svg_test2} />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TestPopularSpotCardPage;
